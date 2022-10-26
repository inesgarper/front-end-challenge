import { SongsList } from '$/components/SongsList';
import { Text } from '$/components/Text';
import { useEffect } from 'react';

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

  useEffect(() => {
    if (songsFromAPI) {
      setSongs(songsFromAPI);
    }
  }, [songsFromAPI, setSongs]);

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        placeholder="Search by title, genre..."
        handleInputChange={handleInputChange}
      />
      <SongsList songs={songs} />
    </Container>
  );
}

export default HomeView;
