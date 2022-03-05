import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
import LoginIcon from '@mui/icons-material/Login';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';
import { selectSignInErrorMessage } from '../../redux/user/user.selectors';
import useInput from '../../hooks/useInput';
import { ReactComponent as GoogleIcon } from '../../assets/google-icon.svg';

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
        {hasErrorInSignIn && (
          <Alert severity='error' sx={{ mt: 1 }}>
            {hasErrorInSignIn.message}
          </Alert>
        )}
        <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
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
            sx={{ mt: 3, mb: 2 }}
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
