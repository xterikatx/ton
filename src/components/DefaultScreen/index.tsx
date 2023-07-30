import React from 'react';
import * as S from './styles';

interface Props {
  children: React.ReactNode;
}

export default function DefaultScreen({children}: Props) {
  return (
    <S.SafeAreaView>
      <S.View>{children}</S.View>
    </S.SafeAreaView>
  );
}
