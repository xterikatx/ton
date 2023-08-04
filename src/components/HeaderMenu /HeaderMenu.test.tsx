import React from 'react';
import {render} from '@testing-library/react-native';
import HeaderMenu from '.';

describe('HeaderMenu Component', () => {
  it('should render the menu icon', () => {
    const {getByTestId} = render(<HeaderMenu name="Test Name" />);
    const menuIcon = getByTestId('menu-icon');
    expect(menuIcon).toBeDefined();
  });

  it('should render the progress question icon', () => {
    const {getByTestId} = render(<HeaderMenu name="Test Name" />);
    const progressQuestionIcon = getByTestId('question-icon');
    expect(progressQuestionIcon).toBeDefined();
  });

  it('should render the name prop', () => {
    const testName = 'Test Name';
    const {getByText} = render(<HeaderMenu name={testName} />);
    const nameElement = getByText(testName);
    expect(nameElement).toBeDefined();
  });
});
