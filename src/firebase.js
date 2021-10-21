import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCgcWozM3v8lIYCcTCnZfeNs28sTa3z6kA",
  authDomain: "coderhouse-ecommerce-23d41.firebaseapp.com",
  projectId: "coderhouse-ecommerce-23d41",
  storageBucket: "coderhouse-ecommerce-23d41.appspot.com",
  messagingSenderId: "602521541467",
  appId: "1:602521541467:web:dbebfe780887deac69987e",
  measurementId: "G-N8LF8M3VDS"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;