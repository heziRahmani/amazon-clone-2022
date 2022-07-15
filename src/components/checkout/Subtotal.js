import React, { useContext } from "react";
import { UserContext } from "../../context/userContex";
import { useNavigate } from "react-router-dom";
export default function Subtotal({ numOfItems, subtotal }) {
  //   console.log(totalPrice);
  //TO-DO:format the price
  const navigate = useNavigate();
  const { userToken } = useContext(UserContext);
  const checkoutPaymentHendeler = (userToken) => {
    if (userToken) {
      navigate("/payment");
      // console.log(userToken);
    } else if (!userToken) {
      alert("To Proceed to payment you need to connect");
    }
  };
  return (
    <div className='subtotal-container'>
      <h2>Subtotal</h2>
      <div className='subtotal-info-box'>
        <p>
          Subtotal {"("}
          {numOfItems} items{")"} :<small>$</small>
          <strong>{subtotal}</strong>
        </p>
        <div className='subtotal-gift-box'>
          <input type={"checkbox"} />
          <p>This product containes a gift</p>
        </div>
      </div>
      <div className='checkout-btn-box'>
        <button
          onClick={() => checkoutPaymentHendeler(userToken)}
          className='checkout-btn'>
          proceed to checkout
        </button>
      </div>
    </div>
  );
}
