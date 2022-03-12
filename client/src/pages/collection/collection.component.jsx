import { useSelector } from 'react-redux';

import { CollectionItem } from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import styles from './collection.module.css';

export const CollectionPage = () => {
  const collection = useSelector(
    selectCollection(window.location.pathname.split('/').pop())
  );

  return (
    <div className={styles['collection-page-container']}>
      <h2 className={styles['collection-title']}>{collection.title}</h2>
      <div className={styles['collection-items-container']}>
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
