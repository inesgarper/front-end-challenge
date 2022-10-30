import { FavButton } from '$/components/FavButton';
import { Text } from '$/components/Text';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  BiSkipNext as NextButton,
  BiSkipPrevious as PrevButton,
} from 'react-icons/bi';
import {
  BsFillPauseFill as PauseButton,
  BsFillPlayFill as PlayButton,
} from 'react-icons/bs';

import {
  AudioProgress,
  Container,
  Controls,
  Image,
  ImageContainer,
  NextPrevButton,
  PlayPlauseButton,
  ProgressBar,
  SongInfo,
} from './styles';

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

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

      if (indexOfNextSong || indexOfNextSong === 0) {
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
      if (indexOfNextSong || indexOfNextSong === 0) {
        setCurrentSongAndPlay(indexOfNextSong);
        setPlayListCurrentSong(0);
      }
    } else {
      const indexOfNextSong = songsIDs?.indexOf(
        playListIDs?.[playListCurrentSong + 1] as number,
      );
      if (indexOfNextSong || indexOfNextSong === 0) {
        setCurrentSongAndPlay(indexOfNextSong);
        setPlayListCurrentSong(playListCurrentSong + 1);
      }
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

  return (
    <Container>
      <SongInfo>
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
        {songs?.length && (
          <FavButton songID={songs[currentSong]?.id as number} />
        )}
        {songs?.length && (
          <ImageContainer>
            <Image src={songs[currentSong]?.image} />
          </ImageContainer>
        )}
        <div>
          {songs?.length && (
            <Text tag="h4" variant="body2" color="white">
              {songs[currentSong]?.name}
            </Text>
          )}
          {songs?.length && (
            <Text tag="h5" variant="caption" color="white">
              {songs[currentSong]?.author.name}
            </Text>
          )}
        </div>
      </SongInfo>
      <Controls>
        <NextPrevButton onClick={playPrev}>
          <PrevButton />
        </NextPrevButton>
        <PlayPlauseButton
          onClick={() => {
            toggleIsPlaying();
            togglePlayAudio();
          }}
        >
          {isPlaying ? <PauseButton /> : <PlayButton />}
        </PlayPlauseButton>
        <NextPrevButton onClick={playNext}>
          <NextButton />
        </NextPrevButton>
      </Controls>
      <AudioProgress>
        <Text tag="p" variant="caption" color="white">
          {formatTime(songCurrentTime)}
        </Text>
        <ProgressBar
          type="range"
          value={songDuration ? (songCurrentTime * 100) / songDuration : 0}
          onChange={handleRangeChange}
        />
        <Text tag="p" variant="caption" color="white">
          {formatTime(songDuration)}
        </Text>
      </AudioProgress>
    </Container>
  );
};
