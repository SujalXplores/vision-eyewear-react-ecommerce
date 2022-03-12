import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Button, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import PaymentsIcon from '@mui/icons-material/Payments';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import styles from './checkout.module.css';

import { ReactComponent as EmptyCartIcon } from '../../assets/empty-cart.svg';
import { firestore } from '../../firebase/firebase.utils';
import { clearCart } from '../../redux/cart/cart.actions';

const getStripe = () => {
  let stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  return stripePromise;
};

export const CheckoutPage = () => {
  const [checkOutMode, setCheckOutMode] = useState('cash');
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clearCartItems = () => dispatch(clearCart());

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

  const checkoutOptions = {
    lineItems: items,
    mode: 'payment',
    billingAddressCollection: 'required',
    customerEmail: email,
    successUrl: 'http://localhost:3000/order-confirmed',
    cancelUrl: 'http://localhost:3000',
  };

  const redirectCheckout = async () => {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log('Stripe error !', error);
  };

  const handleCheckoutModeChange = (e) => {
    setCheckOutMode(e.target.value);
  };

  const handlePlaceOrder = async () => {
    if (checkOutMode === 'cash') {
      const createdAt = new Date();
      try {
        const orderRef = firestore.collection('orders').doc();
        await orderRef.set({
          createdAt,
          email,
          ordered_items: cartItems,
          total,
          payment_mode: 'cash',
        });
        clearCartItems();
        navigate('/order-confirmed');
      } catch (error) {
        console.log('error creating order', error.message);
      }
    } else {
      redirectCheckout();
    }
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
            <RadioGroup
              row
              name='checkout-option'
              value={checkOutMode}
              onChange={handleCheckoutModeChange}
              className={styles['checkout-option-container']}
            >
              <FormControlLabel value='cash' control={<Radio />} label='Cash' />
              <FormControlLabel
                value='stripe'
                control={<Radio />}
                label='Credit / Debit Card'
              />
            </RadioGroup>
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
            onClick={handlePlaceOrder}
            variant='contained'
            color='secondary'
            startIcon={
              checkOutMode === 'stripe' ? <PaymentIcon /> : <PaymentsIcon />
            }
            className={styles['place-order-button']}
          >
            {checkOutMode === 'stripe' ? 'Pay with Card' : 'Cash on Delivery'}
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
