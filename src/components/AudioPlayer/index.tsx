import { FavButton } from '$/components/FavButton';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
import React, { useContext, useEffect, useRef, useState } from 'react';

import { Container } from './styles';

export const AudioPlayer = () => {
  const {
    songs,
    songsIDs,
    playList,
    playListIDs,
    playListCurrentSong,
    currentSong,
    isPlaying,
    playClicked,
    pauseClicked,
    setPlayListCurrentSong,
    setCurrentSongAndPlay,
    toggleIsPlaying,
    resetPlayClicked,
    resetPauseClicked,
  } = useContext(AudioPlayerContext);

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

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const progressValue = parseInt(e.target.value);
    const currentTime = (progressValue * songDuration) / 100;

    setSongCurrentTime(currentTime);
    if (audio.current) {
      audio.current.currentTime = currentTime;
    }
  };

  const playPrev = () => {
    if (
      playListCurrentSong === -1 || // si la canción no está
      playListCurrentSong === 0 // o si es la primera
    ) {
      const indexOfNextSong = songsIDs?.indexOf(
        playListIDs?.[playListIDs?.length - 1] as number,
      );

      if (playListIDs && indexOfNextSong) {
        setCurrentSongAndPlay(indexOfNextSong);
        setPlayListCurrentSong(playListIDs?.length - 1);
      }
    } else {
      const indexOfNextSong = songsIDs?.indexOf(
        playListIDs?.[playListCurrentSong - 1] as number,
      );

      if (indexOfNextSong) {
        setCurrentSongAndPlay(indexOfNextSong);
        setPlayListCurrentSong(playListCurrentSong - 1);
      }
    }
  };

  const playNext = () => {
    if (
      playListIDs &&
      (playListCurrentSong === -1 || // si la canción no está
        playListCurrentSong === playListIDs?.length - 1) // o si es la última
    ) {
      const indexOfNextSong = songsIDs?.indexOf(playListIDs?.[0] as number);

      if (indexOfNextSong) {
        setCurrentSongAndPlay(indexOfNextSong);
        setPlayListCurrentSong(0);
      }
    } else {
      const indexOfNextSong = songsIDs?.indexOf(
        playListIDs?.[playListCurrentSong + 1] as number,
      );

      if (indexOfNextSong) {
        setCurrentSongAndPlay(indexOfNextSong);
        setPlayListCurrentSong(playListCurrentSong + 1);
      }
    }
  };

  const handleEnd = () => {
    if (playList?.length && playListCurrentSong === playList.length - 1) {
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
        {songs?.length && (
          <FavButton songID={songs[currentSong]?.id as number} />
        )}
        {/* {songs?.length && <img src={songs[currentSong]?.image}></img>} */}
        <div>
          {songs?.length && <p>{songs[currentSong]?.name}</p>}
          {songs?.length && <p>{songs[currentSong]?.author.name}</p>}
        </div>
      </div>
      <div>
        {/* Controls */}
        <button onClick={playPrev}>Prev</button>
        <button
          onClick={() => {
            toggleIsPlaying();
            togglePlayAudio();
          }}
        >
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
