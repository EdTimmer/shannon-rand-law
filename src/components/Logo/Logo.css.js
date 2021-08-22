import styled from '@emotion/styled';
import logo from '../../images/logo.png';

export const LogoWrapper = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  /* background-position: center; */
  object-fit: contain;
  width: 30rem;
  min-height: 15rem;
  padding-left: 5rem;
  place-self: start;
  /* margin: 3rem; */
  /* padding-top: 1rem; */

  @media only screen and (max-width: 56.25em) {
    place-self: center;
    object-fit: contain;
  }
`;
