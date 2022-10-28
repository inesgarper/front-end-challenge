import { FavsContext } from '$/context/favsContext';
import { useContext } from 'react';

import { FavButtonProps } from './types';

export const FavButton = ({ songID }: FavButtonProps) => {
  const { toggleFavs, favourites } = useContext(FavsContext);

  return (
    <button onClick={() => toggleFavs(songID)} className="favButton">
      {favourites.includes(songID) ? <span>Dislike</span> : <span>Like</span>}
    </button>
  );
};
