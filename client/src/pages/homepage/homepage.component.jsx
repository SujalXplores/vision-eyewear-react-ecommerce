import Banner from '../../components/banner/banner.component';
import Directory from '../../components/directory/directory.component';
import styles from './homepage.module.css';

const HomePage = () => (
  <div className={styles['homepage-container']}>
    <Banner />
    <Directory />
  </div>
);

export default HomePage;
