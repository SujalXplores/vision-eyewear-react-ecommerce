import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.css';

export const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const history = useHistory();
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items-container'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-cart-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        className='cart-dropdown-button btn-secondary'
        onClick={() => {
          dispatch(toggleCartHidden());
          currentUser ? history.push('/checkout') : history.replace('/signin');
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
