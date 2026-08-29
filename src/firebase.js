import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjolGNDdwkN4V__xQ_l8C2sDIk_uXtIwE",
  authDomain: "portfolio-visitor-counte-1a775.firebaseapp.com",
  projectId: "portfolio-visitor-counte-1a775",
  storageBucket: "portfolio-visitor-counte-1a775.firebasestorage.app",
  messagingSenderId: "483948941500",
  appId: "1:483948941500:web:78fa008d6889d8293200b9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
