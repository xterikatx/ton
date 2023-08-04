import React from 'react';
import * as S from './styles';
import {ScrollView} from 'react-native';

interface Props {
  children: React.ReactNode;
}

export default function DefaultScreen({children}: Props) {
  return (
    <S.SafeAreaView>
      <ScrollView>
        <S.View>{children}</S.View>
      </ScrollView>
    </S.SafeAreaView>
  );
}
