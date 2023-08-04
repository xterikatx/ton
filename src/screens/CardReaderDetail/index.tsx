import React from 'react';
import DefaultScreen from '../../components/DefaultScreen';
import ImageGallery from '../../components/ImageGallery';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../routes';
import api from '../../services/api';
import {useQuery} from '@tanstack/react-query';
import {ActivityIndicator} from 'react-native';

export default function CardReaderDetail() {
  const route = useRoute<RouteProp<RootStackParamList, 'CardReaderDetail'>>();
  const {productId} = route.params;

  const fetchProductDetail = (id: string) =>
    api.get(`/product/${id}`).then(response => response.data);

  const {data: product, isLoading} = useQuery(['product', productId], () =>
    fetchProductDetail(productId),
  );

  return (
    <DefaultScreen>
      {isLoading ? (
        <ActivityIndicator color={'#222'} />
      ) : (
        <>
          <ImageGallery images={product?.images || []} />
        </>
      )}
    </DefaultScreen>
  );
}
