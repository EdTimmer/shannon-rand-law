import styled from '@emotion/styled';
import bridge from '../../images/bridge.jpg';

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;

  @media only screen and (max-width: 56.25em) {
    height: 70vh;
  }
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
  /* object-fit: contain; */
  overflow: hidden;
  /* min-width: 100%; */
  height: 70vh;
  padding: 3rem;
  /* position: relative; */
  display: grid;
  grid-template-rows: min-content min-content;
`;

export const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  width: 100%;
  /* position: fixed; */

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    grid-auto-rows: repeat(2 max-content);
  }
`;

export const LogoWrapper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  place-self: start;

  @media only screen and (max-width: 56.25em) {
    place-items: center;
    place-self: center;
  }
`;

export const PhoneAndNavWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, min-content);

  @media only screen and (max-width: 56.25em) {
    place-self: center;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    margin-top: 3rem;
  }
`;

export const SecondRow = styled.div`
  display: grid;
  width: 100%;
`;