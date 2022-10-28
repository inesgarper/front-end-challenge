import { FavButton } from '$/components/FavButton';
import { Tag } from '$/components/Tag';
import { Text } from '$/components/Text';
import { CurrentSongContext } from '$/context/currentSongContext';
import { FavsContext } from '$/context/favsContext';
import { useContext, useEffect } from 'react';

import { useLogic } from './logic';
import {
  Container,
  Image,
  ImageContainer,
  SongBottom,
  SongContainer,
  SongInfo,
} from './styles';
import { SongsCardProps } from './types';

export const SongCard = ({ song, index }: SongsCardProps) => {
  const { songDuration, songGenre, getSongDuration, formatSongGenre } =
    useLogic();
  const { currentSong, isPlaying, setCurrentSongAndPlay, playSong, pauseSong } =
    useContext(CurrentSongContext);

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
            <Text tag="h3" variant="bodyBold" color={'grayscale900'}>
              {song.name}
            </Text>
            <Text tag="p" variant="body" color={'grayscale700'}>
              {song.author.name}
            </Text>
            <Text tag="p" variant="body2" color={'grayscale700'}>
              {song.description}
            </Text>
          </div>
          <SongBottom>
            {currentSong === index && isPlaying ? (
              <button onClick={() => pauseSong()}>Pause</button>
            ) : (
              <button
                onClick={() => {
                  setCurrentSongAndPlay(index);
                  if (currentSong === index) {
                    playSong();
                  }
                }}
              >
                Play
              </button>
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
