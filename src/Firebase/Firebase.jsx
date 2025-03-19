// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0vYKswgYTjCb-hIqRzcxUiZWDTzSWlTU",
  authDomain: "assignment-10-4739a.firebaseapp.com",
  projectId: "assignment-10-4739a",
  storageBucket: "assignment-10-4739a.firebasestorage.app",
  messagingSenderId: "64590437203",
  appId: "1:64590437203:web:12a570d64aa24a8f129fa6",
  measurementId: "G-1ET05L1M4D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
