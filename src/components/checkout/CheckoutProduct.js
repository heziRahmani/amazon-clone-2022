import React, { useContext } from "react";
import { CheckoutContext } from "../../context/checkoutContext";
import ProductRating from "../products/ProductRating";

export default function CheckoutProduct({ prod }) {
  const { removeFromCart } = useContext(CheckoutContext);
  const removeProdHendeler = () => {
    removeFromCart(prod.checkoutItemId);
  };
  return (
    <div className='checkout-product-main-container'>
      <div className='checkout-product-info-container'>
        <img className='checkout-product-img' src={prod.img} />
        <div className='checkout-product-info-box'>
          <div>
            <p className='checkout-product-info'>{prod.title}</p>
          </div>
          <div>
            <p className='checkout-product-info'>{prod.info}</p>
          </div>
          <p className='checkout-product-price'>
            <small>$</small>
            <strong>{prod.price}</strong>
          </p>
          <div>
            <ProductRating
              rating={prod.rating}
              className='checkout-product-rating'
            />
          </div>
        </div>
      </div>

      <button onClick={() => removeProdHendeler()}>REMOVE FROM CART</button>
    </div>
  );
}
