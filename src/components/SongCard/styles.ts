import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 140px;
  margin-bottom: 40px;
`;

export const SongContainer = styled.div`
  display: flex;
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
`;

export const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 37.688rem;
  height: 136px;
`;

export const SongBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
