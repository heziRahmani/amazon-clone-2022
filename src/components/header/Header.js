import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//style
import "./header.scss";
// assets & icons imports
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { CheckoutContext } from "../../context/checkoutContext";
import { UserContext } from "../../context/userContex";
const amazonIcon = require("../../assets/icons/amazonNavBarIcon-w.png");

export default function Header() {
  const [numOfItems, setNumOfItems] = useState(0);
  const { checkoutItems } = useContext(CheckoutContext);
  const { userToken, userEmail, userSignOut } = useContext(UserContext);
  useEffect(() => {
    setNumOfItems(checkoutItems?.length);
  }, [checkoutItems, userToken, userEmail]);
  //email rendering
  let userName = userEmail.split("@")[0];
  return (
    <header className='header-container'>
      <div className='icon-box'>
        <Link to={"/"}>
          <img src={amazonIcon} />
        </Link>
      </div>
      <div className='header-search-box'>
        <input type={"text"} className='header-Search-Input' />
        <div className='header-Search-icon'>
          <SearchIcon />
        </div>
      </div>
      <div className='header-links-container'>
        <div className='header-links-box'>
          <div>
            <span className='header-option-1'>Hello, {userName}</span>
            {userToken ? (
              <Link
                to={"/"}
                className='header-links-option header-links-option-2'
                onClick={() => userSignOut()}>
                <span className='header-option-2'>Sign Out</span>
              </Link>
            ) : (
              <Link
                to={"/signin"}
                className='header-links-option header-links-option-2'>
                <span className='header-option-2'>Sign In</span>
              </Link>
            )}
          </div>
          <div className='header-links-option'>
            <span className='header-option-1'>Returns</span>
            <span className='header-option-2'>& Orders</span>
          </div>
          <div className='header-links-option'>
            <span className='header-option-1'>Your</span>
            <span className='header-option-2'>Praime</span>
          </div>
          <div className='header-links-option'>
            <div className='header-checkout-icon'>
              <Link to={"/checkout"}>
                <ShoppingBasketIcon />
              </Link>
              <span className='header-option-2 header-item-count'>
                {numOfItems}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
