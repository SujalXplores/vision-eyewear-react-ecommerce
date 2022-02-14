import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.css';

export const CollectionPage = () => {
  const location = useLocation();
  const lastPath = location.pathname.split('/').pop();
  const collection = useSelector(selectCollection(lastPath));
  const { title, items } = collection;
  
  return (
    <div className='collection-page-container'>
      <h2 className='collection-title'>{title}</h2>
      <div className='collection-items-container'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
