import { Song } from '$/model/song';

export type AudioPlayerContextType = {
  songs: Song[] | undefined;
  songsIDs: number[] | undefined;
  playList: Song[] | undefined;
  playListIDs: number[] | undefined;
  currentSong: number;
  playListCurrentSong: number;
  isPlaying: boolean;
  playClicked: boolean;
  pauseClicked: boolean;
  setPlayList: (playList: Song[]) => void;
  setPlayListIDs: (playListIDs: number[]) => void;
  setPlayListCurrentSong: (songPosition: number) => void;
  setCurrentSongAndPlay: (songPosition: number) => void;
  toggleIsPlaying: () => void;
  playSong: () => void;
  resetPlayClicked: () => void;
  pauseSong: () => void;
  resetPauseClicked: () => void;
};

export type AudioPlayerProviderWrapperProps = {
  children: React.ReactNode;
};

export const InitialContext = {
  songs: [] as Song[],
  songsIDs: [] as number[],
  playList: [] as Song[],
  playListIDs: [] as number[],
  currentSong: 0,
  playListCurrentSong: 0,
  isPlaying: false,
  playClicked: false,
  pauseClicked: false,
  setPlayList: () => {},
  setPlayListIDs: () => {},
  setPlayListCurrentSong: () => {},
  setCurrentSongAndPlay: () => {},
  toggleIsPlaying: () => {},
  playSong: () => {},
  resetPlayClicked: () => {},
  pauseSong: () => {},
  resetPauseClicked: () => {},
};
