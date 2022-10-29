import { Select } from '$/components/Select';
import { SongCard } from '$/components/SongCard';
import { Text } from '$/components/Text';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { useContext } from 'react';

import { Container, ListElement } from './styles';
import { SongsListProps } from './types';

export const SongsList = ({ handleSelectChange }: SongsListProps) => {
  const { playList } = useContext(AudioPlayerContext);

  return (
    <div>
      <Container>
        <Text tag="h2" variant="title2">
          Featured songs
        </Text>
        <Select handleSelectChange={handleSelectChange} />
      </Container>
      <ListElement>
        {playList?.map((song) => (
          <li key={song.id}>
            <SongCard song={song} />
          </li>
        ))}
      </ListElement>
    </div>
  );
};
