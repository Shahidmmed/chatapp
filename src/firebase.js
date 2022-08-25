import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyFKi68Lvd4xYHEoRMdcUqFjb6knGcYQg",
  authDomain: "chat-app-9fbb5.firebaseapp.com",
  projectId: "chat-app-9fbb5",
  storageBucket: "chat-app-9fbb5.appspot.com",
  messagingSenderId: "781356902346",
  appId: "1:781356902346:web:f74964862811b1d6345133",
  measurementId: "G-06145VG07J",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
