import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkwPQjYl4-kMhX9Liok7Qx38F98nN6EVk",
  authDomain: "chat-app-838b0.firebaseapp.com",
  projectId: "chat-app-838b0",
  storageBucket: "chat-app-838b0.appspot.com",
  messagingSenderId: "154224321393",
  appId: "1:154224321393:web:49124adbd8df7a0d3c8cd0",
  measurementId: "G-X2MDN6XHEL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);