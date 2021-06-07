import styled from '@emotion/styled';

import headshot from '../../images/srand_headshot.jpeg';

export const StyledHeadshot = styled.h1`
  width: 100%;
  height: 30rem;
  background-image: url(${headshot});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  overflow: hidden;
`;
