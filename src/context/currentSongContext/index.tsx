import { createContext, useState } from 'react';

import {
  CurrentSongContextType,
  CurrentSongProviderWrapperProps,
  InitialContext,
} from './types';

export const CurrentSongContext =
  createContext<CurrentSongContextType>(InitialContext);

export const CurrentSongProviderWrapper = ({
  children,
}: CurrentSongProviderWrapperProps) => {
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const setCurrentSongAndPlay = (songID: number) => {
    setCurrentSong(songID);
    setIsPlaying(true);
  };

  return (
    <CurrentSongContext.Provider
      value={{ currentSong, isPlaying, setCurrentSongAndPlay }}
    >
      {children}
    </CurrentSongContext.Provider>
  );
};
