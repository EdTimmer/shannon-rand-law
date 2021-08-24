import styled from '@emotion/styled';
import logo_1 from '../../images/shannon-rand-horizontal-rgb.svg';

export const LogoWrapper = styled.div`
  background-image: url(${logo_1});
  background-repeat: no-repeat;
  background-position: start;
  object-fit: contain;
  width: 50rem;
  min-height: 20rem;
  margin-left: -3.5rem;
  margin-top: -3.5rem;
  place-self: start;

  @media only screen and (max-width: 56.25em) {
    background-position: center;
    place-self: center;
    object-fit: contain;
    width: 35rem;
    min-height: 22rem;
    padding: 0;
    margin-left: 0;
  }
`;
