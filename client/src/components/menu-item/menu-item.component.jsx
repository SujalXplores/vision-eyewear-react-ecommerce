import { useNavigate } from 'react-router-dom';

import styles from './menu-item.module.css';

export const MenuItem = ({ imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles['menu-item-container']}
      onClick={() => navigate(`${linkUrl}`)}
      style={{ height: size ? '600px' : '340px' }}
    >
      <div
        className={
          styles['background-image'] + ' ' + styles['background-img-container']
        }
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
};

export default MenuItem;
