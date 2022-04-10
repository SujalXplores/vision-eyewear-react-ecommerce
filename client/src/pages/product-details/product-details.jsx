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
          <h1>{name}</h1>
        </div>
        <div className={styles['row']}>
          <div className={`${styles['col-md-6']} ${styles['section-left']}`}>
            <ImageMagnifier src={imageUrl} />
          </div>
          <div className={`${styles['col-md-6']} ${styles['section-right']}`}>
            <div className={styles['product-dtl']}>
              <ul className={styles['product-dtl']}>
                <li>
                  <strong>Frame Shape: </strong>
                  {frame_shape}
                </li>
                <li>
                  <strong>Frame Size: </strong>
                  {frame_size}
                </li>
                <li>
                  <strong>Frame Width: </strong>
                  {frame_width}
                </li>
                <li>
                  <strong>Frame Dimensions: </strong>
                  {frame_dimensions}
                </li>
              </ul>
              <div className={styles['product-info']}>
                <div className={styles['product-price-discount']}>
                  <span>
                    Price: <strong>₹{price}/-</strong>
                  </span>
                </div>
              </div>

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
