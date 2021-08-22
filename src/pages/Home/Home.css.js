import styled from '@emotion/styled';
import bridge from '../../images/bridge.jpg';

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
`;
// 102, 155, 188;
export const CenterSection = styled.div`
  /* background-image: linear-gradient(
      rgba(29, 41, 81, 0.3),
      rgba(29, 41, 81, 0.3)
    ),
    url(${bridge}); */
  /* background-image: linear-gradient(
      rgba(253, 240, 213, 0.4),
      rgba(253, 240, 213, 0.4)
    ),
    url(${bridge}); */
  background-image: linear-gradient(rgba(0, 48, 73, 0.4), rgba(0, 48, 73, 0.4)),
    url(${bridge});
  /* background-image: url(${bridge}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  overflow: hidden;
  /* min-width: 100%; */
  height: 70vh;
  /* padding: 1rem 3rem; */
`;

export const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`;

export const PhoneAndNavWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  
`;

export const SecondRow = styled.div`
  display: grid;
  width: 100%;
  margin: 3rem;
  place-items: start;
`;