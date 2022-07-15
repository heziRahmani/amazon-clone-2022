import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, createUser } from "../../firebase/firebaseConfig";
import "./signIn.scss";
import { UserContext } from "../../context/userContex";
import Register from "../register/Register";
const logo = require("../../assets/icons/amazonNavBarIcon-black.png");
export default function SignIn() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { userSignIn } = useContext(UserContext);
  const signInHendeler = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((Credential) => {
        if (Credential) {
          console.log(Credential.user.email);
          userSignIn(Credential.user.accessToken, Credential.user.email);
          navigate("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='signin-container'>
      <Link to={"/"} className='signin-home-link'>
        <div className='logo-box'>
          <img src={logo} alt='amazon logo' />
        </div>
      </Link>
      <div className='signin-form-box'>
        <form className='signin-form' onSubmit={signInHendeler}>
          <h2>Sign-IN</h2>
          <div className='signin-input-box'>
            <label>E-Mail</label>
            <input type={"text"} onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className='signin-input-box'>
            <label>Password</label>
            <input
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='signIn-btn' type={"submit"}>
            Sign-in
          </button>
        </form>
        <p>
          By continuing, you agree to FAKE Amazon's clone Conditions of Use and
          Privacy Notice.
        </p>
        <Link to={"/register"} className='create-accuont-link'>
          Create you'r FAKE Amazon Accuont
        </Link>
      </div>
    </div>
  );
}
