import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin: 10px 0px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LeftContent = styled.View`
  padding: 0 5px;
`;

export const RightContent = styled.View`
  padding: 0 5px;
`;
