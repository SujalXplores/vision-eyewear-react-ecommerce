import { Outlet } from 'react-router-dom';
import styles from './shop.module.css';

export const ShopPage = () => (
  <div className={styles['shop-page-container']}>
    <Outlet />
  </div>
);

export default ShopPage;
