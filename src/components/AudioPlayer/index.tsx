import React, { useContext, useEffect, useRef, useState } from 'react';
import { CurrentSongContext } from '$/context/currentSongContext';
import { useGetSongsList } from '$/graphql/services/songService';

import { Container } from './styles';
import { AudioPlayerProps } from './types';

export const AudioPlayer = ({ songsList }: AudioPlayerProps) => {
  const {
    currentSong,
    isPlaying,
    playClicked,
    pauseClicked,
    setCurrentSongAndPlay,
    toggleIsPlaying,
    resetPlayClicked,
    resetPauseClicked,
  } = useContext(CurrentSongContext);

  const songs = useGetSongsList('', 'name');

  const audio = useRef<HTMLAudioElement>(null);

  const [songDuration, setSongDuration] = useState(0);
  const [songCurrentTime, setSongCurrentTime] = useState(0);

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayAudio = () => {
    if (audio && audio.current?.paused) {
      void audio.current?.play();
    } else if (audio && !audio.current?.paused) {
      audio.current?.pause();
    }
  };

  const playSong = () => {
    toggleIsPlaying();
    togglePlayAudio();
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const progressValue = parseInt(e.target.value);
    const currentTime = (progressValue * songDuration) / 100;

    setSongCurrentTime(currentTime);
    if (audio.current) {
      audio.current.currentTime = currentTime;
    }
  };

  const playPrev = () => {
    if (songs?.length && currentSong === 0) {
      setCurrentSongAndPlay(songs?.length - 1);
    } else {
      setCurrentSongAndPlay(currentSong - 1);
    }
  };

  const playNext = () => {
    if (songs?.length && currentSong === songs?.length - 1) {
      setCurrentSongAndPlay(0);
    } else {
      setCurrentSongAndPlay(currentSong + 1);
    }
  };

  const handleEnd = () => {
    if (songs?.length && currentSong === songs.length - 1) {
      return;
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

  return (
    <Container>
      <div>
        {songs?.length && (
          <audio
            ref={audio}
            src={songs[currentSong]?.audio.url}
            preload="true"
            onCanPlay={(e: React.ChangeEvent<HTMLAudioElement>) =>
              setSongDuration(e.target.duration)
            }
            onTimeUpdate={(e: React.ChangeEvent<HTMLAudioElement>) =>
              setSongCurrentTime(e.target.currentTime)
            }
            onEnded={handleEnd}
          />
        )}
        {/* SongInfo */}
        <button>Like</button>
        {/* {songs?.length && <img src={songs[currentSong]?.image}></img>} */}
        <div>
          {songs?.length && <p>{songs[currentSong]?.name}</p>}
          {songs?.length && <p>{songs[currentSong]?.author.name}</p>}
        </div>
      </div>
      <div>
        {/* Controls */}
        <button onClick={playPrev}>Prev</button>
        <button onClick={() => playSong()}>
          {isPlaying ? <span>Pause</span> : <span>Play</span>}
        </button>
        <button onClick={playNext}>Next</button>
      </div>
      <div>
        {/* ProgressBar */}
        <p>{formatTime(songCurrentTime)}</p>
        <input
          type="range"
          value={songDuration ? (songCurrentTime * 100) / songDuration : 0}
          onChange={handleProgressChange}
        />
        <p>{formatTime(songDuration)}</p>
      </div>
    </Container>
  );
};
