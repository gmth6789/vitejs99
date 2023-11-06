// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMLNlF6oamdzv7KSTCbA37B9nMNzd37rs",
  authDomain: "linebot-gm.firebaseapp.com",
  databaseURL: "https://linebot-gm-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "linebot-gm",
  storageBucket: "linebot-gm.appspot.com",
  messagingSenderId: "525630926722",
  appId: "1:525630926722:web:5b1ce4494640d2324de99b",
  measurementId: "G-JE8EXB2V9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);