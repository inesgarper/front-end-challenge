import { AudioPlayer } from '$/components/AudioPlayer';
import { Select } from '$/components/Select';
import { SongsList } from '$/components/SongsList';
import { Text } from '$/components/Text';

import { useLogic } from './logic';
import { Container, FlexContainer, SearchInput } from './styles';

function HomeView(): JSX.Element {
  const { handleInputChange, handleSelectChange } = useLogic();

  return (
    <Container>
      <Text tag="h1" variant="title1">
        Explore
      </Text>
      <SearchInput
        placeholder="Search by title, genre..."
        handleInputChange={handleInputChange}
      />
      <FlexContainer>
        <Text tag="h2" variant="title2">
          Featured songs
        </Text>
        <Select handleSelectChange={handleSelectChange} />
      </FlexContainer>
      <SongsList />
      <AudioPlayer />
    </Container>
  );
}

export default HomeView;
