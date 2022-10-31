import { AudioPlayerContext } from '$/context/audioPlayerContext';
import React, { useContext, useEffect, useRef, useState } from 'react';

import { useConstants } from './constants';

export const useLogic = () => {
  const {
    songsIDs,
    currentSong,
    playList,
    playListCurrentSong,
    playListIDs,
    isPlaying,
    playClicked,
    pauseClicked,
    setCurrentSongAndPlay,
    setPlayListCurrentSong,
    toggleIsPlaying,
    resetPlayClicked,
    resetPauseClicked,
  } = useContext(AudioPlayerContext);
  const {
    currentSongIsNotInPlaylist,
    currentSongIsFirstInPlaylist,
    currentSongIsLastInPlaylist,
  } = useConstants();

  const audio = useRef<HTMLAudioElement>(null);

  const [songDuration, setSongDuration] = useState(0);
  const [songCurrentTime, setSongCurrentTime] = useState(0);

  const togglePlayAudio = () => {
    if (audio && audio.current?.paused) {
      void audio.current?.play();
    } else if (audio && !audio.current?.paused) {
      audio.current?.pause();
    }
  };

  const getSongDuration = (e: React.ChangeEvent<HTMLAudioElement>) => {
    setSongDuration(e.target.duration);
  };

  const handleTimeUpdate = (e: React.ChangeEvent<HTMLAudioElement>) => {
    setSongCurrentTime(e.target.currentTime);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const progressValue = parseInt(e.target.value);
    const currentTime = (progressValue * songDuration) / 100;

    setSongCurrentTime(currentTime);
    if (audio.current) {
      audio.current.currentTime = currentTime;
    }
  };

  const newSongIndex = (songID: number): number =>
    songsIDs?.indexOf(playListIDs?.[songID] as number) as number;

  const playPrev = () => {
    if (currentSongIsNotInPlaylist || currentSongIsFirstInPlaylist) {
      if (playList?.length) {
        setCurrentSongAndPlay(newSongIndex(playList?.length - 1));
        setPlayListCurrentSong(playList?.length - 1);
      }
    } else {
      setCurrentSongAndPlay(newSongIndex(playListCurrentSong - 1));
      setPlayListCurrentSong(playListCurrentSong - 1);
    }
  };

  const playNext = () => {
    if (currentSongIsNotInPlaylist || currentSongIsLastInPlaylist) {
      setCurrentSongAndPlay(newSongIndex(0));
      setPlayListCurrentSong(0);
    } else {
      setCurrentSongAndPlay(newSongIndex(playListCurrentSong + 1));
      setPlayListCurrentSong(playListCurrentSong + 1);
    }
  };

  const handleEnd = () => {
    if (playList?.length && playListCurrentSong === playList.length - 1) {
      toggleIsPlaying();
    } else {
      playNext();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      togglePlayAudio();
    }
  }, [currentSong]);

  useEffect(() => {
    if (playClicked) {
      togglePlayAudio();
      resetPlayClicked();
    }
  }, [playClicked]);

  useEffect(() => {
    if (pauseClicked) {
      toggleIsPlaying();
      togglePlayAudio();
      resetPauseClicked();
    }
  }, [pauseClicked]);

  return {
    audio,
    songDuration,
    songCurrentTime,
    getSongDuration,
    handleTimeUpdate,
    togglePlayAudio,
    handleRangeChange,
    playPrev,
    playNext,
    handleEnd,
  };
};
