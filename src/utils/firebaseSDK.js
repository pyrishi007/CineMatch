import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4VvAeMjsUnaoD_o1u1FBbCz1F9RiUgII",
  authDomain: "cinematch-6bab1.firebaseapp.com",
  projectId: "cinematch-6bab1",
  storageBucket: "cinematch-6bab1.firebasestorage.app",
  messagingSenderId: "834258220179",
  appId: "1:834258220179:web:c86c5d651e46324536c966",
  measurementId: "G-L0BM2K3WKZ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;