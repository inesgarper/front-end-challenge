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
  const [playClicked, setPlayClicked] = useState(false);
  const [pauseClicked, setPauseClicked] = useState(false);

  const playSong = () => {
    setPlayClicked(true);
  };

  const setCurrentSongAndPlay = (songID: number) => {
    setCurrentSong(songID);
    setIsPlaying(true);
  };

  const toggleIsPlaying = () =>
    isPlaying ? setIsPlaying(false) : setIsPlaying(true);

  const resetPlayClicked = () => {
    setPlayClicked(false);
  };

  const pauseSong = () => {
    setPauseClicked(true);
  };

  const resetPauseClicked = () => {
    setPauseClicked(false);
  };

  return (
    <CurrentSongContext.Provider
      value={{
        currentSong,
        isPlaying,
        playClicked,
        pauseClicked,
        setCurrentSongAndPlay,
        toggleIsPlaying,
        playSong,
        pauseSong,
        resetPlayClicked,
        resetPauseClicked,
      }}
    >
      {children}
    </CurrentSongContext.Provider>
  );
};
