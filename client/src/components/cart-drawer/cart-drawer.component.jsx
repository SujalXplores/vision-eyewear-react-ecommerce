import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, List, SwipeableDrawer, Box } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import CartItem from '../cart-item/cart-item.component';
import {
  selectCartItems,
  selectCartHidden,
} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import styles from './cart-drawer.module.css';

import { ReactComponent as EmptyCartIcon } from '../../assets/empty-cart.svg';

export const CartDrawer = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  const navigate = useNavigate();

  const toggleDrawer = () => {
    dispatch(toggleCartHidden());
  };

  const list = () => (
    <Box className={styles['cart-drawer-box']} role='presentation' p={3}>
      <List>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyCartIcon />
        )}
        {cartItems.length ? (
          <Button
            variant='contained'
            color='secondary'
            size='small'
            fullWidth
            endIcon={<ShoppingCartCheckoutIcon />}
            onClick={() => {
              dispatch(toggleCartHidden());
              currentUser
                ? navigate('checkout')
                : navigate('auth/signin', { replace: true });
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
      open={!hidden}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      {list()}
    </SwipeableDrawer>
  );
};

export default CartDrawer;
