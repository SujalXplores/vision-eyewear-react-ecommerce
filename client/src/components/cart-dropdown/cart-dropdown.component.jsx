import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.css';

export const CartDropdown = ({ cartItems, history, dispatch, currentUser }) => (
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
        currentUser ? history.push('/checkout') : history.replace('/signin');
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
