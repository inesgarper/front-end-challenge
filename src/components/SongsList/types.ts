import { Song } from '$/model/song';

export type SongsListProps = {
  songs?: Song[] | [];
  handleSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
