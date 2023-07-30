import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ImageGallery from '.';

describe('ImageGallery', () => {
  const images = [
    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t1-2',
    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t1-chip-2',
    'https://res.cloudinary.com/dunz5zfpt/fl_progressive/f_auto,c_limit,w_256,q_100/site-ton/maquininhas/machine-t1-2',
  ];

  it('should render correctly', () => {
    const {getByTestId, getAllByTestId} = render(
      <ImageGallery images={images} />,
    );

    expect(getByTestId('active-image').props.source.uri).toBe(images[0]);

    const imageElements = getAllByTestId(/image-/);
    expect(imageElements.length).toBe(images.length);
  });

  it('should change active image when thumbnail is clicked', () => {
    const {getByTestId, getAllByTestId} = render(
      <ImageGallery images={images} />,
    );

    fireEvent.press(getAllByTestId(/image-/)[1]);

    expect(getByTestId('active-image').props.source.uri).toBe(images[1]);
  });
});
