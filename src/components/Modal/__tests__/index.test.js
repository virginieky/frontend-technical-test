import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { users } from '../../../templates';
import Modal from '../index';

describe('components | Modal', () => {
  const defaultProps = {
    options: users,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<Modal {...defaultProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should display the modal on new button click', async () => {
    render(<Modal {...defaultProps} />);
    const newConversationButton = screen.getByRole('button', {
      name: /New conversation/i,
    });
    await userEvent.click(newConversationButton);

    expect(screen.getByText('Create new conversation')).toBeInTheDocument();
  });

  it('should use onCreate defaultProps', () => {
    const {
      defaultProps: { onCreate },
    } = Modal;

    expect(onCreate).toBeDefined();
    expect(onCreate({ preventDefault: jest.fn() })).toBe(undefined);
  });
});
