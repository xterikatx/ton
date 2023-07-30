import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ListItem from './index';

describe('ListItem', () => {
  it('should render title, description and image correctly', () => {
    const onPress = jest.fn();
    const {getByText, getByTestId} = render(
      <ListItem
        title="Test Title"
        description="Test Description"
        image="https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home.jpg"
        onPress={onPress}
      />,
    );

    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Description')).toBeTruthy();
    expect(getByTestId('list-item-image').props.source.uri).toEqual(
      'https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home.jpg',
    );
  });

  it('should call onPress when pressed', () => {
    const onPress = jest.fn();
    const {getByText} = render(
      <ListItem
        title="Test Title"
        description="Test Description"
        image="https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home.jpg"
        onPress={onPress}
      />,
    );

    fireEvent.press(getByText('Test Title'));
    expect(onPress).toHaveBeenCalled();
  });
});
