import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

describe('components | Button', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });
});
