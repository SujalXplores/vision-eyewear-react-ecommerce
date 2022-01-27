import Banner from '../../components/banner/banner.component';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.css';

const HomePage = () => (
  <div className='homepage-container'>
    <Banner />
    <Directory />
  </div>
);

export default HomePage;
