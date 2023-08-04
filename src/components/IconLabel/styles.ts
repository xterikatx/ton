import styled from 'styled-components/native';
import VectorIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 6px 0;
`;

export const Icon = styled(VectorIcon)`
  color: #00cc2c;
  padding-right: 15px;
`;
