import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';
import { Text } from '$/components/Text';

export const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 140px;
  margin-bottom: 40px;
`;

export const SongContainer = styled.div`
  display: flex;
  ${from['tabletPortrait']} {
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
`;

export const ImageContainer = styled.div`
  width: 8.75rem;
  height: 8.75rem;
  margin-right: 0.8rem;
  /* ${from['tabletPortrait']} {
    width: 7rem;
    height: 7rem;
  } */
`;

export const AnimationContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.25rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 37.688rem;
  height: 136px;
  ${from['tabletLandscape']} {
    width: 65%;
  }
`;

export const TextDescription = styled(Text)`
  ${from['tabletPortrait']} {
    display: none;
  }
`;

export const SongBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const PlayPauseButton = styled.button`
  background: ${({ theme }) => theme.color.grayscale900};
  color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

export const animationStyles = {
  width: 15,
  height: 15,
};
