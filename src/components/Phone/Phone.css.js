import styled from '@emotion/styled';

export const StyledPhone = styled.div`
  /* background-color: #780000ff; */
  background-color: #e88261;
  width: 20rem;
  height: 5rem;
  display: grid;
  grid-template-columns: min-content max-content;
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  place-content: center;
  place-items: center;
  font-size: 2rem;
  padding: 0.5rem;
  justify-self: end;

  @media only screen and (max-width: 56.25em) {
    justify-self: center;
  }
`;
