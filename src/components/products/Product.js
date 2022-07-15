import React, { useContext } from "react";
import { CheckoutContext } from "../../context/checkoutContext";
import { UserContext } from "../../context/userContex";
import ProductRating from "./ProductRating";
import "./products.scss";

export default function Product({ prod, container }) {
  const { addToCart } = useContext(CheckoutContext);
  const { userEmail } = useContext(UserContext);
  const addProdHendeler = () => {
    const product = {
      checkoutItemId: prod.productId + Math.floor(Math.random() * 10000),
      productId: prod.productId,
      title: prod.title,
      info: prod.info,
      price: prod.price,
      img: prod.img,
      rating: prod.rating,
      userEmail,
    };
    addToCart(product);
  };
  return (
    <div className={`product-container ${container}`}>
      <div className='product-info-top'>
        <div>
          <h2 className='product-info-title'>{prod.title}</h2>
        </div>
        <div>
          <p className='product-info-body'>{prod.info}</p>
        </div>
        <div className='product-price-box'>
          <p className='product-price'>
            <small>$</small>
            <strong>{prod.price}</strong>
          </p>
          <div>
            <ProductRating rating={prod.rating} />
          </div>
        </div>
      </div>

      <div className='product-img-box'>
        <img className='product-img' src={prod.img} />
      </div>
      <div className='product-btn-box'>
        <button onClick={() => addProdHendeler()}>add to cart</button>
      </div>
    </div>
  );
}
