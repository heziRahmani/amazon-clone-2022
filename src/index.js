import React from "react";
import ReactDOM from "react-dom/client";
import "./SASS/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CheckoutContextProvider } from "./context/checkoutContext";
import { UserContextProvider } from "./context/userContex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CheckoutContextProvider>
        <App />
      </CheckoutContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

reportWebVitals();
