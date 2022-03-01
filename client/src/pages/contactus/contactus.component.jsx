import { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Avatar,
  Typography,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import useInput from '../../hooks/useInput';

const ContactUs = () => {
  let formIsValid = false;

  const isNotEmpty = (val) => val.trim() !== '';
  const isValidEmail = (val) => /^\S+@\S+\.\S+$/.test(val);

  const [error, setError] = useState('');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isValidEmail);

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessage,
  } = useInput(isNotEmpty);

  const sendmail = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    try {
      const res = await fetch('http://localhost:3001/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: enteredEmail,
          message: enteredMessage,
        }),
      });
      const data = await res.json();
      console.log('data', data);
    } catch (error) {
      setError(error.message);
    } finally {
      resetEmail();
      resetMessage();
    }
  };

  if (emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <Box
          sx={{
            my: 2,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <EmailIcon />
          </Avatar>
          <Typography gutterBottom variant='h5'>
            Contact Us
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            gutterBottom
          >
            Fill up the form and our team will get back to you within 24 hours.
          </Typography>
          {error && <Alert severity='error'>{error}</Alert>}
          <Box component='form' sx={{ mt: 1 }} onSubmit={sendmail}>
            <Grid container spacing={1}>
              <TextField
                type='email'
                placeholder='Enter email'
                label='Email'
                color='secondary'
                variant='outlined'
                margin='normal'
                fullWidth
                autoFocus
                required
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                error={emailHasError}
                value={enteredEmail}
                {...(emailHasError && {
                  helperText: 'Invalid Email Address!',
                })}
              />
              <TextField
                color='secondary'
                label='Message'
                multiline
                rows={4}
                placeholder='Type your message here'
                variant='outlined'
                margin='normal'
                fullWidth
                required
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
                value={enteredMessage}
                error={messageHasError}
                {...(messageHasError && {
                  helperText: 'Message cannot be empty!',
                })}
              />
              <Button
                type='submit'
                variant='contained'
                color='secondary'
                sx={{ mt: 3 }}
                fullWidth
                disabled={!formIsValid}
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
