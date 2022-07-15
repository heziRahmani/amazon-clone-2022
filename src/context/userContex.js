import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [userEmail, setUserEmail] = useState("Guest");
  const [userContactInfo, setUserContactInfo] = useState({});

  const userSignIn = (userAccessToken, email) => {
    setUserToken(userAccessToken);
    setUserEmail(email);
    console.log("user Signed in");
  };
  const userSignOut = () => {
    setUserToken(null);
    setUserEmail("Guest");
    console.log("user Signed out");
  };
  //   console.log(user);

  const userInfo = (data) => {
    setUserContactInfo(data);
  };
  return (
    <UserContext.Provider
      value={{
        userToken,
        userSignIn,
        userSignOut,
        userEmail,
        userInfo,
        userContactInfo,
      }}>
      {children}
    </UserContext.Provider>
  );
};
