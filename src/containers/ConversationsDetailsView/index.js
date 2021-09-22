import React from 'react';
import { Container } from 'reactstrap';
import { Chat } from '@progress/kendo-react-conversational-ui';

import useConversationsContext from '../../hooks/useConversationsContext';
import useUsersContext from '../../hooks/useUsersContext';
import { getFormattedMessages } from './utils';

const DetailsView = () => {
  const { messages, onNewMessageSend } = useConversationsContext();
  const { user } = useUsersContext();
  const formattedMessages = getFormattedMessages(messages);

  return (
    <Container>
      <Chat
        user={user}
        messages={formattedMessages}
        onMessageSend={onNewMessageSend}
        placeholder={'Type a message...'}
        width={'100%'}
      />
    </Container>
  );
};

export default DetailsView;
