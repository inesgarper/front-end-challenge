import styled from 'styled-components';
import { from } from '$/styles/utils/responsive';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.grayscale900};
  color: ${({ theme }) => theme.color.white};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  border-radius: 1rem 1rem 0 0;

  ${from['tabletLandscape']} {
    height: 8rem;
    flex-wrap: wrap;
  }

  ${from['tabletPortrait']} {
    height: 12rem;
  }
`;

export const SongInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 480px;
  margin-left: 2rem;
`;

export const ImageContainer = styled.div`
  width: 3rem;
  height: 3rem;
  margin-right: 0.8rem;
  margin-left: 0.8rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
`;

// export const TextContainer = styled.div`
//   width: ;
// `;

export const NextPrevButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlayPlauseButton = styled.button`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.grayscale900};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
  width: 136px;
  height: 40px;
`;

export const AudioProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  margin-left: 2rem;
  height: 12px;
  width: 450px;
  ${from['tabletLandscape']} {
    flex-basis: 100%;
    width: 100%;
  }
`;

export const ProgressBar = styled.input`
  appearance: none;
  background: #88cffb;
  border-radius: 20px;
  outline: none;
  width: 400px;
  height: 4px;
  margin-left: 0.6rem;
  margin-right: 0.6rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    margin: -2px 0 0 0;
    z-index: 3;
    box-sizing: border-box;
  }

  ${from['tabletLandscape']} {
    width: 95%;
  }
`;
