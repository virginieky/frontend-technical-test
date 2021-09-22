import React from 'react';
import { render } from '@testing-library/react';
import Flex from '../index';

describe('components | Flex', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<Flex />);

    expect(asFragment()).toMatchSnapshot();
  });
});
