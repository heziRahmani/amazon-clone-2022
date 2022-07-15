import React, { useContext, useEffect, useState } from "react";
import { CheckoutContext } from "../../context/checkoutContext";
import CheckoutProduct from "./CheckoutProduct";
import "./checkout.scss";
import Subtotal from "./Subtotal";
const banner = require("../../assets/imges/checkout-banner.jpg");
export default function CheckOut() {
  const [numOfItems, setNumOfItems] = useState(0);
  const [caculetedSubTotal, setCaculetedSubTotal] = useState(0);
  const { checkoutItems } = useContext(CheckoutContext);
  //total price calc
  const calcTotalPrice = () => {
    let subtotal = 0;
    checkoutItems.map((item) => {
      setCaculetedSubTotal((subtotal += item.price).toFixed(2));
    });
  };
  useEffect(() => {
    setNumOfItems(checkoutItems?.length);
    calcTotalPrice();
  }, [checkoutItems]);
  return (
    <div className='checkout-container'>
      <div className='checkout-left'>
        <img src={banner} className='checkout-top-banner' />
        <div className='checkOut-title-box'>
          <h2 className='checkOut-title'>Your Shopping Basket</h2>
        </div>
        <div className='checkout-item-box'>
          {/*  */}
          {checkoutItems.map((prod) => (
            <CheckoutProduct prod={prod} key={prod.checkoutItemId} />
          ))}
        </div>
      </div>
      {/*  */}
      <div className='checkout-rigth'>
        <Subtotal numOfItems={numOfItems} subtotal={caculetedSubTotal} />
      </div>
    </div>
  );
}
