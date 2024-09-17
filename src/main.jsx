import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3v1YmDeEmm9bcVh3qMWADl6S8u3UX-6c",
  authDomain: "gamehive-62cc5.firebaseapp.com",
  projectId: "gamehive-62cc5",
  storageBucket: "gamehive-62cc5.appspot.com",
  messagingSenderId: "976469419890",
  appId: "1:976469419890:web:554046e51013906ba31feb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
