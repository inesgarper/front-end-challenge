export type FavsContextType = {
  favourites: number[];
  setFavsSongs: () => void;
  toggleFavs: (songID: number) => void;
};

export type FavsProviderWrapperProps = {
  children: React.ReactNode;
};

export const InitialContext = {
  favourites: [],
  setFavsSongs: () => {},
  toggleFavs: () => {},
};
