import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.color.grayscale900};
  color: ${({ theme }) => theme.color.white};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  border-radius: 1rem 1rem 0 0;
`;
