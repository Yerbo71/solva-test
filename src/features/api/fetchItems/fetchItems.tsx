import { useState } from 'react';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { FetchListData, FetchListProps } from './types.ts';

const fetchItems = async <T extends 'people' | 'planets' | 'starships'>(
  type: T,
  page: number,
): Promise<{ results: FetchListData<T>; count: number }> => {
  const response = await fetch(`https://swapi.dev/api/${type}/?page=${page}`);
  if (!response.ok) {
    throw new Error('Ошибка при загрузке данных');
  }
  return response.json();
};

const FetchList = <T extends 'people' | 'planets' | 'starships'>({ type }: FetchListProps<T>) => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['items', type, page],
    queryFn: () => fetchItems(type, page),
    placeholderData: keepPreviousData,
  });

  const items: FetchListData<T> = data?.results || [];
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
