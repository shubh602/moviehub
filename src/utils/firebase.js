// Import the functions you need from the SDKs you need
import {getAuth } from 'firebase/auth/cordova'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVMgI-WzAt1MijRv3JPTIoenAIu7XAiB0",
  authDomain: "moviehub-7f110.firebaseapp.com",
  projectId: "moviehub-7f110",
  storageBucket: "moviehub-7f110.firebasestorage.app",
  messagingSenderId: "480422318180",
  appId: "1:480422318180:web:4c6cc7e9ca64ecac5c8f71",
  measurementId: "G-YZXMFGM5BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();