import React from 'react';
import { render } from '@testing-library/react';
import Padded from '../index';

describe('components | Padded', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Padded />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match the snapshot with attributes', () => {
    const { asFragment } = render(<Padded bottom left right small top />);

    expect(asFragment()).toMatchSnapshot();
  });
});
