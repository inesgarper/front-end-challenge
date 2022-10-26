import { Select } from '$/components/Select';
import { SongCard } from '$/components/SongCard';

import { SongsListProps } from './types';

export const SongsList = ({ songs }: SongsListProps) => (
  <div>
    <h2>Featured songs</h2>
    <Select />
    <ul>
      {songs?.map((song) => (
        <li key={song.id}>
          <SongCard />
        </li>
      ))}
    </ul>
  </div>
);
