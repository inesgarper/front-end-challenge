import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { useContext } from 'react';

export const useConstants = () => {
  const { playListCurrentSong, playListIDs } = useContext(AudioPlayerContext);
  const currentSongIsNotInPlaylist = playListCurrentSong === -1;
  const currentSongIsFirstInPlaylist = playListCurrentSong === 0;
  const currentSongIsLastInPlaylist =
    playListIDs && playListCurrentSong === playListIDs?.length - 1;

  return {
    currentSongIsNotInPlaylist,
    currentSongIsFirstInPlaylist,
    currentSongIsLastInPlaylist,
  };
};
