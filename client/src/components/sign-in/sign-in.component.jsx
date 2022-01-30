import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';

import FormInput from '../form-input/form-input.component';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import './sign-in.styles.css';

const SignIn = () => {
  const dispatch = useDispatch();
  const handleGoogleAuth = () => dispatch(googleSignInStart());
  const handleEmailAuth = (email, password) =>
    dispatch(emailSignInStart({ email, password }));

  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    handleEmailAuth(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2 className='sign-in-title'>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons-bar-container'>
          <Button
            variant='contained'
            size='large'
            color='secondary'
            type='submit'
            startIcon={<LoginIcon />}
          >
            Sign in
          </Button>

          <Button
            variant='outlined'
            type='button'
            size='large'
            color='secondary'
            startIcon={<GoogleIcon />}
            onClick={handleGoogleAuth}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
