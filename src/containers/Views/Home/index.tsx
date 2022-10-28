import { AudioPlayer } from '$/components/AudioPlayer';
import { SongsList } from '$/components/SongsList';
import { Text } from '$/components/Text';
import { CurrentSongContext } from '$/context/currentSongContext';
import { FavsContext } from '$/context/favsContext';
import { Song } from '$/model/song';
import { useContext, useEffect, useState } from 'react';

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
      <AudioPlayer />
    </Container>
  );
}

export default HomeView;
