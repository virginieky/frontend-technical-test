import React from 'react';
import { render } from '@testing-library/react';
import Text from '../index';

describe('components | Text', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Text />);

    expect(asFragment()).toMatchSnapshot();
  });
});
