import { AudioPlayer } from '$/components/AudioPlayer';
import { SongsList } from '$/components/SongsList';
import { Text } from '$/components/Text';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { FavsContext } from '$/context/favsContext';
import { useContext, useEffect } from 'react';

import { useLogic } from './logic';
import { Container, SearchInput } from './styles';

function HomeView(): JSX.Element {
  const { songsFromAPI, handleInputChange, handleSelectChange } = useLogic();
  const { setFavsSongs } = useContext(FavsContext);
  const { playList, setPlayList } = useContext(AudioPlayerContext);

  useEffect(() => {
    if (songsFromAPI) {
      setPlayList(songsFromAPI);
    }
  }, [songsFromAPI, setPlayList]);

  useEffect(() => {
    setFavsSongs();
  }, []);

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        placeholder="Search by title, genre..."
        handleInputChange={handleInputChange}
      />
      <SongsList handleSelectChange={handleSelectChange} />
      <AudioPlayer />
    </Container>
  );
}

export default HomeView;
