import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.css';

export const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const clearItem = (item) => dispatch(clearItemFromCart(item));
  const addItemToCart = (item) => dispatch(addItem(item));
  const removeItemFromCart = (item) => dispatch(removeItem(item));
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='text-container'>{name}</span>
      <span className='text-container quantity-container'>
        <div onClick={() => removeItemFromCart(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItemToCart(cartItem)}>&#10095;</div>
      </span>
      <span className='text-container'>
        {new Intl.NumberFormat('en-IN', {
          currency: 'INR',
          style: 'currency',
          maximumFractionDigits: 0,
        }).format(price)}
      </span>
      <div className='btn-remove' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
