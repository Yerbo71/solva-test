import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Entity } from '../../features/api/fetchEntity/types.ts';
import EntityForm from './component/entityForm.tsx';
import { fetchEntity } from '../../features/api/fetchEntity/fetchEntity.tsx';
import { enqueueSnackbar } from 'notistack';

const EntityPage: React.FC = () => {
  const { type, id } = useParams();
  const [entity, setEntity] = useState<Entity | null>(null);
  const { setValue } = useForm<Entity>();

  useEffect(() => {
    if (type && id) {
      fetchEntity(type, id)
        .then((data) => {
          setEntity(data);
          Object.keys(data).forEach((key) =>
            setValue(key as keyof Entity, data[key as keyof Entity]),
          );
        })
        .catch((error) => enqueueSnackbar(error, { variant: 'error' }));
    }
  }, [type, id, setValue]);

  const onSubmit = (data: Entity) => {
    setEntity(data);
  };

  if (!entity) return <CircularProgress />;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
      <Typography variant="h4" gutterBottom>
        Детальная информация
      </Typography>
      <EntityForm entity={entity} onSubmit={onSubmit} />
    </Box>
  );
};

export default EntityPage;
