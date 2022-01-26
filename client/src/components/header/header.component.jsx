import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { ReactComponent as Logo } from '../../assets/brand-logo.svg';
import './header.styles.css';

export const Header = ({ currentUser, hidden, signOutStart }) => (
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
        <Link as='div' onClick={signOutStart} to='/'>
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
