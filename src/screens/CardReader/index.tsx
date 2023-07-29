import React from 'react';
import Text from '../../components/Text';
import * as S from './styles';
import ListItem from '../../components/ListItem';

export default function CardReader() {
  return (
    <S.Container>
      <S.Header>
        <Text variant="header">Escolha uma opção</Text>
        <Text variant="secondary">
          Descubra a melhor opção para o seu negócio.
        </Text>
      </S.Header>

      <ListItem
        title="Maquininha T1"
        description="À partir de 12x de R$ 11,90"
        image="https://assets.lojastonemais.com.br/images/products/TON_D150/medium.png"
      />
    </S.Container>
  );
}
