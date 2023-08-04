import React, {useState} from 'react';
import DefaultScreen from '../../components/DefaultScreen';
import ImageGallery from '../../components/ImageGallery';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../routes';
import api from '../../services/api';
import {useQuery} from '@tanstack/react-query';
import {ActivityIndicator, FlatList} from 'react-native';
import IconLabel from '../../components/IconLabel';
import * as S from './styles';
import HeaderMenu from '../../components/HeaderMenu ';
import InfoModal from '../../components/InfoModal';

export default function CardReaderDetail() {
  const route = useRoute<RouteProp<RootStackParamList, 'CardReaderDetail'>>();
  const {productId} = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const fetchProductDetail = (id: string) =>
    api.get(`/product/${id}`).then(response => response.data);

  const {data: product, isLoading} = useQuery(['product', productId], () =>
    fetchProductDetail(productId),
  );

  return (
    <>
      <HeaderMenu
        name={product?.name}
        onPressInfo={() => setModalVisible(true)}
      />
      <DefaultScreen>
        {isLoading && !product ? (
          <ActivityIndicator color={'#222'} testID="ActivityIndicator" />
        ) : (
          <>
            <S.ImageGalleryContainer>
              <ImageGallery images={product?.images || []} />
            </S.ImageGalleryContainer>
            <FlatList
              scrollEnabled={false}
              data={product?.characteristics}
              renderItem={({item}) => (
                <IconLabel label={item?.description} icon={item?.icon} />
              )}
            />
          </>
        )}

        <InfoModal
          text="Receba 100% de Cashback da sua 1ª maquininha ao atingir R$ 10 mil em vendas."
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </DefaultScreen>
    </>
  );
}
