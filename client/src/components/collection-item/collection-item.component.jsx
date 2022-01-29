import { useDispatch } from 'react-redux';
// import toast, { Toaster } from 'react-hot-toast';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
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
      <CustomButton className='btn-add btn-inverted' onClick={onAddItem}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
