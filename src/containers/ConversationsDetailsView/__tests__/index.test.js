import { screen } from '@testing-library/react';
import ConversationsDetailsView from '../index';
import renderWithContextes from '../../../testUtils/renderWithContextes';
import { conversations, users } from '../../../templates';

describe('containers | ConversationsDetailsView', () => {
  const usersContext = {
    user: users[0],
    users,
  };

  const conversationsContext = {
    conversations,
    hasConversationsError: false,
    messages: [],
    selectedConversation: null,
  };

  it('should match the snapshot if the selectedConversation is undefined', () => {
    renderWithContextes(
      <ConversationsDetailsView />,
      usersContext,
      conversationsContext,
    );
    expect(
      screen.getByText(/Please select a conversation to start to chat.../),
    ).toBeInTheDocument();
  });

  it('should match the snapshot if the selectedConversation exists', () => {
    renderWithContextes(<ConversationsDetailsView />, usersContext, {
      ...conversationsContext,
      selectedConversation: 1,
    });
    expect(
      screen.queryByText(/Please select a conversation to start to chat.../),
    ).not.toBeInTheDocument();
  });
});
