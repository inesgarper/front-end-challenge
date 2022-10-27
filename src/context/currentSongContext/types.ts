export type CurrentSongContextType = {
  currentSong: number;
  isPlaying: boolean;
  setCurrentSongAndPlay: (songID: number) => void;
};

export type CurrentSongProviderWrapperProps = {
  children: React.ReactNode;
};

export const InitialContext = {
  currentSong: 0,
  isPlaying: false,
  setCurrentSongAndPlay: () => {},
};
