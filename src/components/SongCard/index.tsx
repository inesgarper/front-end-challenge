import animationSrc from '$/assets/animations/playing-bars.json';
import { FavButton } from '$/components/FavButton';
import { Tag } from '$/components/Tag';
import { Text } from '$/components/Text';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { Player } from '@lottiefiles/react-lottie-player';
import { useContext, useEffect } from 'react';
import {
  BsFillPauseFill as PauseButton,
  BsFillPlayFill as PlayButton,
} from 'react-icons/bs';

import { useLogic } from './logic';
import {
  AnimationContainer,
  Container,
  Image,
  ImageContainer,
  PlayPauseButton,
  SongBottom,
  SongContainer,
  SongInfo,
  TitleContainer,
} from './styles';
import { SongsCardProps } from './types';

export const SongCard = ({ song }: SongsCardProps) => {
  const { songDuration, songGenre, getSongDuration, formatSongGenre } =
    useLogic();
  const {
    songs,
    songsIDs,
    playList,
    playListIDs,
    currentSong,
    playListCurrentSong,
    isPlaying,
    setPlayListCurrentSong,
    setCurrentSongAndPlay,
    playSong,
    pauseSong,
  } = useContext(AudioPlayerContext);

  const style = {
    width: 13,
    heigh: 13,
  };

  useEffect(() => {
    getSongDuration(song.audio.url);
    formatSongGenre(song.genre);
  }, []);

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
                    style={style}
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
            <Text tag="p" variant="body2" color={'grayscale700'}>
              {song.description}
            </Text>
          </div>
          <SongBottom>
            {songs?.[currentSong]?.id === song.id && isPlaying ? (
              <PlayPauseButton onClick={() => pauseSong()}>
                <PauseButton />
              </PlayPauseButton>
            ) : (
              <PlayPauseButton
                onClick={() => {
                  if (songsIDs) {
                    setCurrentSongAndPlay(songsIDs?.indexOf(song.id));
                    setPlayListCurrentSong(
                      playListIDs?.indexOf(song.id) as number,
                    );
                    if (currentSong === songsIDs?.indexOf(song.id)) {
                      playSong();
                    }
                  }
                }}
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
