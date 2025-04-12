// src/lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCebLRG6w9TmInTlhCb1VSBqI0vJeiWvqE",
  authDomain: "bicikingv.firebaseapp.com",
  projectId: "bicikingv",
  storageBucket: "bicikingv.firebasestorage.app",
  messagingSenderId: "275856031384",
  appId: "1:275856031384:web:b81989d229bab5c8775aed",
  measurementId: "G-LC78C5GVG4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);