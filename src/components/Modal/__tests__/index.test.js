import React from 'react';
import { render } from '@testing-library/react';

import { users } from '../../../templates';
import Modal from '../index';

describe('Modal', () => {
  const defaultProps = {
    options: users,
  };

  it('should match the snapshot with options', () => {
    const { asFragment } = render(<Modal {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should match the snapshot without options', () => {
    const { asFragment } = render(<Modal />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should use onCreate defaultProps', () => {
    const {
      defaultProps: { onCreate },
    } = Modal;

    expect(onCreate).toBeDefined();
    expect(onCreate({ preventDefault: jest.fn() })).toBe(undefined);
  });
});
