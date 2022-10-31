import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { Song } from '$/model/song';
import { formatSecsToMins, formatTagText } from '$/utils/formatters';
import { useContext, useEffect, useState } from 'react';

export const useLogic = (song: Song) => {
  const {
    songsIDs,
    playListIDs,
    currentSong,
    setCurrentSongAndPlay,
    setPlayListCurrentSong,
    playSong,
  } = useContext(AudioPlayerContext);

  const [songDuration, setSongDuration] = useState(0);
  const [songGenre, setSongGenre] = useState('');

  const formatSongGenre = (genre: string) => {
    setSongGenre(formatTagText(genre));
  };

  const getSongDuration = (url: string) => {
    const audio = new Audio(url);
    audio.onloadedmetadata = () => {
      const seconds = audio.duration;
      setSongDuration(formatSecsToMins(seconds));
    };
  };

  const setPlayListCurrentSongAndPlay = (songID: number) => {
    if (songsIDs) {
      setCurrentSongAndPlay(songsIDs?.indexOf(songID));
      setPlayListCurrentSong(playListIDs?.indexOf(songID) as number);

      if (currentSong === songsIDs?.indexOf(songID)) {
        playSong();
      }
    }
  };

  useEffect(() => {
    getSongDuration(song.audio.url);
    formatSongGenre(song.genre);
  }, []);

  return {
    songDuration,
    songGenre,
    setPlayListCurrentSongAndPlay,
  };
};
