import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, sendUser } from "../../firebase/firebaseConfig";
import "../../components/signIn/signIn.scss";
import { UserContext } from "../../context/userContex";
import { CheckoutContext } from "../../context/checkoutContext";
const logo = require("../../assets/icons/amazonNavBarIcon-black.png");
export default function Register() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  const { checkoutItems } = useContext(CheckoutContext);

  const registerHendler = (e) => {
    e.preventDefault();

    const userContactInfo = {
      email,
      phoneNum,
      city,
      street,
    };
    createUserWithEmailAndPassword(auth, email, password).then((Credential) => {
      console.log(Credential.user.uid);
      if (Credential) {
        console.log("user creaetd");
        sendUser(userContactInfo, userContactInfo.email);
        userInfo({ ...userContactInfo, uid: Credential.user.uid });
        navigate("/signin");
      }
    });
  };
  return (
    <div className='signin-container'>
      <Link to={"/"} className='signin-home-link'>
        <div className='logo-box'>
          <img src={logo} alt='amazon logo' />
        </div>
      </Link>
      <div className='signin-form-box'>
        <form className='signin-form' onSubmit={registerHendler}>
          <h2>Register</h2>
          <div className='signin-input-box'>
            <label>E-Mail</label>
            <input
              type={"text"}
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className='signin-input-box'>
            <label>Password</label>
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/*  */}
          <div className='signin-input-box'>
            <label>Phone Number</label>
            <input
              type={"number"}
              onChange={(e) => setPhoneNum(e.target.value)}
              required
            />
          </div>
          <div className='signin-input-box'>
            <label>City</label>
            <input
              type={"text"}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className='signin-input-box'>
            <label>Street</label>
            <input
              type={"text"}
              onChange={(e) => setStreet(e.target.value)}
              required
            />
          </div>

          <button className='signIn-btn' type={"submit"}>
            Register
          </button>
        </form>
        <p>
          By continuing, you agree to FAKE Amazon's clone Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <Link to={"/"} className='create-accuont-link'>
        Back To Home Page
      </Link>
    </div>
  );
}
