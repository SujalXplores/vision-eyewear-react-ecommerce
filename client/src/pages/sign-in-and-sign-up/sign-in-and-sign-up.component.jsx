import { CssBaseline, Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

const SignInAndSignUpPage = () => {
  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Outlet />
    </Grid>
  );
};

export default SignInAndSignUpPage;
