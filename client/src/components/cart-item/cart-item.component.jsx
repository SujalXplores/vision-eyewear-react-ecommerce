import { memo } from 'react';
import styles from './cart-item.module.css';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className={styles['cart-item-container']}>
    <img className={styles['cart-item-img']} src={imageUrl} alt='item' />
    <div className={styles['item-details-container']}>
      <span>{name}</span>
      <span>
        {quantity} x{' '}
        {new Intl.NumberFormat('en-IN', {
          currency: 'INR',
          style: 'currency',
          maximumFractionDigits: 0,
        }).format(price)}
      </span>
    </div>
  </div>
);

export default memo(CartItem);
