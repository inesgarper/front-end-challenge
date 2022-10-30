import { Select } from '$/components/Select';
import { SongCard } from '$/components/SongCard';
import { Text } from '$/components/Text';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { Reorder } from 'framer-motion';
import { useContext } from 'react';

import { Container } from './styles';
import { SongsListProps } from './types';

export const SongsList = ({ handleSelectChange }: SongsListProps) => {
  const { playList, setPlayList } = useContext(AudioPlayerContext);

  return (
    <div>
      <Container>
        <Text tag="h2" variant="title2">
          Featured songs
        </Text>
        <Select handleSelectChange={handleSelectChange} />
      </Container>
      {playList && (
        <Reorder.Group axis="y" values={playList} onReorder={setPlayList}>
          {playList?.map((song) => (
            <Reorder.Item
              value={song}
              key={song.id}
              style={{
                listStyleType: 'none',
                paddingInlineStart: 0,
              }}
            >
              <SongCard song={song} />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      )}
    </div>
  );
};
