import { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Box,
  Avatar,
  Typography,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import useInput from '../../hooks/useInput';

import styles from './contactus.module.css';

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
      console.log(data);
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
    <Grid container component='main' className={styles['contactus-container']}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        className={styles['contactus-image-container']}
      />
      <Grid item xs={12} sm={8} md={5}>
        <Box className={styles['contactus-box']}>
          <Avatar className={styles['contactus-avatar']}>
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
          <Box
            component='form'
            className={styles['contactus-form']}
            onSubmit={sendmail}
          >
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
                className={styles['contactus-button']}
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
