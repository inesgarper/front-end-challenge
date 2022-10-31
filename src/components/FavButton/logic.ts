import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { FavsContext } from '$/context/favsContext';
import { Player } from '@lottiefiles/react-lottie-player';
import { useContext, useEffect, useRef, useState } from 'react';

export const useLogic = (songID: number) => {
  const { favourites } = useContext(FavsContext);
  const { currentSong } = useContext(AudioPlayerContext);
  const [animationIsReady, setAnimationIsReady] = useState(false);

  const animation = useRef<Player>(null);

  useEffect(() => {
    setAnimationIsReady(true);
  }, []);

  useEffect(() => {
    if (animation && animation.current) {
      if (favourites.includes(songID)) {
        animation.current.setSeeker(30);
      } else {
        animation.current.setSeeker(0);
      }
    }
  }, [animationIsReady, currentSong]);

  useEffect(() => {
    if (animation && animation.current) {
      if (favourites.includes(songID)) {
        animation.current.setPlayerDirection(1);
        animation.current.play();
      } else {
        animation.current.setPlayerDirection(-1);
        animation.current.play();
      }
    }
  }, [favourites]);

  return {
    animation,
  };
};
