import { Tag } from '$/components/Tag';
import { Text } from '$/components/Text';
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

export const SongCard = ({ song }: SongsCardProps) => {
  const { favourites, toggleFavs } = useContext(FavsContext);
  const { songDuration, songGenre, getSongDuration, formatSongGenre } =
    useLogic();

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
            <button>Play</button>
            <Text tag="p" variant="caption" color={'grayscale700'}>
              {songDuration} min
            </Text>
            <Tag text={songGenre} />
          </SongBottom>
        </SongInfo>
      </SongContainer>
      <button onClick={() => toggleFavs(song.id)} className="favButton">
        {favourites.includes(song.id) ? (
          <span>Dislike</span>
        ) : (
          <span>Like</span>
        )}
      </button>
    </Container>
  );
};
