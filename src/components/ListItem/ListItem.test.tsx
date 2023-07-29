import React from 'react';
import {render} from '@testing-library/react-native';
import ListItem from '../ListItem';

describe('ListItem component', () => {
  it('should render title text correctly', () => {
    const {getByText} = render(
      <ListItem title="Test Title" description="Test Description" />,
    );

    const titleElement = getByText('Test Title');
    expect(titleElement).toBeDefined();
  });

  it('should render description text correctly', () => {
    const {getByText} = render(
      <ListItem title="Test Title" description="Test Description" />,
    );

    const descriptionElement = getByText('Test Description');
    expect(descriptionElement).toBeDefined();
  });

  it('should render image when image prop is passed', () => {
    const {getByTestId} = render(
      <ListItem
        title="Test Title"
        description="Test Description"
        image="https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home.jpg"
      />,
    );

    const imageElement = getByTestId('list-item-image');
    expect(imageElement.props.source.uri).toBe(
      'https://www.w3.org/People/mimasa/test/imgformat/img/w3c_home.jpg',
    );
  });

  it('should not render image when image prop is not passed', () => {
    const {queryByTestId} = render(
      <ListItem title="Test Title" description="Test Description" />,
    );

    const imageElement = queryByTestId('list-item-image');
    expect(imageElement).toBeNull();
  });
});
