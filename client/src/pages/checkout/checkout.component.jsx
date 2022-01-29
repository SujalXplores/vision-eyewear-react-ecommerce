import { useSelector } from 'react-redux';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import './checkout.styles.css';

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className='checkout-page-container'>
      <div className='checkout-header-container'>
        <div className='header-block-container'>
          <span>Product</span>
        </div>
        <div className='header-block-container'>
          <span>Description</span>
        </div>
        <div className='header-block-container'>
          <span>Quantity</span>
        </div>
        <div className='header-block-container'>
          <span>Price</span>
        </div>
        <div className='header-block-container'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total-container'>
        TOTAL:{' '}
        {new Intl.NumberFormat('en-IN', {
          currency: 'INR',
          style: 'currency',
          maximumFractionDigits: 0,
        }).format(total)}
      </div>
      <StripeCheckoutButton price={total} />
    </div>
  );
};

export default CheckoutPage;
