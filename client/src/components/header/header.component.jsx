import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { ReactComponent as Logo } from '../../assets/brand-logo.svg';
import './header.styles.css';

export const Header = () => {
  const dispatch = useDispatch();
  const onSignOut = () => dispatch(signOutStart());
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);
  return (
    <div className='header-container'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options-container'>
        <Link className='option-link' to='/shop'>
          SHOP
        </Link>
        <Link className='option-link' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <Link as='div' onClick={onSignOut} to='/'>
            SIGN OUT
          </Link>
        ) : (
          <Link className='option-link' to='/signin'>
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
