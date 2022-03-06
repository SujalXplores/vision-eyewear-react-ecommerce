import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  ListItemIcon,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDrawer from '../cart-drawer/cart-drawer.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';
import { ReactComponent as Logo } from '../../assets/brand-logo.svg';
import styles from './header.module.css';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const isAvatarMenuOpen = Boolean(anchorEl);

  const navigateToProfile = () => {
    handleAvatarClose();
    navigate('/profile');
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  const onSignOut = () => {
    dispatch(signOutStart());
    setOpen(false);
    navigate('/', { replace: true });
  };

  const handleOpenDialog = () => {
    setAnchorEl(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles['header-container']}>
      <Link to='/' className={styles['logo-container']}>
        <Logo className={styles['logo']} />
      </Link>
      <div className={styles['options-container']}>
        <Link className={styles['option-link']} to='/shop'>
          Shop
        </Link>
        <Link className={styles['option-link']} to='/contactus'>
          Contact Us
        </Link>
        {!currentUser && (
          <Link className={styles['option-link']} to='/auth/signin'>
            Sign In
          </Link>
        )}
        <CartIcon />
        {currentUser && (
          <>
            <Tooltip title='Account settings'>
              <IconButton onClick={handleAvatarClick} size='small'>
                <Avatar
                  alt={currentUser.displayName}
                  src={currentUser.photoURL}
                  className={styles['avatar']}
                >
                  {currentUser?.displayName?.charAt(0)}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={isAvatarMenuOpen}
              onClose={handleAvatarClose}
            >
              <MenuItem onClick={navigateToProfile}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize='small' />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem onClick={handleOpenDialog}>
                <ListItemIcon>
                  <LogoutIcon fontSize='small' />
                </ListItemIcon>
                Sign Out
              </MenuItem>
            </Menu>
          </>
        )}
      </div>
      <Dialog open={open} keepMounted onClose={handleClose}>
        <DialogTitle>
          <LogoutIcon className={styles['logout-icon']} />
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
