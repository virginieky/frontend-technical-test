import React from 'react';
import { render } from '@testing-library/react';

import { conversations } from '../../../templates';
import List from '../index';

describe('components | List', () => {
  const defaultProps = {
    conversations,
    onCellClick: jest.fn(),
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<List {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should use onCellClick defaultProps', () => {
    const {
      defaultProps: { onCellClick },
    } = List;

    expect(onCellClick).toBeDefined();
    expect(onCellClick({ preventDefault: jest.fn() })).toBe(undefined);
  });
});
