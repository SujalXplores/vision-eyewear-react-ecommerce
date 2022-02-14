import { useNavigate } from 'react-router-dom';

import './menu-item.styles.css';

export const MenuItem = ({ imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      className='menu-item-container'
      onClick={() => navigate(`${linkUrl}`)}
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
