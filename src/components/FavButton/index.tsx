import animationSrc from '$/assets/animations/like-lottie.json';
import { FavsContext } from '$/context/favsContext';
import { Player } from '@lottiefiles/react-lottie-player';
import { useContext } from 'react';

import { useLogic } from './logic';
import { animationStyles, Button } from './styles';
import { FavButtonProps } from './types';

export const FavButton = ({ songID }: FavButtonProps) => {
  const { toggleFavs } = useContext(FavsContext);
  const { animation } = useLogic(songID);

  return (
    <Button onClick={() => toggleFavs(songID)}>
      <Player
        src={animationSrc}
        style={animationStyles}
        autoplay={false}
        ref={animation}
        keepLastFrame={true}
      />
    </Button>
  );
};
