import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crown-ts.firebaseapp.com",
  projectId: "crown-ts",
  storageBucket: "crown-ts.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const fsFetchLinks = async () => {
  const request = await getDocs(collection(firestore, "links"));
  const data = request.docs.map((link) => link.data());

  return data;
};

export const fsFetchCollections = async () => {
  const requset = await getDocs(collection(firestore, "collections"));
  const data = requset.docs.map((collection) => collection.data());

  return data;
};
