import { Select } from '$/components/Select';
import { SongCard } from '$/components/SongCard';

import { SongsListProps } from './types';

export const SongsList = ({ songs, handleSelectChange }: SongsListProps) => (
  <div>
    <h2>Featured songs</h2>
    <Select handleSelectChange={handleSelectChange} />
    <ul>
      {songs?.map((song) => (
        <li key={song.id}>
          <SongCard {...song} />
        </li>
      ))}
    </ul>
  </div>
);
