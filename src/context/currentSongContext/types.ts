import { Song } from '$/model/song';

export type CurrentSongContextType = {
  songs: Song[] | undefined;
  currentSong: number;
  isPlaying: boolean;
  playClicked: boolean;
  pauseClicked: boolean;
  //setPlaylist: () => void;
  setCurrentSongAndPlay: (songID: number) => void;
  toggleIsPlaying: () => void;
  playSong: () => void;
  resetPlayClicked: () => void;
  pauseSong: () => void;
  resetPauseClicked: () => void;
};

export type CurrentSongProviderWrapperProps = {
  children: React.ReactNode;
};

export const InitialContext = {
  songs: undefined,
  currentSong: 0,
  isPlaying: false,
  playClicked: false,
  pauseClicked: false,
  //setPlaylist: () => {},
  setCurrentSongAndPlay: () => {},
  toggleIsPlaying: () => {},
  playSong: () => {},
  resetPlayClicked: () => {},
  pauseSong: () => {},
  resetPauseClicked: () => {},
};
