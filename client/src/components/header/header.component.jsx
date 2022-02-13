import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
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
import './header.styles.css';

export const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(selectCurrentUser);

  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const isAvatarmenuOpen = Boolean(anchorEl);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarClose = () => {
    setAnchorEl(null);
  };

  const onSignOut = () => {
    dispatch(signOutStart());
    setOpen(false);
    history.replace('/');
  };

  const handleClickOpen = () => {
    setAnchorEl(null);
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
        {!currentUser && (
          <Link className='option-link' to='/signin'>
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
                  sx={{ width: '30px', height: '30px' }}
                >
                  {currentUser?.displayName?.charAt(0)}
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={isAvatarmenuOpen}
              onClose={handleAvatarClose}
            >
              <MenuItem onClick={handleAvatarClose}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize='small' />
                </ListItemIcon>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClickOpen}>
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
