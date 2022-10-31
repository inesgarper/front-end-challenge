import animationSrc from '$/assets/animations/playing-bars.json';
import { FavButton } from '$/components/FavButton';
import { Tag } from '$/components/Tag';
import { Text } from '$/components/Text';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { Player } from '@lottiefiles/react-lottie-player';
import { useContext } from 'react';
import {
  BsFillPauseFill as PauseButton,
  BsFillPlayFill as PlayButton,
} from 'react-icons/bs';

import { useLogic } from './logic';
import {
  AnimationContainer,
  animationStyles,
  Container,
  Image,
  ImageContainer,
  PlayPauseButton,
  SongBottom,
  SongContainer,
  SongInfo,
  TextDescription,
  TitleContainer,
} from './styles';
import { SongsCardProps } from './types';

export const SongCard = ({ song }: SongsCardProps) => {
  const { songDuration, songGenre, setPlayListCurrentSongAndPlay } =
    useLogic(song);
  const { songs, currentSong, isPlaying, pauseSong } =
    useContext(AudioPlayerContext);

  return (
    <Container>
      <SongContainer>
        <ImageContainer>
          <Image src={song.image} />
        </ImageContainer>
        <SongInfo>
          <div>
            <TitleContainer>
              {songs?.[currentSong]?.id === song.id && isPlaying ? (
                <AnimationContainer>
                  <Player
                    src={animationSrc}
                    autoplay={true}
                    loop={true}
                    style={animationStyles}
                  />
                </AnimationContainer>
              ) : null}
              <Text tag="h3" variant="bodyBold" color={'grayscale900'}>
                {song.name}
              </Text>
            </TitleContainer>
            <Text tag="p" variant="body" color={'grayscale700'}>
              {song.author.name}
            </Text>
            <TextDescription tag="p" variant="body2" color={'grayscale700'}>
              {song.description}
            </TextDescription>
          </div>
          <SongBottom>
            {songs?.[currentSong]?.id === song.id && isPlaying ? (
              <PlayPauseButton onClick={() => pauseSong()}>
                <PauseButton />
              </PlayPauseButton>
            ) : (
              <PlayPauseButton
                onClick={() => setPlayListCurrentSongAndPlay(song.id)}
              >
                <PlayButton />
              </PlayPauseButton>
            )}
            <Text tag="p" variant="caption" color={'grayscale700'}>
              {songDuration} min
            </Text>
            <Tag text={songGenre} />
          </SongBottom>
        </SongInfo>
      </SongContainer>
      <FavButton songID={song.id} />
    </Container>
  );
};
