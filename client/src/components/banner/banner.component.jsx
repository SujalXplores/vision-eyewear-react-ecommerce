import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BanerLogo from '../../assets/banner-girl.png';
import styles from './banner.module.css';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['banner']}>
      <div className={styles['banner-desc']}>
        <h1 className={styles['text-thin']}>
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
          onClick={() => navigate('shop')}
          variant='contained'
          endIcon={<ArrowForwardIcon />}
          size='large'
          color='secondary'
        >
          Shop Now
        </Button>
      </div>
      <div className={styles['banner-img']}>
        <img src={BanerLogo} alt='Vision Eyewear' />
      </div>
    </div>
  );
};

export default Banner;
