import styled from '@emotion/styled';

export const SloganWrapper = styled.div`
  background-color: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  place-content: start;
  margin-top: 2rem;

  @media only screen and (max-width: 56.25em) {
    place-self: center;
  }
`;

export const SloganText = styled.h1`
  font-size: 2.8rem;
  color: white;
`;
