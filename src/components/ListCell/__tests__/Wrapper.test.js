import React from 'react';
import { render } from '@testing-library/react';
import Wrapper from '../Wrapper';

describe('components | ListCell | Wrapper', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Wrapper />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match the snapshot with isSelected props', () => {
    const { asFragment } = render(<Wrapper isSelected />);

    expect(asFragment()).toMatchSnapshot();
  });
});
