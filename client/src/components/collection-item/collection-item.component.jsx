import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardActionArea } from '@mui/material';

import styles from './collection-item.module.css';

export const CollectionItem = ({ item }) => {
  const navigate = useNavigate();

  const handleViewMoreDetails = () => {
    navigate(`${item.id}`, { state: item });
  };

  return (
    <Card className={styles['item-card']} variant='outlined'>
      <CardActionArea onClick={handleViewMoreDetails}>
        <CardMedia
          component='img'
          width='100%'
          height='100%'
          image={item.imageUrl}
          alt={item.name}
        />
      </CardActionArea>
    </Card>
  );
};
