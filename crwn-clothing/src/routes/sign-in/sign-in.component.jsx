// import './navigation.styles.scss'
// import { Outlet, Link } from 'react-router-dom'
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'


import { 
  auth, 
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect 
} from '../../firebase/firebase.utils'

import SigInForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

  // useEffect(() => {
  //   async function getR(params) {
  //       const respone = await getRedirectResult(auth)
  //     if (respone) {
  //       const userDocRef = await createUserDocumentFromAuth(respone.user)
  //       console.log(userDocRef);
  //     }
  //   }

  //   getR()
  // }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  const logGoogleRedirect = async () => {
    const { user } = await signInWithGoogleRedirect()
  }
  return (<>
    <div>sign in</div>
    <button onClick={logGoogleUser}>sign in with google popup</button>
    <SigInForm />
  </>)
}

export default SignIn