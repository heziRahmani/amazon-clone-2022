import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useContext, useState } from "react";
import { CheckoutContext } from "../../context/checkoutContext";
import { UserContext, userContactInfo } from "../../context/userContex";
import { sendUser, upDateDataBase } from "../../firebase/firebaseConfig";

/**
 * stripe configuration (PAYMENT)
 */
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#000",
      background: "black",
      fontWeight: 700,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
    },
    invalid: {
      iconColor: "red",
      color: "black",
    },
  },
};

export default function PaymentForm() {
  const [confirm, setConfirm] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  //checkout items
  const { checkoutItems } = useContext(CheckoutContext);
  console.log(checkoutItems);

  const { userContactInfo } = useContext(UserContext);
  const prodArrey = checkoutItems.map((prod) => ({
    productId: prod.productId,
    productTitle: prod.title,
  }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    //send data to the server
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://ronchon-monsieur-87084.herokuapp.com/payment",
          {
            products: prodArrey,
            id,
          }
        );
        if (response.data.success) {
          setConfirm(true);
          // console.log(userContactInfo.uid);

          //TO_DO:delay the redirect
          setTimeout(function () {
            window.location.replace("/");
          }, 10000);
        }
        console.log(paymentMethod);
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      {!confirm ? (
        <form onSubmit={handleSubmit}>
          <fieldset className='FormGroup'>
            <div className='FormRow'>
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>
            Thank You for your purchase! You will get your product in 14 days.
            Have A Great Day
          </h2>
        </div>
      )}
    </>
  );
}
