import {styled} from 'styled-components/native';

export type VariantType = 'header' | 'bold' | 'primary' | 'secondary' | 'white';

const variants: Record<
  VariantType,
  {fontSize: string; fontWeight: 'normal' | 'bold'; color: string}
> = {
  header: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#222',
  },
  bold: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#222',
  },
  primary: {
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#222',
  },
  secondary: {
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#777',
  },
  white: {
    fontSize: '16px',
    fontWeight: 'normal',
    color: '#fff',
  },
};

export const TextStyled = styled.Text<{variant: VariantType}>`
  font-size: ${({variant}) => variants[variant].fontSize};
  font-weight: ${({variant}) => variants[variant].fontWeight};
  color: ${({variant}) => variants[variant].color};
`;
