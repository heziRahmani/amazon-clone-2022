/**
 * firebase configurtion file
 */
//imports
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  doc,
  addDoc,
  query,
  updateDoc,
  getDocs,
} from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
// import {}from "react-firebase-hooks"
//vriables
const {
  REACT_APP_apiKey,
  REACT_APP_authDomain,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
  REACT_APP_appId,
} = process.env;
const firebaseConfig = {
  apiKey: "AIzaSyBxvdLed22K7hnrvuON_iRGmVYyvciDZuE",
  authDomain: "e-clone-fdeef.firebaseapp.com",
  projectId: "e-clone-fdeef",
  storageBucket: "e-clone-fdeef.appspot.com",
  messagingSenderId: "180571395050",
  appId: "1:180571395050:web:e661a3422d8c59f09b5893",
};
//initialize
initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();

//auth
export function createUser(email, password) {
  //  console.log(email);
  //  console.log(password);
  createUserWithEmailAndPassword(auth, email, password)
    .then((Credential) => {
      console.log("user creaetd");
      console.log(Credential);
      // return Credential;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

//fire base collection
export const promiseRef = collection(db, "promisePage");
// export const userInfoRef = collection(
//   db,
//   "users",
//   "contactInfo",
//   "test3@test.com"
// );

// QUERYS
//get data
export const getUserData = async (user) => {
  const userInfoRef = collection(db, "users", "contactInfo", user);
  let userData = [];
  await getDocs(userInfoRef).then((snapshot) => {
    // console.log(snapshot.docs);
    snapshot.docs.forEach((doc) => {
      userData.push({ ...doc.data() });
    });
  });
  return userData;
};
// send Data
export const sendUser = (data, userId) => {
  console.log(userId);
  console.log(data);
  const userColl = collection(db, "users", "contactInfo", userId);
  addDoc(userColl, { ...data });
};
// export const sendUserOrder = (data, userId) => {
//   console.log(data);
//   console.log(userId);
//   const userOrderColl = collection(db, "orders", "clientOrders", userId);
//   updateDoc(userOrderColl, { ...data });
// };

//updat document
