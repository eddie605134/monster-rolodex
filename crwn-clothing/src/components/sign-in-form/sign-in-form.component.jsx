import './sign-in-form.style.scss';
import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../firebase/firebase.utils.js'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

/*
  Redirect的用法
  const logGoogleRedirect = async () => {
    const { user } = await signInWithGoogleRedirect()
  }

  useEffect(() => {
    async function getR(params) {
        const respone = await getRedirectResult(auth)
      if (respone) {
        const userDocRef = await createUserDocumentFromAuth(respone.user)
        console.log(userDocRef);
      }
    }

    getR()
  }, [])
  */

const defaultFormField = {
  email: '',
  password: '',
};

const SignUpForm = () => {
  const [FormFields, setFormFields] = useState(defaultFormField);
  const { email, password } = FormFields;

  const resetFormFields = () => {
    setFormFields(defaultFormField)
  }

  const handleChange = (event) => {
    event.preventDefault();
    const {name, value} = event.target
    setFormFields({
      ...FormFields,
      [name]: value
    })
  };

  const handleSumbit = async (event) => {
    event.preventDefault();
    
    try {
      const respone = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(respone);
      resetFormFields()
    } catch (error) {
      switch (error.cdoe) {
        case 'auth/wrong-password':
          alert('incorrect password')
          break;
        case 'auth/user-not-fine':
          alert('invalid email or password')
          break;
        default:
          console.log(error.message)
          break;
      }
    }
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSumbit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType="" type="submit">Sign in</Button>
          <Button buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
        </div>
        
      </form>
    </div>
  );
};

export default SignUpForm;
