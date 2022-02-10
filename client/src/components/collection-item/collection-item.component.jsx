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
  Skeleton,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.css';

export const CollectionItem = ({ item }) => {
  const [state, setState] = useState(false);
  const [items, setItems] = useState(null);

  const dispatch = useDispatch();

  setTimeout(() => {
    setItems(item);
  }, 2000);

  const onAddItem = () => {
    dispatch(addItem(item));
    setState(true);
  };

  const handleClose = () => {
    setState(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} className='item-card' variant='outlined'>
        {items ? (
          <CardMedia
            component='img'
            width='100%'
            image={items.imageUrl}
            alt={items.name}
          />
        ) : (
          <Skeleton
            sx={{ height: 300, width: 345 }}
            animation='wave'
            variant='rectangular'
          />
        )}
        <CardContent>
          {items ? (
            <>
              <Typography gutterBottom variant='h5' component='div'>
                {items.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {new Intl.NumberFormat('en-IN', {
                  currency: 'INR',
                  style: 'currency',
                  maximumFractionDigits: 0,
                }).format(items.price) + '/-'}
              </Typography>
            </>
          ) : (
            <>
              <Skeleton
                animation='wave'
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation='wave' height={10} width='80%' />
            </>
          )}
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
