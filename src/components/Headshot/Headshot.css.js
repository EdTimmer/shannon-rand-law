import styled from '@emotion/styled';

import headshot from '../../images/headshot_2.jpg';

export const StyledHeadshot = styled.h1`
  width: 100%;
  height: 40rem;
  background-image: url(${headshot});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  overflow: hidden;
`;
