import styled from '@emotion/styled';

export const ContactWrapper = styled.div`
  width: 100%;
  background-color: #fdf0d5ff;
  padding: 2.4rem;
  color: #003049ff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr;
  gap: 1.2rem;
`;

export const TopSection = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`;

export const LeftSection = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

export const RightSection = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`;

export const ContactHeader = styled.h3`
  color: #003049ff;
`;

export const ContactText = styled.p`
  font-size: 1.8rem;
`;

export const TypeHeader = styled.h4`
  color: #003049ff;
  margin-right: 1rem;
  width: 6rem;
`;

export const HeaderAndText = styled.div`
  display: flex;
  align-items: center;
`;