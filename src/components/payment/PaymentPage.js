import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.scss";
import "../checkout/checkout.scss";
import { UserContext, userContactInfo } from "../../context/userContex";
import { CheckoutContext } from "../../context/checkoutContext";
import CheckoutProduct from "../checkout/CheckoutProduct";
import PaymentTotal from "./PaymentTotal";
import StripeContainer from "./StripeContainer";

export default function PaymentPage() {
  const [numOfItems, setNumOfItems] = useState(0);
  const [calculetedTotal, setCalculetedTotal] = useState(0);
  const { checkoutItems } = useContext(CheckoutContext);
  const { userEmail, userToken, userContactInfo } = useContext(UserContext);
  console.log(userContactInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userToken) {
      navigate("/signin");
    }
  }, [userToken, userEmail]);

  //total price calc
  const calcTotalPrice = () => {
    let total = 0;
    checkoutItems.map((item) => {
      setCalculetedTotal((total += item.price).toFixed(2));
      // console.log(calculetedTotal);
    });
  };

  useEffect(() => {
    setNumOfItems(checkoutItems.length);
    calcTotalPrice();
  }, [checkoutItems]);

  return (
    <div className='payment-container'>
      <div className='payment-box-delivery'>
        <div className='payment-title'>
          <h3>Delivery Address</h3>
        </div>
        <div className='payment-address'>
          <div>
            <label>E-Mail:</label>
            <p>{userContactInfo[0]?.email}</p>
          </div>
          <div>
            <label>Phone Number:</label>
            <p>{userContactInfo[0]?.phoneNum}</p>
          </div>

          <div>
            <label>Streat:</label>
            <p>{userContactInfo[0]?.street}</p>
          </div>
          <div>
            <label>City:</label>
            <p>{userContactInfo[0]?.city}</p>
          </div>
        </div>
        <div className='payment-'></div>
      </div>
      <div className='payment-middel-box'>
        <div className='payment-left-container'>
          <div>
            <div className='payment-box-products'>
              {checkoutItems.map((prod) => (
                <CheckoutProduct prod={prod} key={prod.checkoutItemId} />
              ))}
            </div>
          </div>
        </div>
        <div className='payment-right-container'>
          <PaymentTotal numOfItems={numOfItems} total={calculetedTotal} />
          <div className='payment-box-payment'>
            <div>
              <StripeContainer />
            </div>
          </div>
          <p>Test Card Info</p>
          <p>Card Number: 4242 4242 4242 4242</p>
          <p>Date: 04 / 24</p>
          <p>CCV Num: 242</p>
          <p>Postal Code: 12345</p>
        </div>
      </div>
    </div>
  );
}
