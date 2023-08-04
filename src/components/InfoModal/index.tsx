import React from 'react';
import {Modal} from 'react-native';
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  visible: boolean;
  onClose: () => void;
  text: string;
}

const InfoModal = ({visible, onClose, text}: Props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <S.Container>
        <S.Wrapper>
          <S.CloseButton onPress={onClose} testID="close-button">
            <Icon name="alpha-x-circle-outline" size={30} />
          </S.CloseButton>

          <S.TextInfo>{text}</S.TextInfo>
        </S.Wrapper>
      </S.Container>
    </Modal>
  );
};

export default InfoModal;
