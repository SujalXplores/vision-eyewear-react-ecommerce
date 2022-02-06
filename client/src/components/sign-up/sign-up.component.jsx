import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
// import FormInput from '../form-input/form-input.component';
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const handleSignUp = (userCredentials) =>
    dispatch(signUpStart(userCredentials));

  const [disable, setDisable] = useState(false);
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
      alert("Confirm password don't match");
      return;
    }
    setDisable(true);
    handleSignUp({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2 className='sign-up-title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <TextField
          type='text'
          style={{ margin: '15px 0' }}
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          variant='standard'
          size='small'
          fullWidth
          color='secondary'
          required
        />
        <TextField
          type='email'
          name='email'
          style={{ margin: '15px 0' }}
          value={email}
          onChange={handleChange}
          label='Email'
          required
          variant='standard'
          size='small'
          fullWidth
          color='secondary'
        />
        <TextField
          type='password'
          name='password'
          style={{ margin: '15px 0' }}
          value={password}
          onChange={handleChange}
          label='Password'
          required
          variant='standard'
          size='small'
          fullWidth
          color='secondary'
        />
        <TextField
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
          style={{ margin: '15px 0' }}
          variant='standard'
          size='small'
          fullWidth
          color='secondary'
        />
        <Button
          variant='contained'
          size='large'
          color='secondary'
          type='submit'
          disabled={disable}
          sx={{ marginTop: '1rem' }}
        >
          SIGN UP
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
