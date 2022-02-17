import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Avatar, Paper, Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { signUpStart } from '../../redux/user/user.actions';

const SignUp = () => {
  const dispatch = useDispatch();
  const handleSignUp = (userCredentials) =>
    dispatch(signUpStart(userCredentials));

  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password not matched!")
      return;
    }
    handleSignUp({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

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
        <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin='normal'
            required
            fullWidth
            label='Display Name'
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            color='secondary'
          />
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
          <TextField
            margin='normal'
            required
            fullWidth
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            color='secondary'
          />
          <Button
            type='submit'
            fullWidth
            color='secondary'
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
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
