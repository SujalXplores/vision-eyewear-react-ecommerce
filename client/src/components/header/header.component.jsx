import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDrawer from '../cart-drawer/cart-drawer.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { ReactComponent as Logo } from '../../assets/brand-logo.svg';
import './header.styles.css';

export const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [open, setOpen] = useState(false);

  const onSignOut = () => {
    dispatch(signOutStart());
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='header-container'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options-container'>
        <Link className='option-link' to='/shop'>
          Shop
        </Link>
        <Link className='option-link' to='/shop'>
          Contact
        </Link>
        {currentUser ? (
          <Link as='div' onClick={handleClickOpen} to='/'>
            Sign Out
          </Link>
        ) : (
          <Link className='option-link' to='/signin'>
            Sign In
          </Link>
        )}
        <CartIcon />
        {currentUser && (
          <Avatar
            alt={currentUser.displayName}
            src={currentUser.photoURL}
            sx={{ width: 30, height: 30 }}
          >
            {currentUser?.displayName?.charAt(0)}
          </Avatar>
        )}
      </div>
      <Dialog open={open} keepMounted onClose={handleClose}>
        <DialogTitle>
          <LogoutIcon sx={{ verticalAlign: 'middle', marginRight: '10px' }} />
          Confirm Signout
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to sign out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={onSignOut} color='error'>
            Signout
          </Button>
        </DialogActions>
      </Dialog>
      <CartDrawer />
    </div>
  );
};

export default Header;
