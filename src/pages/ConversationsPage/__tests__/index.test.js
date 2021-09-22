import { screen } from '@testing-library/react';
import ConversationsPage from '../index';
import renderWithContextes from '../../../testUtils/renderWithContextes';
import { conversations, users } from '../../../templates';

describe('pages | ConversationsPage', () => {
  const usersContext = {
    user: users[0],
    users,
  };

  const conversationsContext = {
    conversations: [],
    hasConversationsError: true,
    messages: [],
  };

  it('should match the snapshot if the conversations cannot load', () => {
    renderWithContextes(
      <ConversationsPage />,
      usersContext,
      conversationsContext,
    );
    expect(
      screen.getByText(/Sorry! Can't load data… Please retry./),
    ).toBeInTheDocument();
  });

  it('should match the snapshot if the conversations can load', () => {
    renderWithContextes(<ConversationsPage />, usersContext, {
      ...conversationsContext,
      conversations,
      hasConversationsError: false,
    });
    expect(
      screen.queryByText(/Sorry! Can't load data… Please retry./),
    ).not.toBeInTheDocument();
  });
});
