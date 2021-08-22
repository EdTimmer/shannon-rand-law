import styled from '@emotion/styled';
import { HashLink as Link } from 'react-router-hash-link';

export const NavigationWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: 1fr;
  /* grid-column-gap: 3rem; */
  justify-content: end;
  align-items: center;
  /* margin-left: auto; */
  /* width: 100%; */
  background-color: none;
  margin-right: 3rem;
  align-self: start;

`;

export const NavigationLink = styled(Link)`
  font-size: 2rem;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1rem;
`;