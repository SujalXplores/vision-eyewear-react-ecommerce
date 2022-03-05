import { Outlet } from 'react-router-dom';
import './shop.styles.css';

export const ShopPage = () => (
  <div className='shop-page-container'>
    <Outlet />
  </div>
);

export default ShopPage;
