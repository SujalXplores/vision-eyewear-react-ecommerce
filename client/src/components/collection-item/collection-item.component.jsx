import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, Skeleton, CardActionArea } from '@mui/material';
import styles from './collection-item.module.css';

export const CollectionItem = ({ item }) => {
  const [items, setItems] = useState(null);
  const navigate = useNavigate();

  setTimeout(() => {
    setItems(item);
  }, 2000);

  const handleViewMoreDetails = () => {
    navigate(`${item.id}`, item);
  };

  return (
    <>
      <Card className={styles['item-card']} variant='outlined'>
        <CardActionArea onClick={handleViewMoreDetails}>
          {items ? (
            <CardMedia
              component='img'
              width='100%'
              height='100%'
              image={items.imageUrl}
              alt={items.name}
            />
          ) : (
            <Skeleton
              className={styles['item-card-media']}
              animation='wave'
              variant='rectangular'
            />
          )}
        </CardActionArea>
      </Card>
    </>
  );
};

export default CollectionItem;
