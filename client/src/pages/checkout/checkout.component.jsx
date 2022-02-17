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
import './checkout.styles.css';

import { ReactComponent as EmptyCartIcon } from '../../assets/empty-cart.svg';

const getStripe = () => {
  let stripePromise;
  stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
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

  const checkoutOptions = {
    lineItems: items,
    mode: 'payment',
    billingAddressCollection: 'required',
    customerEmail: email,
    successUrl: 'http://localhost:3000/order-confirmed',
    cancelUrl: 'http://localhost:3000/cart',
  };

  const redirectCheckout = async () => {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log('Stripe error !', error);
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
          <div className='total-container'>
            TOTAL:{' '}
            {new Intl.NumberFormat('en-IN', {
              currency: 'INR',
              style: 'currency',
              maximumFractionDigits: 0,
            }).format(total)}
          </div>
          <Button
            onClick={redirectCheckout}
            size='large'
            variant='contained'
            color='secondary'
            startIcon={<PaymentIcon />}
            sx={{ marginBottom: '40px' }}
          >
            Pay with Stripe
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
