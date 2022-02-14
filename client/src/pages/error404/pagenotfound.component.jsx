import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './pagenotfound.styles.css';

const PageNotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className='page-not-found'>
      <div className='text-404'>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
      <Button variant='outlined' color='secondary' onClick={goToHome}>
        Go to homepage
      </Button>
    </div>
  );
};

export default PageNotFound;
