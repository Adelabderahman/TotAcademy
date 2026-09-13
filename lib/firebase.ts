import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
};

// Singleton initialization pattern to prevent duplicate instances during Next.js Fast Refresh
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

try {
  const activeConfig = firebaseConfig.apiKey
    ? firebaseConfig
    : {
        apiKey: 'AIzaSyMockKeyForAppletEnvironment12345',
        authDomain: 'tot-academy.firebaseapp.com',
        projectId: 'tot-academy-mock',
        storageBucket: 'tot-academy.appspot.com',
        messagingSenderId: '100000000000',
        appId: '1:100000000000:web:mock1234567890',
      };

  app = !getApps().length ? initializeApp(activeConfig) : getApp();
  auth = getAuth(app);
  db = getFirestore(app);
} catch (err) {
  console.warn('Firebase initialization note:', err);
}

export { app, auth, db };