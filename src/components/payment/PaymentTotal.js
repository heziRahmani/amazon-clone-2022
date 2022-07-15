import React, { useContext } from "react";

export default function PaymentTotal({ numOfItems, total }) {
  return (
    <div className='paymentTotal-container'>
      <h2>ORDER TOTAL</h2>
      <div className='paymentTotal-info-box'>
        <p>
          {numOfItems} items:<small>$</small>
          <strong>{total}</strong>
        </p>
      </div>
      <div className='paymentTotal-btn-box'></div>
    </div>
  );
}
