import styled from '@emotion/styled';

export const MembershipsWrapper = styled.div`
  width: 100%;
  background-color: #fdf0d5ff;
  /* padding: 2.4rem; */
  display: flex;
  flex-direction: column;
  /* margin-top: 2.4rem; */
  color: #003049ff;
`;

export const MembershipsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(1fr 4);
  /* color: white; */
  font-size: 1.8rem;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    grid-auto-rows: min-content;
  }
`;