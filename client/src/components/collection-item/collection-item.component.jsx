import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardActionArea, CardContent, Typography } from '@mui/material';

import styles from './collection-item.module.css';

export const CollectionItem = ({ item }) => {
  console.log(item);
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
        <CardContent>
        <Typography variant="body2" color="#0F1111" fontWeight={700}>
          {item.name}
        </Typography>
        <Typography variant="body2" color="#656666">
         {item.frame_shape}
        </Typography>
        <Typography gutterBottom variant="h6" color="#B12704" component="div" >
        ₹ {item.price}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
};
