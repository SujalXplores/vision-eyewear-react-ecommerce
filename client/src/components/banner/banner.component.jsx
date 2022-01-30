import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BanerLogo from '../../assets/banner-girl.png';
import './banner.styles.css';

const Banner = () => {
  const history = useHistory();

  return (
    <div className='banner'>
      <div className='banner-desc'>
        <h1 className='text-thin'>
          <strong>See</strong>&nbsp;everything with&nbsp;
          <strong>Clarity</strong>
        </h1>
        <p>
          Buying eyewear should leave you happy and good-looking, with money in
          your pocket. Glasses, sunglasses, and contacts—we've got your eyes
          covered.
        </p>
        <br />
        <Button
          onClick={() => history.push('/shop')}
          variant='contained'
          endIcon={<ArrowForwardIcon />}
          size='large'
          color='secondary'
        >
          Shop Now
        </Button>
      </div>
      <div className='banner-img'>
        <img src={BanerLogo} alt='Vision Eyewear' />
      </div>
    </div>
  );
};

export default Banner;
