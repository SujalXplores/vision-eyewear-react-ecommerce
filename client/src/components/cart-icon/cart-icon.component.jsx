import { useDispatch, useSelector } from 'react-redux';
import { Badge } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

export const CartIcon = () => {
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggleCartHidden());
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div onClick={onToggle} className='cart-container'>
      <Badge badgeContent={itemCount} color='secondary'>
        <ShoppingBagIcon color='action' />
      </Badge>
    </div>
  );
};

export default CartIcon;
