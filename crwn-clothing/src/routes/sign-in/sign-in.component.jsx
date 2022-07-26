// import './navigation.styles.scss'
// import { Outlet, Link } from 'react-router-dom'
// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../firebase/firebase.utils'

const Signin = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (<>
    <div>sign in</div>
    <button onClick={logGoogleUser}>sign in with google popup</button>
  </>)
}

export default Signin