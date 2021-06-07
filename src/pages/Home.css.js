import styled from '@emotion/styled';
import scales from '../images/scales.jpg';

export const HomeStyles = styled.div`
  background-image: linear-gradient(
      rgba(29, 41, 81, 0.65),
      rgba(29, 41, 81, 0.65)
    ),
    url(${scales});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  overflow: hidden;
  min-width: 100vw;
  min-height: 100vh;
  padding: 3rem;
`;

export const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`;

export const MiddleRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 5rem;
  place-items: center;
  width: 100%;
  margin-top: 10rem;
`;