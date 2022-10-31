import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { FavsContext } from '$/context/favsContext';
import { useGetSongsList } from '$/graphql/services/songService';
import React, { useContext, useEffect, useState } from 'react';

export const useLogic = () => {
  const { setPlayList } = useContext(AudioPlayerContext);
  const { setFavsSongs } = useContext(FavsContext);
  const [searchingValue, setSearchingValue] = useState('');
  const [sortingValue, setSortingValue] = useState('name');
  const songsFromAPI = useGetSongsList(searchingValue, sortingValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchingValue(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingValue(e.target.value);
  };

  useEffect(() => {
    if (songsFromAPI) {
      setPlayList(songsFromAPI);
    }
  }, [songsFromAPI, setPlayList]);

  useEffect(() => {
    setFavsSongs();
  }, []);

  return {
    handleInputChange,
    handleSelectChange,
  };
};
