import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  TextField,
  Avatar,
  Paper,
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

    console.log({
      displayName: enteredDisplayName,
      email: enteredEmail,
      password: enteredPassword,
      address: '',
      phone: '',
    });

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
          Sign Up
        </Typography>
        {hasErrorInSignUp && (
          <Alert severity='error' sx={{ mt: 1 }}>
            {hasErrorInSignUp.message}
          </Alert>
        )}
        <Box component='form' sx={{ mt: 1 }} onSubmit={handleSubmit}>
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
            sx={{ mt: 3, mb: 2 }}
            disabled={!formIsValid}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to='/auth/signin' variant='body2' color='secondary'>
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
