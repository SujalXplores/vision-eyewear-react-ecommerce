import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDrawer from '../cart-drawer/cart-drawer.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { ReactComponent as Logo } from '../../assets/brand-logo.svg';
import './header.styles.css';

export const Header = () => {
  const dispatch = useDispatch();
  const onSignOut = () => dispatch(signOutStart());
  const currentUser = useSelector(selectCurrentUser);
  console.log(currentUser);
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
        {currentUser && (
          <Avatar alt={currentUser.displayName} src={currentUser.photoURL}>
            {currentUser.displayName.charAt(0)}
          </Avatar>
        )}
      </div>
      <CartDrawer />
    </div>
  );
};

export default Header;
