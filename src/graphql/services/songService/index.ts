import { useQuery } from '@apollo/client';

import { SONGS_LIST } from './queries';
import { SongsList } from './types';

export const useGetSongsList = (search: string, sort: string) => {
  const { data } = useQuery<SongsList>(SONGS_LIST, {
    variables: { search, sort },
  });

  return data?.songs.songs;
};
