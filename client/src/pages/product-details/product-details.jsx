import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

import { addItem } from '../../redux/cart/cart.actions';
import { ImageMagnifier } from '../../components/image-magnifier/image-magnifier';

import styles from './productdetails.module.css';

const ProductDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {
    name,
    price,
    frame_dimensions,
    frame_shape,
    frame_size,
    frame_width,
    imageUrl,
  } = location.state;

  const onAddToCart = () => {
    dispatch(addItem(location.state));
  };

  return (
    <div className={styles['pd-wrap']}>
      <div className={styles.container}>
        <div className={styles['heading-section']}>
          <h2>Product Details</h2>
        </div>
        <div className={styles['row']}>
          <div className={styles['col-md-6']}>
            <ImageMagnifier src={imageUrl} />
          </div>
          <div className={styles['col-md-6']}>
            <div className={styles['product-dtl']}>
              <div className={styles['product-info']}>
                <div className={styles['product-name']}>{name}</div>
                <div className={styles['product-price-discount']}>
                  <span>
                    <strong>₹{price}/-</strong>
                  </span>
                </div>
              </div>
              <ul className={styles['product-dtl']}>
                <li>
                  <strong>Frame Shape:</strong>
                  {frame_shape}
                </li>
                <li>
                  <strong>Frame Size:</strong>
                  {frame_size}
                </li>
                <li>
                  <strong>Frame Width:</strong>
                  {frame_width}
                </li>
                <li>
                  <strong>Frame Dimensions:</strong>
                  {frame_dimensions}
                </li>
              </ul>

              <Button
                variant='contained'
                color='secondary'
                sx={{ mt: '1rem' }}
                onClick={onAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
