import { memo } from 'react';
import './cart-item.styles.css';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item-container'>
    <img className='cart-item-img' src={imageUrl} alt='item' />
    <div className='item-details-container'>
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
