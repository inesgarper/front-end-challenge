import { useState } from 'react';

export const useLogic = () => {
  const [songDuration, setSongDuration] = useState(0);
  const [songGenre, setSongGenre] = useState('');

  const formatSecsToMins = (seconds: number) => Math.ceil(seconds / 60);

  const formatSongGenre = (genre: string) => {
    const lowerGenre = genre.toLowerCase().split('_');
    let formatedGenre = '';

    lowerGenre.forEach((word, i) => {
      const capitalLetter = word[0]?.toUpperCase() as string;

      if (i === 0) {
        formatedGenre = `${capitalLetter}${word.slice(1)}`;
      } else {
        formatedGenre += ` ${capitalLetter}${word.slice(1)}`;
      }
    });
    setSongGenre(formatedGenre);
  };

  const getSongDuration = (url: string) => {
    const audio = new Audio(url);
    audio.onloadedmetadata = () => {
      const seconds = audio.duration;
      setSongDuration(formatSecsToMins(seconds));
    };
  };

  return {
    songDuration,
    songGenre,
    formatSongGenre,
    getSongDuration,
  };
};
