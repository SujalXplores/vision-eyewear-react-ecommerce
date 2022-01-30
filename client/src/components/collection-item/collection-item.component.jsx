import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.css';

export const CollectionItem = ({ item }) => {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  const onAddItem = () => {
    dispatch(addItem(item));
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

  return (
    <div className='collection-item-container'>
      <div
        className='image background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='collection-footer-container'>
        <span className='name-container'>{name}</span>
        <span className='price-container'>
          {new Intl.NumberFormat('en-IN', {
            currency: 'INR',
            style: 'currency',
            maximumFractionDigits: 0,
          }).format(price)}
        </span>
      </div>
      <Button
        size='small'
        variant='contained'
        color='secondary'
        className='btn-add'
        startIcon={<AddIcon />}
        onClick={onAddItem}
      >
        Add to cart
      </Button>
      <Snackbar
        autoHideDuration={2000}
        open={state}
        onClose={handleClose}
        message='1 item added to cart'
        key={Math.random()}
        color='secondary'
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </div>
  );
};

export default CollectionItem;
