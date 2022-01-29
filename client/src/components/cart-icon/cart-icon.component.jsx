import { useDispatch, useSelector } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.css';

export const CartIcon = () => {
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggleCartHidden());
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div onClick={onToggle} className='cart-container'>
      <ShoppingIconSVG className='shopping-icon' />
      <span className='item-count-container'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
