import React from 'react';
import * as S from './styles';
import Text from '../Text';

interface IconLabelProps {
  icon: string;
  label: string;
}

const IconLabel: React.FC<IconLabelProps> = ({icon, label}) => (
  <S.Container>
    <S.Icon name={icon} size={26} color="#00CC2C" />
    <Text variant="primary">{label}</Text>
  </S.Container>
);

export default IconLabel;
