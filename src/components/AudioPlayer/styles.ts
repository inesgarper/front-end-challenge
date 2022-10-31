import { from } from '$/styles/utils/responsive';
import styled from 'styled-components';

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

  /* ${from['tabletPortrait']} {
    height: 12rem;
  } */
`;

export const SongInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30rem;
  margin-left: 2rem;

  ${from['tabletPortrait']} {
    width: 15rem;
  }
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

export const NextPrevButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.grayscale100};
  }
`;

export const PlayPlauseButton = styled.button`
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.grayscale900};
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.color.grayscale100};
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
  width: 8.5rem;
  height: 2.5rem;
`;

export const AudioProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  margin-left: 2rem;
  height: 0.75rem;
  width: 28.125rem;
  ${from['tabletLandscape']} {
    flex-basis: 100%;
    width: 100%;
  }
`;

export const ProgressBar = styled.input`
  appearance: none;
  background: #88cffb;
  border-radius: 1.25rem;
  outline: none;
  width: 25rem;
  height: 0.25rem;
  margin-left: 0.6rem;
  margin-right: 0.6rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 0.625rem;
    width: 0.625rem;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.color.white};
    cursor: pointer;
    margin: -0.125rem 0 0 0;
    // z-index: 3;
    box-sizing: border-box;
  }

  ${from['tabletLandscape']} {
    width: 95%;
  }
`;
