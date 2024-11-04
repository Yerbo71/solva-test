import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  url: string;
}

interface Planet {
  name: string;
  diameter: string;
  climate: string;
  gravity: string;
  population: string;
}

interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
}

interface FetchListProps {
  type: 'people' | 'planets' | 'starships';
}

const fetchItems = async (type: string, page: number) => {
  const response = await fetch(`https://swapi.dev/api/${type}/?page=${page}`);
  if (!response.ok) {
    throw new Error('Ошибка при загрузке данных');
  }
  return response.json();
};

const FetchList = ({ type }: FetchListProps) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [('items', type, page)],
    queryFn: () => fetchItems(type, page),
    placeholderData: keepPreviousData,
  });

  const items = data?.results || [];
  const totalPages = data ? Math.ceil(data.count / 10) : 0;

  return {
    items,
    page,
    totalPages,
    setPage,
    error: isError ? error : null,
    loading: isLoading,
  };
};

export default FetchList;
