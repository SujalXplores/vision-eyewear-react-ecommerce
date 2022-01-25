import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles';

export const CartDropdown = ({ cartItems, history, dispatch, currentUser }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        currentUser ? history.push('/checkout') : history.replace('/signin');
        dispatch(toggleCartHidden());
      }}
    >
      CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
