import {styled} from 'styled-components/native';
import Text from '../Text';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
  width: 300px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  right: 10;
  top: 5;
`;

export const TextInfo = styled(Text)`
  margin-top: 12px;
`;
