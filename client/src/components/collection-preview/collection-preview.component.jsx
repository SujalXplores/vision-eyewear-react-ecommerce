import { useNavigate } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.css';

export const CollectionPreview = ({ title, items, routeName }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/shop/${routeName}`);
  };

  return (
    <div className='collection-preview-container'>
      <h1 className='collection-title' onClick={handleClick}>
        {title.toUpperCase()}
      </h1>
      <div className='preview-container'>
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
