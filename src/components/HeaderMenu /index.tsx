import {SafeAreaView} from 'react-native';
import React from 'react';

import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../Text';

interface Props {
  name: string;
}

export default function HeaderMenu({
  name,
  navigation,
}: Props & {navigation?: any}) {
  return (
    <SafeAreaView>
      <S.Container>
        {!!navigation && (
          <Icon
            name="menu"
            size={22}
            color={'#fff'}
            testID="menu-icon"
            onPress={() => navigation.openDrawer()}
          />
        )}
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
