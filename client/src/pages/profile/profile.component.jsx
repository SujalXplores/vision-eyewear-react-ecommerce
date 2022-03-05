import {
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Avatar,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  const { email, displayName, photoURL } = currentUser;

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1504131598085-4cca8500b677?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)',
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
          <Avatar
            alt={displayName}
            src={photoURL}
            sx={{ m: 1, bgcolor: 'secondary.main' }}
          >
            {displayName.charAt(0)}
          </Avatar>
          <Box component='form' sx={{ mt: 1 }}>
            <Grid container spacing={1}>
              <TextField
                type='email'
                placeholder='Enter email'
                label='Email'
                color='secondary'
                variant='outlined'
                margin='normal'
                size='small'
                fullWidth
                autoFocus
                required
                disabled
                value={email}
              />
              <TextField
                type='email'
                label='Email'
                color='secondary'
                variant='outlined'
                margin='normal'
                size='small'
                fullWidth
                autoFocus
                required
                disabled
                value={email}
              />
              <TextField
                type='text'
                label='Name'
                color='secondary'
                variant='outlined'
                margin='normal'
                size='small'
                fullWidth
                required
              />
              <TextField
                type='text'
                label='Phone Number'
                color='secondary'
                variant='outlined'
                margin='normal'
                size='small'
                fullWidth
                required
              />
              <TextField
                color='secondary'
                label='Address'
                multiline
                rows={4}
                placeholder='Yore address here...'
                variant='outlined'
                margin='normal'
                size='small'
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
                Save
              </Button>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Profile;
