import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAWjEgmca11b6olATBH9cBRemJ-tPCQVyI",
    authDomain: "ecom-db-jr.firebaseapp.com",
    projectId: "ecom-db-jr",
    storageBucket: "ecom-db-jr.appspot.com",
    messagingSenderId: "881657728849",
    appId: "1:881657728849:web:793f7e12e749abfb2c8d70"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);