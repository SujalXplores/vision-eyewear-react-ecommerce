import { withRouter } from 'react-router-dom';

import './menu-item.styles.css';

export const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}) => (
  <div
    className='menu-item-container'
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    style={{ height: size ? '380px' : '240px' }}
  >
    <div
      className='background-image background-img-container'
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className='content content-container'>
      <span className='content-title'>{title.toUpperCase()}</span>
      <span className='content-subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
