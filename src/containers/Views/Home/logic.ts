import { useGetSongsList } from '$/graphql/services/songService';
import React, { useState } from 'react';

export const useLogic = () => {
  const [searchingValue, setSearchingValue] = useState('');
  const [sortingValue, setSortingValue] = useState('name');
  const songsFromAPI = useGetSongsList(searchingValue, sortingValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchingValue(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingValue(e.target.value);
  };

  return {
    songsFromAPI,
    handleInputChange,
    handleSelectChange,
  };
};
