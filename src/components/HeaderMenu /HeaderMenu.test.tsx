import React from 'react';
import {render} from '@testing-library/react-native';
import HeaderMenu from '.';

describe('HeaderMenu Component', () => {
  const navigationMock = {
    openDrawer: jest.fn(),
  };
  it('should render menu icon', () => {
    const {getByTestId} = render(
      <HeaderMenu name="Test Name" navigation={navigationMock} />,
    );
    expect(getByTestId('menu-icon')).toBeTruthy();
  });

  it('should render the progress question icon', () => {
    const {getByTestId} = render(
      <HeaderMenu name="Test Name" navigation={navigationMock} />,
    );
    const progressQuestionIcon = getByTestId('question-icon');
    expect(progressQuestionIcon).toBeDefined();
  });

  it('should render the name prop', () => {
    const testName = 'Test Name';
    const {getByText} = render(
      <HeaderMenu name={testName} navigation={navigationMock} />,
    );
    const nameElement = getByText(testName);
    expect(nameElement).toBeDefined();
  });
});
