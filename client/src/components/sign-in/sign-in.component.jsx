import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  TextField,
  Avatar,
  Box,
  Grid,
  Typography,
  Alert,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import { selectSignInErrorMessage } from '../../redux/user/user.selectors';
import useInput from '../../hooks/useInput';
import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg';

import styles from './sign-in.module.css';

const SignIn = () => {
  let formIsValid = false;

  const isNotEmpty = (val) => val.trim() !== '';
  const isValidEmail = (val) => /^\S+@\S+\.\S+$/.test(val);

  const hasErrorInSignIn = useSelector(selectSignInErrorMessage);

  const dispatch = useDispatch();
  const handleGoogleAuth = () => dispatch(googleSignInStart());
  const handleEmailAuth = (email, password) =>
    dispatch(emailSignInStart({ email, password }));

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isValidEmail);

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    handleEmailAuth(enteredEmail, enteredPassword);

    resetEmail();
    resetPassword();
  };

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  return (
    <Grid item xs={12} sm={8} md={5}>
      <Box className={styles['sign-in-container']}>
        <Avatar className={styles['sign-in-avatar']}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        {hasErrorInSignIn && (
          <Alert className={styles['sign-in-error']} severity='error'>
            {hasErrorInSignIn.message}
          </Alert>
        )}
        <Box
          component='form'
          className={styles['sign-in-form']}
          noValidate
          onSubmit={handleSubmit}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            autoFocus
            type='email'
            name='email'
            label='Email'
            color='secondary'
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            error={emailHasError}
            value={enteredEmail}
            {...(emailHasError && {
              helperText: 'Invalid Email Address!',
            })}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            type='password'
            name='password'
            label='Password'
            color='secondary'
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            error={passwordHasError}
            {...(passwordHasError && {
              helperText: 'Password is required!',
            })}
          />
          <Button
            variant='contained'
            size='large'
            fullWidth
            color='secondary'
            type='submit'
            startIcon={<LoginIcon />}
            className={styles['sign-in-button']}
            disabled={!formIsValid}
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
            className={styles['sign-in-google-button']}
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
