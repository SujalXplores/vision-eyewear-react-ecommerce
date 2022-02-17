import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  TextField,
  Avatar,
  Paper,
  Box,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

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

  const GoogleIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='24'
      height='24'
      viewBox='0 0 48 48'
    >
      <path
        fill='#FFC107'
        d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
      ></path>
      <path
        fill='#FF3D00'
        d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
      ></path>
      <path
        fill='#4CAF50'
        d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
      ></path>
      <path
        fill='#1976D2'
        d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
      ></path>
    </svg>
  );

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} square>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin='normal'
            required
            fullWidth
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            color='secondary'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            color='secondary'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            variant='contained'
            size='large'
            fullWidth
            color='secondary'
            type='submit'
            startIcon={<LoginIcon />}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign in
          </Button>
          <Button
            variant='outlined'
            type='button'
            size='large'
            fullWidth
            color='secondary'
            startIcon={<GoogleIcon />}
            onClick={handleGoogleAuth}
            sx={{ mb: 2 }}
          >
            Sign in with Google
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/auth/signup' variant='body2' color='secondary'>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignIn;
