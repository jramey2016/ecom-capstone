import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'


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
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);


  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {displayName: 'mike'}) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            }); 
        }catch(error){
            console.log('there was an error creating the user', error.message);
        }
    }

    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password);
  }


  export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password);
  }