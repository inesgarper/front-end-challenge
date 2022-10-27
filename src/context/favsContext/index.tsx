import { createContext, useState } from 'react';

import {
  FavsContextType,
  FavsProviderWrapperProps,
  InitialContext,
} from './types';

export const FavsContext = createContext<FavsContextType>(InitialContext);

export const FavsProviderWrapper = ({ children }: FavsProviderWrapperProps) => {
  const [favourites, setFavourites] = useState<FavsContextType['favourites']>(
    [],
  );

  const setFavsSongs = () => {
    const storedFavs = localStorage.getItem('favourites');

    if (storedFavs) {
      const favs = JSON.parse(storedFavs) as FavsContextType['favourites'];
      setFavourites(favs);
    }
  };

  const toggleFavs = (songID: number) => {
    if (favourites.includes(songID)) {
      const songToRemove = favourites.indexOf(songID);
      favourites.splice(songToRemove, 1);
    } else {
      favourites.push(songID);
    }

    localStorage.setItem('favourites', JSON.stringify(favourites));
    setFavsSongs();
  };

  return (
    <FavsContext.Provider value={{ favourites, setFavsSongs, toggleFavs }}>
      {children}
    </FavsContext.Provider>
  );
};
