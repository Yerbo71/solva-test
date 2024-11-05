import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import { Entity } from '../../../features/api/fetchEntity/types.ts';

interface EntityFormProps {
  entity: Entity;
  onSubmit: SubmitHandler<Entity>;
}

const EntityForm: React.FC<EntityFormProps> = ({ entity, onSubmit }) => {
  const { register, handleSubmit } = useForm<Entity>({ defaultValues: entity });

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', width: '100%' }}>
      {'name' in entity && (
        <TextField label="Имя" {...register('name')} fullWidth margin="normal" />
      )}
      {'height' in entity && (
        <TextField label="Рост" {...register('height')} fullWidth margin="normal" />
      )}
      {'mass' in entity && (
        <TextField label="Вес" {...register('mass')} fullWidth margin="normal" />
      )}
      {'gender' in entity && (
        <Select label="Пол" {...register('gender')} defaultValue={entity.gender} fullWidth>
          <MenuItem value="n/a">N/A</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      )}
      {'birth_year' in entity && (
        <TextField label="Год рождения" {...register('birth_year')} fullWidth margin="normal" />
      )}
      {'diameter' in entity && (
        <TextField label="Диаметр" {...register('diameter')} fullWidth margin="normal" />
      )}
      {'climate' in entity && (
        <TextField label="Климат" {...register('climate')} fullWidth margin="normal" />
      )}
      {'gravity' in entity && (
        <TextField label="Гравитация" {...register('gravity')} fullWidth margin="normal" />
      )}
      {'population' in entity && (
        <TextField label="Население" {...register('population')} fullWidth margin="normal" />
      )}
      {'model' in entity && (
        <TextField label="Модель" {...register('model')} fullWidth margin="normal" />
      )}
      {'manufacturer' in entity && (
        <TextField label="Производитель" {...register('manufacturer')} fullWidth margin="normal" />
      )}
      {'cost_in_credits' in entity && (
        <TextField
          label="Стоимость в кредитах"
          {...register('cost_in_credits')}
          fullWidth
          margin="normal"
        />
      )}
      {'passengers' in entity && (
        <TextField label="Пассажиры" {...register('passengers')} fullWidth margin="normal" />
      )}
      <Button type="submit" variant="contained" color="primary" fullWidth size="large">
        Сохранить изменения
      </Button>
    </form>
  );
};

export default EntityForm;
