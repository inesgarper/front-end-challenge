import { FavButton } from '$/components/FavButton';
import { Tag } from '$/components/Tag';
import { Text } from '$/components/Text';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
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
              <h1
                onClick={() => pauseSong()}
                style={{ backgroundColor: 'red', fontSize: 40 }}
              >
                Pause
              </h1>
            ) : (
              <button
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
