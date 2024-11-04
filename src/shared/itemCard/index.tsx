import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Person } from '../../features/api/types.ts';
import Planet from '../../pages/planet';
import Starship from '../../pages/starship';
import { Link } from 'react-router-dom';

export type Item = Person | Planet | Starship;

interface ItemCardProps {
  data: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ data }) => {
  return (
    <Card
      sx={{
        width: 400,
        minHeight: 200,
      }}
    >
      <CardContent>
        {'birth_year' in data && (
          <>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Person Card
            </Typography>
            <Typography variant="h5">{data.name}</Typography>
            <Typography sx={{ color: 'text.secondary', mt: 1 }}>Born: {data.birth_year}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Gender: {data.gender}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Height: {data.height}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Mass: {data.mass}</Typography>
            <Link to={'/people/' + data.url.split('/')[5]}>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Подробнее
              </Button>
            </Link>
          </>
        )}

        {'climate' in data && (
          <>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Planet Card
            </Typography>
            <Typography variant="h5">{data.name}</Typography>
            <Typography sx={{ color: 'text.secondary', mt: 1 }}>
              Diameter: {data.diameter}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Climate: {data.climate}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Gravity: {data.gravity}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Population: {data.population}</Typography>
            <Link to={'/planets/' + data.url.split('/')[5]}>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Подробнее
              </Button>
            </Link>
          </>
        )}

        {'model' in data && (
          <>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Starship Card
            </Typography>
            <Typography variant="h5">{data.name}</Typography>
            <Typography sx={{ color: 'text.secondary', mt: 1 }}>Model: {data.model}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Manufacturer: {data.manufacturer}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Cost: {data.cost_in_credits}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>Passengers: {data.passengers}</Typography>
            <Link to={'/starships/' + data.url.split('/')[5]}>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Подробнее
              </Button>
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ItemCard;
