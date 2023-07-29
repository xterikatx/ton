import React from 'react';
import * as S from './styles';
import Text from '../Text';
import {Image} from 'react-native';

interface Props {
  title: string;
  description: string;
  image?: string;
}

export default function ListItem({title, description, image, ...rest}: Props) {
  return (
    <S.Container {...rest}>
      <S.Wrapper>
        <S.LeftContent>
          {!!image && (
            <Image
              height={65}
              width={35}
              resizeMode="contain"
              source={{
                uri: image,
              }}
              testID="list-item-image"
            />
          )}
        </S.LeftContent>
        <S.RightContent>
          <Text variant="bold">{title}</Text>
          <Text variant="secondary">{description}</Text>
        </S.RightContent>
      </S.Wrapper>
    </S.Container>
  );
}
