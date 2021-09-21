import React from 'react';
import { render } from '@testing-library/react';
import Button from '../index';

describe('Button', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Button />);

    expect(asFragment()).toMatchSnapshot();
  });
});
