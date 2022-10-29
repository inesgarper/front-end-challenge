import { useGetSongsList } from '$/graphql/services/songService';
import { Song } from '$/model/song';
import { createContext, useEffect, useState } from 'react';

import {
  AudioPlayerContextType,
  AudioPlayerProviderWrapperProps,
  InitialContext,
} from './types';

export const AudioPlayerContext =
  createContext<AudioPlayerContextType>(InitialContext);

export const AudioPlayerProviderWrapper = ({
  children,
}: AudioPlayerProviderWrapperProps) => {
  const songs = useGetSongsList('', 'name');
  const songsIDs = songs?.map((song) => song.id);
  const [playList, setPlayList] = useState<Song[]>([]);
  const [playListIDs, setPlayListIDs] = useState<number[]>([]); // playlist order
  const [playListCurrentSong, setPlayListCurrentSong] = useState(0);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playClicked, setPlayClicked] = useState(false);
  const [pauseClicked, setPauseClicked] = useState(false);

  const setCurrentSongAndPlay = (songID: number) => {
    setCurrentSong(songID);
    setIsPlaying(true);
  };

  const toggleIsPlaying = () =>
    isPlaying ? setIsPlaying(false) : setIsPlaying(true);

  const playSong = () => {
    setPlayClicked(true);
  };

  const resetPlayClicked = () => {
    setPlayClicked(false);
  };

  const pauseSong = () => {
    setPauseClicked(true);
  };

  const resetPauseClicked = () => {
    setPauseClicked(false);
  };

  useEffect(() => {
    if (playList) {
      const filteredIDs = playList?.map((song) => song.id);
      setPlayListIDs(filteredIDs);
    }
  }, [playList]);

  useEffect(() => {
    if (playListIDs) {
      const currentSongIndexInPlaylist = playListIDs?.indexOf(
        songs?.[currentSong]?.id as number,
      );
      setPlayListCurrentSong(currentSongIndexInPlaylist);
    }
  }, [playListIDs]);

  return (
    <AudioPlayerContext.Provider
      value={{
        songs,
        songsIDs,
        playList,
        playListIDs,
        playListCurrentSong,
        currentSong,
        isPlaying,
        playClicked,
        pauseClicked,
        setPlayList,
        setPlayListIDs,
        setPlayListCurrentSong,
        setCurrentSongAndPlay,
        toggleIsPlaying,
        playSong,
        pauseSong,
        resetPlayClicked,
        resetPauseClicked,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
};
