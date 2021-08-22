import styled from '@emotion/styled';

import headshot from '../../images/headshot_2.jpg';

export const StyledHeadshot = styled.h1`
  width: auto;
  height: 100%;
  background-image: url(${headshot});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  overflow: hidden;
`;
