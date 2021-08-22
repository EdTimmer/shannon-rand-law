import styled from '@emotion/styled';

export const AboutWrapper = styled.div`
  max-width: 100%;
  /* height: 50rem; */
  background-color: #fdf0d5ff;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  padding: 2.4rem;
  color: #003049ff;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

export const ImageContainer = styled.div`
  grid-column: 1 / 2;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 56.25em) {
    grid-column: 1 / 2;
  }
`;

export const DescriptionWrapper = styled.div`
  grid-column: 2 / 3;
  padding: 0 2.4rem;

  @media only screen and (max-width: 56.25em) {
    grid-column: 1 / 2;
  }
`;

export const Header = styled.h3`
  margin-bottom: 1.2rem;
`;

export const TextWrapper = styled.p`
  font-size: 1.6rem;
`;

export const MembershipsWrapper = styled.div`
  margin-top: 2rem;
`;