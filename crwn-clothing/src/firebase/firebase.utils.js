import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAZ7xEGjuy7mnHNytaRmRa9gEUD6cDIj7U",
  authDomain: "crwn-clothing-db-602bf.firebaseapp.com",
  projectId: "crwn-clothing-db-602bf",
  storageBucket: "crwn-clothing-db-602bf.appspot.com",
  messagingSenderId: "110512849550",
  appId: "1:110512849550:web:f5fb50d230de4d0938ffdf"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userDocRef;
}