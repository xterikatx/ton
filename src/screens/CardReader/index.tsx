import React from 'react';
import Text from '../../components/Text';
import * as S from './styles';
import DefaultScreen from '../../components/DefaultScreen';
import api from '../../services/api';
import {useQuery} from '@tanstack/react-query';
import {ActivityIndicator, FlatList} from 'react-native';
import ListItem from '../../components/ListItem';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes';
import HeaderMenu from '../../components/HeaderMenu ';

export default function CardReader() {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'CardReader'>
    >();

  const fetchProducts = () =>
    api.get('/products').then(response => response.data);

  const {data: products, isLoading} = useQuery(['products'], fetchProducts);

  return (
    <>
      <HeaderMenu name="Maquininhas" navigation={navigation} />
      <DefaultScreen>
        <S.Header>
          <Text variant="header">Escolha uma opção</Text>
          <Text variant="secondary">
            Descubra a melhor opção para o seu negócio.
          </Text>
        </S.Header>
        {isLoading ? (
          <ActivityIndicator color={'#222'} />
        ) : (
          <FlatList
            data={products}
            renderItem={({item}) => (
              <ListItem
                testID="product-item"
                title={item.name}
                image={item.image}
                description={item.description}
                onPress={() =>
                  navigation.navigate('CardReaderDetail', {productId: item.id})
                }
              />
            )}
            scrollEnabled={false}
          />
        )}
      </DefaultScreen>
    </>
  );
}
