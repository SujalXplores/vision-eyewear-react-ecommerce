import { useState } from 'react';
import { useSelector } from 'react-redux';
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
import './checkout.styles.css';

import { ReactComponent as EmptyCartIcon } from '../../assets/empty-cart.svg';
import { firestore } from '../../firebase/firebase.utils';

const getStripe = () => {
  let stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  return stripePromise;
};

export const CheckoutPage = () => {
  const [checkOutMode, setCheckOutMode] = useState('cash');
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

  const { email, id } = currentUser;

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
      console.log('Cash mode');
      console.log(currentUser);
      console.log(cartItems);
      console.log(total);
      const createdAt = new Date();
      const orderRef = firestore.doc(`orders/${email}/${id}/${createdAt}`);
      try {
        await orderRef.set({
          ordered_items: cartItems,
          total,
        });
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
          <div className='checkout-bottom'>
            {console.log(checkOutMode)}
            <RadioGroup
              row
              name='checkout-option'
              value={checkOutMode}
              onChange={handleCheckoutModeChange}
              sx={{ mt: '15px' }}
            >
              <FormControlLabel value='cash' control={<Radio />} label='Cash' />
              <FormControlLabel
                value='stripe'
                control={<Radio />}
                label='Credit / Debit Card'
              />
            </RadioGroup>
            <span className='total-container'>
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
            sx={{ marginBottom: '40px' }}
          >
            {checkOutMode === 'stripe' ? 'Pay with Card' : 'Cash on Delivery'}
          </Button>
        </div>
      ) : (
        <div style={{ display: 'grid', placeItems: 'center' }}>
          <EmptyCartIcon style={{ height: '50vh' }} />
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
