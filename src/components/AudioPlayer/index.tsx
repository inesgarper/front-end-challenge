import { FavButton } from '$/components/FavButton';
import { Text } from '$/components/Text';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { formatTime } from '$/utils/formatters';
import React, { useContext } from 'react';
import {
  BiSkipNext as NextButton,
  BiSkipPrevious as PrevButton,
} from 'react-icons/bi';
import {
  BsFillPauseFill as PauseButton,
  BsFillPlayFill as PlayButton,
} from 'react-icons/bs';

import { useLogic } from './logic';
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
  const { songs, currentSong, isPlaying, toggleIsPlaying } =
    useContext(AudioPlayerContext);
  const {
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
  } = useLogic();

  return (
    <Container>
      {songs?.length && (
        <SongInfo>
          <audio
            ref={audio}
            src={songs[currentSong]?.audio.url}
            preload="true"
            onCanPlay={getSongDuration}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnd}
          />
          <FavButton songID={songs[currentSong]?.id as number} />
          <ImageContainer>
            <Image src={songs[currentSong]?.image} />
          </ImageContainer>
          <div>
            <Text tag="h4" variant="body2" color="white">
              {songs[currentSong]?.name}
            </Text>
            <Text tag="h5" variant="caption" color="white">
              {songs[currentSong]?.author.name}
            </Text>
          </div>
        </SongInfo>
      )}
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
