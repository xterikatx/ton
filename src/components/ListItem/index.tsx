import React from 'react';
import * as S from './styles';
import Text from '../Text';
import {Image, TouchableOpacityProps} from 'react-native';

interface Props {
  title: string;
  description: string;
  image?: string;
  onPress: TouchableOpacityProps['onPress'];
  testID?: TouchableOpacityProps['testID'];
}

export default function ListItem({
  title,
  description,
  image,
  onPress,
  testID = 'list-item',
  ...rest
}: Props) {
  return (
    <S.Container onPress={onPress} testID={testID} {...rest}>
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
