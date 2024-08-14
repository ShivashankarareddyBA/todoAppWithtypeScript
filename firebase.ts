// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAOvg3HAf2MU0pLbzLvkZKUTsRvDJkT2o",
  authDomain: "todoapp-d9d6f.firebaseapp.com",
  projectId: "todoapp-d9d6f",
  storageBucket: "todoapp-d9d6f.appspot.com",
  messagingSenderId: "487114344278",
  appId: "1:487114344278:web:f786728122f31147d238f7",
  measurementId: "G-QDRDJBMBG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export{analytics}