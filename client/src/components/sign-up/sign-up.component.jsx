import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  TextField,
  Avatar,
  Box,
  Grid,
  Typography,
  Alert,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { signUpStart } from '../../redux/user/user.actions';
import useInput from '../../hooks/useInput';
import { selectSignUpErrorMessage } from '../../redux/user/user.selectors';

import styles from './sign-up.module.css';

const SignUp = () => {
  let formIsValid = false;

  const isNotEmpty = (val) => val.trim() !== '';
  const isValidEmail = (val) => /^\S+@\S+\.\S+$/.test(val);

  const hasErrorInSignUp = useSelector(selectSignUpErrorMessage);

  const dispatch = useDispatch();
  const handleSignUp = (userCredentials) =>
    dispatch(signUpStart(userCredentials));

  const {
    value: enteredDisplayName,
    isValid: displayNameIsValid,
    hasError: displayNameHasError,
    valueChangeHandler: displayNameChangeHandler,
    inputBlurHandler: displayNameBlurHandler,
    reset: resetDisplayName,
  } = useInput(isNotEmpty);

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

  const {
    value: enteredConfirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput(isNotEmpty);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    handleSignUp({
      displayName: enteredDisplayName,
      email: enteredEmail,
      password: enteredPassword,
    });

    resetDisplayName();
    resetEmail();
    resetPassword();
    resetConfirmPassword();
  };

  if (
    displayNameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid &&
    enteredPassword === enteredConfirmPassword
  ) {
    formIsValid = true;
  }

  return (
    <Grid item xs={12} sm={8} md={5}>
      <Box className={styles['sign-up-container']}>
        <Avatar className={styles['sign-up-avatar']}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign Up
        </Typography>
        {hasErrorInSignUp && (
          <Alert className={styles['sign-up-error']} severity='error'>
            {hasErrorInSignUp.message}
          </Alert>
        )}
        <Box
          className={styles['sign-up-form']}
          component='form'
          onSubmit={handleSubmit}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            autoFocus
            label='Display Name'
            type='text'
            name='displayName'
            color='secondary'
            value={enteredDisplayName}
            onChange={displayNameChangeHandler}
            onBlur={displayNameBlurHandler}
            error={displayNameHasError}
            {...(displayNameHasError && {
              helperText: 'Display name is required!',
            })}
          />
          <TextField
            margin='normal'
            required
            fullWidth
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
          <TextField
            margin='normal'
            required
            fullWidth
            type='password'
            name='confirmPassword'
            label='Confirm Password'
            color='secondary'
            value={enteredConfirmPassword}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            error={confirmPasswordHasError}
            {...(confirmPasswordHasError && {
              helperText: 'Confirm Password is required!',
            })}
          />

          <Button
            type='submit'
            fullWidth
            color='secondary'
            variant='contained'
            className={styles['sign-up-submit']}
            disabled={!formIsValid}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link
                to='/auth/signin'
                variant='body2'
                color='secondary'
                className={styles['sign-up-link']}
              >
                Already have an account? Sign In
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default SignUp;
