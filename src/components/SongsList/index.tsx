import { Select } from '$/components/Select';
import { SongCard } from '$/components/SongCard';

import { ListElement } from './styles';
import { SongsListProps } from './types';

export const SongsList = ({ songs, handleSelectChange }: SongsListProps) => (
  <div>
    <h2>Featured songs</h2>
    <Select handleSelectChange={handleSelectChange} />
    <ListElement>
      {songs?.map((song) => (
        <li key={song.id}>
          <SongCard song={song} />
        </li>
      ))}
    </ListElement>
  </div>
);
