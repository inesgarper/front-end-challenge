import { SongCard } from '$/components/SongCard';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { Reorder } from 'framer-motion';
import { useContext } from 'react';

export const SongsList = () => {
  const { playList, setPlayList } = useContext(AudioPlayerContext);

  return (
    <div>
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
