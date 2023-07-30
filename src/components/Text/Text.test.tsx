import React from 'react';
import {render} from '@testing-library/react-native';
import Text from '.';

describe('Text', () => {
  it('should render text correctly', () => {
    const {getByText} = render(<Text>Text</Text>);

    const text = getByText('Text');
    expect(text).toBeDefined();
  });

  it('should render correctly with header variant', () => {
    const {getByText} = render(<Text variant="header">Header Text</Text>);

    const textElement = getByText('Header Text');
    expect(textElement.props.style).toMatchObject({
      fontSize: 20,
      fontWeight: 'bold',
      color: '#222',
    });
  });

  it('should render correctly with bold variant', () => {
    const {getByText} = render(<Text variant="bold">Bold Text</Text>);

    const textElement = getByText('Bold Text');
    expect(textElement.props.style).toMatchObject({
      fontSize: 18,
      fontWeight: 'bold',
      color: '#222',
    });
  });

  it('should render correctly with primary variant', () => {
    const {getByText} = render(<Text variant="primary">Primary Text</Text>);

    const textElement = getByText('Primary Text');
    expect(textElement.props.style).toMatchObject({
      fontSize: 16,
      fontWeight: 'normal',
      color: '#222',
    });
  });

  it('should render correctly with secondary variant', () => {
    const {getByText} = render(<Text variant="secondary">Secondary Text</Text>);

    const textElement = getByText('Secondary Text');
    expect(textElement.props.style).toMatchObject({
      fontSize: 16,
      fontWeight: 'normal',
      color: '#777',
    });
  });
});
