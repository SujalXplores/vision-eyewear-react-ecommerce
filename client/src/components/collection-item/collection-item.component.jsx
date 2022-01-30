import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.css';

export const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  const onAddItem = () => dispatch(addItem(item));

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
    </div>
  );
};

export default CollectionItem;
