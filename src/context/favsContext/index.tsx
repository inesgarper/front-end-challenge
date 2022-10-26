import { createContext, useState } from 'react';

type FavsContextType = {
  favourites: number[];
  setFavsSongs: () => void;
  toggleFavs: (songID: number) => void;
};

const FavsContext = createContext<FavsContextType>({
  favourites: [],
  setFavsSongs: () => {},
  toggleFavs: () => {},
});

type Props = {
  children: React.ReactNode;
};

const FavsProviderWrapper = (props: Props) => {
  const [favourites, setFavourites] = useState<FavsContextType['favourites']>(
    [],
  );

  const setFavsSongs = () => {
    const storedFavs = localStorage.getItem('favourites');

    if (storedFavs) {
      const favs = JSON.parse(storedFavs) as FavsContextType['favourites'];
      setFavourites(favs);
    }
  };

  const toggleFavs = (songID: number) => {
    console.log('se ejecuta la función');
    const favsCopy = [...favourites];

    if (favsCopy.includes(songID)) {
      const songToRemove = favsCopy.indexOf(songID);
      favsCopy.splice(songToRemove, 1);
    } else {
      favsCopy.push(songID);
    }

    localStorage.setItem('favourites', JSON.stringify(favsCopy));
    setFavsSongs();
  };

  return (
    <FavsContext.Provider value={{ favourites, setFavsSongs, toggleFavs }}>
      {props.children}
    </FavsContext.Provider>
  );
};

export { FavsContext, FavsProviderWrapper };
