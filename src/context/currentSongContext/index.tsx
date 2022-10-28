import { useGetSongsList } from '$/graphql/services/songService';
import { createContext, useState } from 'react';
import { Song } from '$/model/song';

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
  const songs = useGetSongsList('', 'name');

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
        songs,
        currentSong,
        isPlaying,
        playClicked,
        pauseClicked,
        //setPlaylist,
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
