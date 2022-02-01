import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import './checkout.styles.css';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    console.log(process.env.REACT_APP_STRIPE_KEY);
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  let items = [];
  cartItems.map((item) => {
    const { price_id, quantity } = item;
    const obj = {
      price: price_id,
      quantity: quantity,
    };
    items.push(obj);
  });

  console.log(items);

  const checkoutOptions = {
    lineItems: items,
    mode: 'payment',
    successUrl: 'http://localhost:3000/shop',
    cancelUrl: 'http://localhost:3000/checkout/cancel',
  };

  const redirectCheckout = async () => {
    console.log('inside redirect to checkout');

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log('Stripe error !', error);
  };

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
      {/* <StripeCheckoutButton price={total} /> */}
      <Button
        onClick={redirectCheckout}
        size='large'
        variant='contained'
        startIcon={<PaymentIcon />}
        sx={{ marginBottom: '40px' }}
      >
        Pay with Stripe
      </Button>
    </div>
  );
};

export default CheckoutPage;
