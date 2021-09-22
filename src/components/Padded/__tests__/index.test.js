import React from 'react';
import { render } from '@testing-library/react';
import Padded from '../index';

describe('components | Padded', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Padded />);

    expect(asFragment()).toMatchSnapshot();
  });
});
