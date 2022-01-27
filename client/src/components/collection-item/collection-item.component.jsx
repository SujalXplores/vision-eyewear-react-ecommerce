import { connect } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { memo } from 'react';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.css';

export const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  const addToCart = () => {
    addItem(item);
    console.warn('first');
    toast.success('Item added to cart', {
      id: 'cart-toast',
      autoClose: 2000,
      position: 'bottom-center',
    });
  };

  return (
    <>
      <Toaster />
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
        <CustomButton
          className='btn-add btn-inverted'
          onClick={() => addToCart()}
        >
          Add to cart
        </CustomButton>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(memo(CollectionItem));
