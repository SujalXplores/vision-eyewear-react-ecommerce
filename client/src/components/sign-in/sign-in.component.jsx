import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';

// import FormInput from '../form-input/form-input.component';
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

  const [disable, setDisable] = useState(false);
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setDisable(true);
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
        <TextField
          name='email'
          type='email'
          onChange={handleChange}
          value={email}
          label='Email'
          required
          style={{ margin: '25px 0' }}
          variant='standard'
          size='small'
          fullWidth
          color='secondary'
        />
        <TextField
          name='password'
          type='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
          style={{ margin: '25px 0' }}
          variant='standard'
          size='small'
          fullWidth
          color='secondary'
        />
        <div className='buttons-bar-container'>
          <Button
            variant='contained'
            size='large'
            color='secondary'
            type='submit'
            disabled={disable}
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
