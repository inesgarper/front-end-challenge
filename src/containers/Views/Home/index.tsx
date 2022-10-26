import { SongsList } from '$/components/SongsList';
import { Text } from '$/components/Text';
import { FavsContext } from '$/context/favsContext';
import { useContext, useEffect } from 'react';

import { useLogic } from './logic';
import { Container, SearchInput } from './styles';

function HomeView(): JSX.Element {
  const {
    songsFromAPI,
    songs,
    setSongs,
    handleInputChange,
    handleSelectChange,
  } = useLogic();
  const { setFavsSongs } = useContext(FavsContext);

  useEffect(() => {
    if (songsFromAPI) {
      setSongs(songsFromAPI);
    }
  }, [songsFromAPI, setSongs]);

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
      <SongsList songs={songs} handleSelectChange={handleSelectChange} />
    </Container>
  );
}

export default HomeView;
