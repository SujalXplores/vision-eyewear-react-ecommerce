import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import List from '@mui/material/List';

import CartItem from '../cart-item/cart-item.component';
import {
  selectCartItems,
  selectCartHidden,
} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCurrentUser } from '../../redux/user/user.selectors';

export const CartDrawer = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  const history = useHistory();

  const toggleDrawer = () => {
    dispatch(toggleCartHidden());
  };

  const list = () => (
    <Box sx={{ width: 250 }} role='presentation' p={3}>
      <List>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span>Your cart is empty</span>
        )}
        {cartItems.length ? (
          <Button
            variant='contained'
            color='secondary'
            size='small'
            endIcon={<ShoppingCartCheckoutIcon />}
            onClick={() => {
              dispatch(toggleCartHidden());
              currentUser
                ? history.push('/checkout')
                : history.replace('/signin');
            }}
          >
            CHECKOUT
          </Button>
        ) : null}
      </List>
    </Box>
  );
  return (
    <SwipeableDrawer
      anchor='right'
      open={hidden}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      {list()}
    </SwipeableDrawer>
  );
};

export default CartDrawer;
