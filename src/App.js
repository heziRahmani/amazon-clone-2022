// import './App.css';

import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from "./components/checkout/CheckOut";
import PaymentPage from "./components/payment/PaymentPage";
import Home from "./components/home/Home";
import Layout from "./components/Layout/Layout";
import SignIn from "./components/signIn/SignIn";
import { UserContext } from "./context/userContex";
import { auth, getUserData } from "./firebase/firebaseConfig";

import Register from "./components/register/Register";

function App() {
  const { userSignIn, userSignOut } = useContext(UserContext);
  const { userInfo } = useContext(UserContext);

  ///

  ///
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.accessToken) {
        userSignIn(user.accessToken, user.email);
        getUserData(user.email).then((user) => {
          userInfo(user);
        });
      } else {
        userSignOut();
      }
    });
  }, []);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='checkout' element={<CheckOut />} />
            <Route path='payment' element={<PaymentPage />} />
          </Route>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/payment' element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
