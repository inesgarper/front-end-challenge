export type CurrentSongContextType = {
  currentSong: number;
  isPlaying: boolean;
  playClicked: boolean;
  pauseClicked: boolean;
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
  currentSong: 0,
  isPlaying: false,
  playClicked: false,
  pauseClicked: false,
  setCurrentSongAndPlay: () => {},
  toggleIsPlaying: () => {},
  playSong: () => {},
  resetPlayClicked: () => {},
  pauseSong: () => {},
  resetPauseClicked: () => {},
};
