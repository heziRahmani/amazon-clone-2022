import React, { useContext, useEffect } from "react";
import { CheckoutContext } from "../../context/checkoutContext";
import Product from "../products/Product";
import { demoProducts } from "../../demotProduct";
import "./home.scss";
const heroSectionImg = require("../../assets/icons/hero-section.png");

export default function Home() {
  const { checkoutItems } = useContext(CheckoutContext);

  useEffect(() => {}, [checkoutItems]);
  return (
    <div className='home-container'>
      <div className='home-img-box'>
        <img src={heroSectionImg} className='home-img' />
      </div>
      <div className='home-product-row'>
        <div className='home-row-scrool'>
          {demoProducts.map((prod) => (
            <Product
              prod={prod}
              container={"home-row-1"}
              key={prod.productId}
            />
          ))}
        </div>
      </div>
      <div className='home-product-row '>
        <div className='home-row-scrool'>
          {demoProducts.map((prod) => (
            <Product
              prod={prod}
              container={"home-row-2"}
              key={prod.productId}
            />
          ))}
        </div>
      </div>
      <div className='home-product-row '>
        <div className='home-row-scrool'>
          {demoProducts.map((prod) => (
            <Product
              prod={prod}
              container={"home-row-3"}
              key={prod.productId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
