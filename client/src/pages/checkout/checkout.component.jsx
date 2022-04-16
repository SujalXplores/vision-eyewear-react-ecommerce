import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as EmptyCartIcon } from '../../assets/empty-cart.svg';

import styles from './checkout.module.css';

const getStripe = () => {
  let stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  return stripePromise;
};

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  let items = [];
  cartItems.map((item) => {
    const { price_id, quantity } = item;
    const obj = {
      price: price_id,
      quantity: quantity,
    };
    items.push(obj);
    return items;
  });

  const { email } = currentUser;

  const redirectCheckout = async () => {
    const res = await fetch('http://localhost:3001/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items,
        email,
      }),
    });

    const session = await res.json();
    console.log(session.session.id);
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({ sessionId: session.session.id });
    console.log('ERROR::', error);
  };

  return (
    <>
      {cartItems.length ? (
        <div className={styles['checkout-page-container']}>
          <div className={styles['checkout-header-container']}>
            <div className={styles['header-block-container']}>
              <span>Product</span>
            </div>
            <div className={styles['header-block-container']}>
              <span>Description</span>
            </div>
            <div className={styles['header-block-container']}>
              <span>Quantity</span>
            </div>
            <div className={styles['header-block-container']}>
              <span>Price</span>
            </div>
            <div className={styles['header-block-container']}>
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className={styles['checkout-bottom']}>
            <span className={styles['total-container']}>
              Total:{' '}
              {new Intl.NumberFormat('en-IN', {
                currency: 'INR',
                style: 'currency',
                maximumFractionDigits: 0,
              }).format(total)}
              {'/-'}
            </span>
          </div>
          <Button
            onClick={redirectCheckout}
            variant='contained'
            color='secondary'
            startIcon={<PaymentIcon />}
            className={styles['place-order-button']}
          >
            Pay with Card
          </Button>
        </div>
      ) : (
        <div className={styles['empty-cart-grid']}>
          <EmptyCartIcon className={styles['empty-cart-icon']} />
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
