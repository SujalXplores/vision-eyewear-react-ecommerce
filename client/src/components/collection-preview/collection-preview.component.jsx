import { useNavigate } from 'react-router-dom';

import { CollectionItem } from '../collection-item/collection-item.component';
import styles from './collection-preview.module.css';

export const CollectionPreview = ({ title, items, routeName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/category/${routeName}`);
  };

  return (
    <div className={styles['collection-preview-container']}>
      <h1 className={styles['collection-title']} onClick={handleClick}>
        {title.toUpperCase()}
      </h1>
      <div className={styles['preview-container']}>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
