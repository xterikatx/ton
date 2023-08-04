import React, {useState} from 'react';
import {FlatList, ListRenderItem, TouchableOpacity} from 'react-native';
import * as S from './styles';

interface Props {
  images: string[];
}

interface RenderItemProps {
  item: string;
  index: number;
}

const ImageGallery = ({images}: Props) => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const renderImage: ListRenderItem<string> = ({
    item,
    index,
  }: RenderItemProps) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setActiveImage(item);
          setActiveIndex(index);
        }}>
        <S.ThumbnailContainer active={index === activeIndex}>
          <S.ThumbnailImage
            source={{uri: item}}
            resizeMode="contain"
            testID={`image-${index}`}
          />
        </S.ThumbnailContainer>
      </TouchableOpacity>
    );
  };

  return (
    <S.Container>
      <S.ActiveImage
        source={{uri: activeImage}}
        resizeMode="contain"
        testID="active-image"
      />
      <FlatList
        data={images}
        horizontal
        renderItem={renderImage}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
    </S.Container>
  );
};

export default ImageGallery;
