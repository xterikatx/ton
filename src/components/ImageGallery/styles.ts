import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const ThumbnailImage = styled.Image<{active: boolean}>`
  height: 70px;
  width: 70px;
  margin-right: 10px;
  border-width: 1px;
  border-color: ${({active}) => (active ? '#00CC2C' : '#ccc')};
`;

export const ActiveImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;
