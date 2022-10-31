import animationSrc from '$/assets/animations/like-lottie.json';
import { AudioPlayerContext } from '$/context/audioPlayerContext';
import { FavsContext } from '$/context/favsContext';
import { Player } from '@lottiefiles/react-lottie-player';
import { useContext, useEffect, useRef, useState } from 'react';

import { Button } from './styles';
import { FavButtonProps } from './types';

export const FavButton = ({ songID }: FavButtonProps) => {
  const { toggleFavs, favourites } = useContext(FavsContext);
  const { currentSong } = useContext(AudioPlayerContext);
  const [animationIsReady, setAnimationIsReady] = useState(false);

  const animation = useRef<Player>(null);

  const styles = {
    width: 35,
    heigth: 35,
  };

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

  return (
    <Button onClick={() => toggleFavs(songID)}>
      <Player
        src={animationSrc}
        style={styles}
        autoplay={false}
        ref={animation}
        keepLastFrame={true}
      />
    </Button>
  );
};
