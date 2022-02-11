import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/brand-logo.svg';
import './footer.styles.css';

const Footer = () => (
  <footer className='footer-distributed'>
    <div className='footer-left'>
      <Logo className='logo' />

      <p className='footer-links'>
        <Link to='/' className='link-1'>
          Home
        </Link>
        <Link to='/'>Blog</Link>
        <Link to='/'>Pricing</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Faq</Link>
        <Link to='/'>Contact</Link>
      </p>
      <p className='footer-company-name'>Vision Eyewear © 2022</p>
    </div>
    <div className='footer-center'>
      <div>
        <i className='fa fa-map-marker'></i>
        <p>
          <span>503, Nr Klassic Gold Hotel</span> C G Road, Ahmedabad
        </p>
      </div>
      <div>
        <i className='fa fa-phone'></i>
        <p>07955314243</p>
      </div>
      <div>
        <i className='fa fa-envelope'></i>
        <p>
          <a href='mailto:support@company.com'>support@visioneyewear.com</a>
        </p>
      </div>
    </div>
    <div className='footer-right'>
      <p className='footer-company-about'>
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
