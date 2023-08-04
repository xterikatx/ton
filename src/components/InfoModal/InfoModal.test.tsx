import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import InfoModal from '.';

describe('InfoModal', () => {
  it('renders correctly when visible', () => {
    const {getByText} = render(
      <InfoModal visible={true} onClose={() => {}} text="Test Text" />,
    );
    expect(getByText('Test Text')).toBeTruthy();
  });

  it('does not render when not visible', () => {
    const {queryByText} = render(
      <InfoModal visible={false} onClose={() => {}} text="Test Text" />,
    );
    expect(queryByText('Test Text')).toBeNull();
  });

  it('calls onClose when close button is pressed', () => {
    const onClose = jest.fn();
    const {getByTestId} = render(
      <InfoModal visible={true} onClose={onClose} text="Test Text" />,
    );

    fireEvent.press(getByTestId('close-button'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
