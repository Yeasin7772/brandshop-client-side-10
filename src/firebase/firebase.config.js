// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvB0lnbAaLSJEb90dU_pfTQvQgDNz-544",
  authDomain: "automotive-client-shop.firebaseapp.com",
  projectId: "automotive-client-shop",
  storageBucket: "automotive-client-shop.appspot.com",
  messagingSenderId: "295390252053",
  appId: "1:295390252053:web:b9ff16fe35e440541ad21c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;