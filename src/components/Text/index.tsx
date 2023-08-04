import React from 'react';
import {TextStyled} from './styles';

type VariantType = 'header' | 'bold' | 'primary' | 'secondary' | 'white';

interface Props {
  variant?: VariantType;
  children: React.ReactNode;
}

export default function Text({variant = 'primary', children, ...rest}: Props) {
  return (
    <TextStyled variant={variant} {...rest}>
      {children}
    </TextStyled>
  );
}
