import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.css';

export const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div onClick={toggleCartHidden} className='cart-container'>
    <ShoppingIconSVG className='shopping-icon' />
    <span className='item-count-container'>{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
