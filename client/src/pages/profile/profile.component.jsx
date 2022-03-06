import { Grid, TextField, Button, Box, Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import styles from './profile.module.css';

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
  const { email, displayName, photoURL } = currentUser;

  return (
    <Grid container component='main' className={styles.root}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        className={styles['profile-image-container']}
      />
      <Grid item xs={12} sm={8} md={5}>
        <Box className={styles['profile-box']}>
          <Avatar
            alt={displayName}
            src={photoURL}
            className={styles['profile-avatar']}
          >
            {displayName.charAt(0)}
          </Avatar>
          <Box component='form' className={styles['profile-form']}>
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
                className={styles['profile-button']}
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
