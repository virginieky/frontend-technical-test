import React from 'react';
import { render } from '@testing-library/react';
import ListCell from '../index';

describe('components | ListCell', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<ListCell />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should use onClick defaultProps', () => {
    const {
      defaultProps: { onClick },
    } = ListCell;

    expect(onClick).toBeDefined();
    expect(onClick({ preventDefault: jest.fn() })).toBe(undefined);
  });
});
