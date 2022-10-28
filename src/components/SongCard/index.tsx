import { FavButton } from '$/components/FavButton';
import { Tag } from '$/components/Tag';
import { Text } from '$/components/Text';
import { CurrentSongContext } from '$/context/currentSongContext';
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
  const {
    songs,
    currentSong,
    isPlaying,
    setCurrentSongAndPlay,
    playSong,
    pauseSong,
  } = useContext(CurrentSongContext);

  const songsIds = [
    17, 9, 3, 1, 18, 12, 5, 16, 0, 11, 19, 14, 13, 15, 7, 8, 4, 2, 10, 6,
  ];

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
            {songs?.[currentSong]?.id === song.id && isPlaying ? (
              <button onClick={() => pauseSong()}>Pause</button>
            ) : (
              <button
                onClick={() => {
                  console.log(songsIds?.includes(song.id));
                  console.log('la cancion', song);
                  console.log(songs);
                  setCurrentSongAndPlay(songsIds?.indexOf(song.id));
                  if (currentSong === songsIds?.indexOf(song.id)) {
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
