import { useSelector } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.css';

export const CollectionPage = () => {
  const collection = useSelector(
    selectCollection(window.location.pathname.split('/').pop())
  );

  return (
    <div className='collection-page-container'>
      <h2 className='collection-title'>{collection.title}</h2>
      <div className='collection-items-container'>
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
