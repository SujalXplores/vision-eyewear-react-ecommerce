import { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  CssBaseline,
  Avatar,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import EmailIcon from '@mui/icons-material/Email';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const ContactUs = () => {
  const [message, setMessage] = useState('');
  const currentUser = useSelector(selectCurrentUser);
  const { email } = currentUser;

  const sendmail = async (event) => {
    event.preventDefault();
    const res = await fetch('http://localhost:3001/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setMessage(value);
  };

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <CssBaseline />
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
                value={email}
                disabled
              />
              <TextField
                color='secondary'
                label='Message'
                multiline
                rows={4}
                placeholder='Type your message here'
                variant='outlined'
                margin='normal'
                onChange={handleChange}
                value={message}
                fullWidth
                required
              />
              <Button
                type='submit'
                variant='contained'
                color='secondary'
                sx={{ mt: 3 }}
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
