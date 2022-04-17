import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../../components/spinner/spinner.component';
import { firestore } from '../../firebase/firebase.utils';
import { clearCart } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import styles from './confirmorder.module.css';

const GreenCheck = () => (
  <svg
    className={styles['checkmark']}
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 52 52'
  >
    <circle
      className={styles['checkmark__circle']}
      cx='26'
      cy='26'
      r='25'
      fill='none'
    />
    <path
      className={styles['checkmark__check']}
      fill='none'
      d='M14.1 27.2l7.1 7.2 16.7-16.8'
    />
  </svg>
);

export default function ConfirmOrder() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [billingDetails, setBillingDetails] = useState(null);
  
  useEffect(() => {
    const clearCartItems = () => dispatch(clearCart());
    (async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const session_id = params.get('session_id');
        if(!session_id) {
          navigate('/page-not-found', { replace: true });
          return;
        }
        console.log('::', session_id);
        const res = await fetch('http://localhost:3001/checkout-session?session_id=' + session_id);
        const session = await res.json();

        console.log('[DATA::]', JSON.stringify(session, null, 2));
        setBillingDetails(session.customer_details.address);
        const createdAt = new Date();

        const orderRef = firestore.collection('orders').doc();
        await orderRef.set({
          createdAt,
          email: session.customer_details.email,
          ordered_items: cartItems,
          total: session.amount_total / 100,
          payment_mode: 'stripe',
          address: session.customer_details.address,
        });
        clearCartItems();
      } catch (error) {
        console.log('Error creating order', error.message);
        navigate('/page-not-found', { replace: true });
      }
    })();
  }, []);

  return (
    <>
      {billingDetails ? (
        <>
          <GreenCheck />
          <div className={styles['order-complete-text']}>
            <h2 className={styles['order-complete-h2']}>Your order is complete!</h2>
            <p>You will be receiving a confirmation email with order details.</p>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}
