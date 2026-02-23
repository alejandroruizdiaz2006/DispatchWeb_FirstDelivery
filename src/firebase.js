import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5oBGpFc7xiHclPQO5CqqlTp-wnzGGwdg",
  authDomain: "dispatch-web-ard.firebaseapp.com",
  projectId: "dispatch-web-ard",
  storageBucket: "dispatch-web-ard.firebasestorage.app",
  messagingSenderId: "339941422712",
  appId: "1:339941422712:web:a5383c3a793869416a1f8d",
  measurementId: "G-F18DYDRQ5K"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);