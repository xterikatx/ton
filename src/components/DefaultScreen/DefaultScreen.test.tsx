import {render} from '@testing-library/react-native';
import DefaultScreen from './index';
import React from 'react';
import {Text} from 'react-native';

describe('DefaultScreen', () => {
  it('renders children correctly', () => {
    const testId = 'child-component';
    const {getByTestId} = render(
      <DefaultScreen>
        <Text testID={testId}>Child Component</Text>
      </DefaultScreen>,
    );

    expect(getByTestId(testId)).toBeDefined();
  });
});
