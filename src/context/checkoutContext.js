import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const CheckoutContextProvider = ({ children }) => {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const addToCart = (prod) => {
    console.log(prod);
    setCheckoutItems([...checkoutItems, prod]);
  };
  const removeFromCart = (checkoutItemId) => {
    // console.log(prodId);
    setCheckoutItems(
      checkoutItems.filter((prod) => prod.checkoutItemId !== checkoutItemId)
    );
  };
  return (
    <CheckoutContext.Provider
      value={{ checkoutItems, addToCart, removeFromCart }}>
      {children}
    </CheckoutContext.Provider>
  );
};
