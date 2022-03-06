import { CssBaseline, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

import styles from './sign-in-and-sign-up.module.css';

const SignInAndSignUpPage = () => {
  return (
    <Grid container>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        className={styles['sign-in-and-sign-up-image-container']}
      />
      <Outlet />
    </Grid>
  );
};

export default SignInAndSignUpPage;
