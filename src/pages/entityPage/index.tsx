import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, TextField, Button, Typography } from '@mui/material';
import { Person } from '../../features/api/types.ts';
import Planet from '../planet';
import Starship from '../starship';

type Entity = Person | Planet | Starship;

const fetchEntity = async (type: string, id: string): Promise<Entity> => {
  const response = await fetch(`https://swapi.dev/api/${type}/${id}/`);
  if (!response.ok) throw new Error('Ошибка при загрузке данных');
  return response.json();
};

const EntityPage: React.FC = () => {
  const { type, id } = useParams();
  const [entity, setEntity] = useState<Entity | null>(null);
  const { register, handleSubmit, setValue } = useForm<Entity>();

  useEffect(() => {
    if (type && id) {
      fetchEntity(type, id)
        .then((data) => {
          setEntity(data);
          // Устанавливаем начальные значения в форму
          Object.keys(data).forEach((key) =>
            setValue(key as keyof Entity, data[key as keyof Entity]),
          );
        })
        .catch((error) => console.error(error.message));
    }
  }, [type, id, setValue]);

  const onSubmit = (data: Entity) => {
    setEntity(data); // сохраняем изменения в локальном состоянии
    console.log('Измененные данные:', data);
  };

  if (!entity) return <Typography>Загрузка...</Typography>;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
      <Typography variant="h4" gutterBottom>
        Детальная информация
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', width: '100%' }}>
        {'name' in entity && (
          <TextField
            label="Name"
            defaultValue={entity.name}
            {...register('name')}
            fullWidth
            margin="normal"
          />
        )}
        {'height' in entity && (
          <TextField
            label="Height"
            defaultValue={entity.height}
            {...register('height')}
            fullWidth
            margin="normal"
          />
        )}
        {'mass' in entity && (
          <TextField
            label="Mass"
            defaultValue={entity.mass}
            {...register('mass')}
            fullWidth
            margin="normal"
          />
        )}
        {'gender' in entity && (
          <TextField
            label="Gender"
            defaultValue={entity.gender}
            {...register('gender')}
            fullWidth
            margin="normal"
          />
        )}
        {'birth_year' in entity && (
          <TextField
            label="Birth Year"
            defaultValue={entity.birth_year}
            {...register('birth_year')}
            fullWidth
            margin="normal"
          />
        )}
        {'diameter' in entity && (
          <TextField
            label="Diameter"
            defaultValue={entity.diameter}
            {...register('diameter')}
            fullWidth
            margin="normal"
          />
        )}
        {'climate' in entity && (
          <TextField
            label="Climate"
            defaultValue={entity.climate}
            {...register('climate')}
            fullWidth
            margin="normal"
          />
        )}
        {'gravity' in entity && (
          <TextField
            label="Gravity"
            defaultValue={entity.gravity}
            {...register('gravity')}
            fullWidth
            margin="normal"
          />
        )}
        {'population' in entity && (
          <TextField
            label="Population"
            defaultValue={entity.population}
            {...register('population')}
            fullWidth
            margin="normal"
          />
        )}
        {'model' in entity && (
          <TextField
            label="Model"
            defaultValue={entity.model}
            {...register('model')}
            fullWidth
            margin="normal"
          />
        )}
        {'manufacturer' in entity && (
          <TextField
            label="Manufacturer"
            defaultValue={entity.manufacturer}
            {...register('manufacturer')}
            fullWidth
            margin="normal"
          />
        )}
        {'cost_in_credits' in entity && (
          <TextField
            label="Cost in Credits"
            defaultValue={entity.cost_in_credits}
            {...register('cost_in_credits')}
            fullWidth
            margin="normal"
          />
        )}
        {'passengers' in entity && (
          <TextField
            label="Passengers"
            defaultValue={entity.passengers}
            {...register('passengers')}
            fullWidth
            margin="normal"
          />
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Сохранить изменения
        </Button>
      </form>
    </Box>
  );
};

export default EntityPage;