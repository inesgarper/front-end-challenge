import { FavsContext } from '$/context/favsContext';
import { useContext, useEffect } from 'react';

import { useLogic } from './logic';
import { SongsCardProps } from './types';

export const SongCard = ({ song }: SongsCardProps) => {
  const { favourites, toggleFavs } = useContext(FavsContext);
  const { songDuration, songGenre, getSongDuration, formatSongGenre } =
    useLogic();

  useEffect(() => {
    getSongDuration(song.audio.url);
    formatSongGenre(song.genre);
  }, []);

  return (
    <div>
      <img src={song.image}></img>
      <div className="songInfo">
        <h5>{song.name}</h5>
        <h5>{song.author.name}</h5>
        <h5>{song.description}</h5>
        <div>
          <button>Play</button>
          <p>{songDuration} min</p>
          <p>{songGenre}</p>
        </div>
      </div>
      <button onClick={() => toggleFavs(song.id)} className="favButton">
        {favourites.includes(song.id) ? (
          <span>Dislike</span>
        ) : (
          <span>Like</span>
        )}
      </button>
    </div>
  );
};
