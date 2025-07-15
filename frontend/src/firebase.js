import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_YiABbAeUIp1q-48py7HBt2aVPSaMsLM",
  authDomain: "recipegram-dd5e0.firebaseapp.com",
  projectId: "recipegram-dd5e0",
  storageBucket: "recipegram-dd5e0.firebasestorage.app",
  messagingSenderId: "865205417173",
  appId: "1:865205417173:web:ab1dc5d848ce8299f61e5c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();