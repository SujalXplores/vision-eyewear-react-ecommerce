import { useHistory } from 'react-router-dom';

import './menu-item.styles.css';

export const MenuItem = ({ imageUrl, size, linkUrl }) => {
  const history = useHistory();
  return (
    <div
      className='menu-item-container'
      onClick={() => history.push(`${linkUrl}`)}
      style={{ height: size ? '600px' : '340px' }}
    >
      <div
        className='background-image background-img-container'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
};

export default MenuItem;
