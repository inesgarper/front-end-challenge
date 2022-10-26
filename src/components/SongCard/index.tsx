import { FavsContext } from '$/context/favsContext';
import { useContext } from 'react';

import { SongsCardProps } from './types';

export const SongCard = ({
  id,
  name,
  image,
  author,
  genre,
}: SongsCardProps) => {
  const { favourites, toggleFavs } = useContext(FavsContext);

  return (
    <div>
      <img src={image}></img>
      <div className="songInfo">
        <h5>{name}</h5>
        <h5>{author.name}</h5>
        <h5>{genre}</h5>
      </div>
      <button onClick={() => toggleFavs(id)} className="favButton">
        {favourites.includes(id) ? <span>Unlike</span> : <span>Like</span>}
      </button>
    </div>
  );
};
