import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrfQBnBtH9d427O3FzMLL3qbcD277Bb50',
  authDomain: 'social-network-unidas.firebaseapp.com',
  projectId: 'social-network-unidas',
  storageBucket: 'social-network-unidas.appspot.com',
  messagingSenderId: '398336160441',
  appId: '1:398336160441:web:909a9c6ebfc15c09f72168',
  measurementId: 'G-KT9KCBTH8E',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
