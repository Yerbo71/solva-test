import { Entity } from './types.ts';

export const fetchEntity = async (type: string, id: string): Promise<Entity> => {
  const response = await fetch(`https://swapi.dev/api/${type}/${id}/`);
  if (!response.ok) throw new Error('Ошибка при загрузке данных');
  return response.json();
};
