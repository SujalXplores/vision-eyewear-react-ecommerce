import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  Fab,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Snackbar,
  Tooltip,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
    <>
      <Card sx={{ maxWidth: 345 }} raised className='item-card'>
        <CardMedia component='img' width='100%' image={imageUrl} alt={name} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {new Intl.NumberFormat('en-IN', {
              currency: 'INR',
              style: 'currency',
              maximumFractionDigits: 0,
            }).format(price) + '/-'}
          </Typography>
          <Tooltip title='Add to cart' placement='bottom'>
            <Fab
              className='add-to-cart'
              onClick={onAddItem}
              size='small'
              color='secondary'
            >
              <AddShoppingCartIcon />
            </Fab>
          </Tooltip>
        </CardContent>
      </Card>
      <Snackbar
        autoHideDuration={2000}
        open={state}
        onClose={handleClose}
        message='✅ 1 item added to cart'
        key={Math.random()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
};

export default CollectionItem;
