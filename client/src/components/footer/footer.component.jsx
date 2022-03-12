import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/brand-logo.svg';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles['footer-distributed']}>
    <div className={styles['footer-left']}>
      <Logo className={styles['logo']} />

      <p className={styles['footer-links']}>
        <Link to='/' className={styles['link-1']}>
          Home
        </Link>
        <Link to='/'>Blog</Link>
        <Link to='/'>Pricing</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Faq</Link>
        <Link to='/'>Contact</Link>
      </p>
      <p className={styles['footer-company-name']}>Vision Eyewear © 2022</p>
    </div>
    <div className={styles['footer-center']}>
      <div>
        <p>
          <span>503, Nr Klassic Gold Hotel</span> C G Road, Ahmedabad
        </p>
      </div>
      <div>
        <p>07955314243</p>
      </div>
      <div>
        <p>
          <a href='mailto:support@company.com'>support@visioneyewear.com</a>
        </p>
      </div>
    </div>
    <div className={styles['footer-right']}>
      <p className={styles['footer-company-about']}>
        <span>Buy the best eyewear form vision eyewear</span>
        Vision Eyewear is the leading e-commerce portal for eyewear in India.
        Sunglasses as well as eyeglasses are available for men and women in a
        diverse array of styles and trendy colours. A one-stop online solution
        for purchasing eyewear Vision Eyewear delivers them right at your
        doorstep with convenient methods of payment.
      </p>
    </div>
  </footer>
);

export default Footer;
