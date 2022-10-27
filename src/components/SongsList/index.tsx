import { Select } from '$/components/Select';
import { SongCard } from '$/components/SongCard';
import { Text } from '$/components/Text';

import { Container, ListElement } from './styles';
import { SongsListProps } from './types';

export const SongsList = ({ songs, handleSelectChange }: SongsListProps) => (
  <div>
    <Container>
      <Text tag="h2" variant="title2">
        Featured songs
      </Text>
      <Select handleSelectChange={handleSelectChange} />
    </Container>
    <ListElement>
      {songs?.map((song) => (
        <li key={song.id}>
          <SongCard song={song} />
        </li>
      ))}
    </ListElement>
  </div>
);
