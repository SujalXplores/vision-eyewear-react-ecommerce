import { useDispatch, useSelector } from 'react-redux';
import { Badge, Tooltip, IconButton } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

export const CartIcon = () => {
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggleCartHidden());
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div className='cart-container'>
      <Tooltip title='Cart'>
        <IconButton onClick={onToggle} size='small'>
          <Badge badgeContent={itemCount} color='secondary'>
            <ShoppingBagIcon color='action' />
          </Badge>
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default CartIcon;
