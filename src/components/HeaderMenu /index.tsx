import {SafeAreaView} from 'react-native';
import React from 'react';

import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../Text';

interface Props {
  name: string;
}

export default function HeaderMenu({name}: Props) {
  return (
    <SafeAreaView>
      <S.Container>
        <Icon name="menu" size={22} color={'#fff'} testID="menu-icon" />
        <Text variant="white">{name}</Text>
        <Icon
          name="progress-question"
          size={22}
          color={'#fff'}
          testID="question-icon"
        />
      </S.Container>
    </SafeAreaView>
  );
}
