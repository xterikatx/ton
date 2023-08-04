import React from 'react';
import {render} from '@testing-library/react-native';
import IconLabel from '.';

describe('IconLabel component', () => {
  it('should render the icon', () => {
    const {getByTestId} = render(
      <IconLabel icon="abacus" label="Test Label" />,
    );
    const icon = getByTestId('icon');
    expect(icon).toBeDefined();
  });

  it('should render the label correctly', () => {
    const {getByText} = render(<IconLabel icon="abacus" label="Test Label" />);
    const label = getByText('Test Label');
    expect(label).toBeDefined();
  });
});
