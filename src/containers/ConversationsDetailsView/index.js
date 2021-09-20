import React from 'react';
import { Container } from 'reactstrap';
import { Chat } from '@progress/kendo-react-conversational-ui';

import useConversationsContext from '../../hooks/useConversationsContext';

const DetailsView = () => {
  const { messages, onNewMessageSend } = useConversationsContext();

  const user = {
    id: 1,
  };

  const formattedMessages = messages.map((message) => {
    const { timestamp, authorId, body } = message;
    return {
      ...message,
      timestamp: new Date(timestamp * 1000),
      author: { id: authorId },
      text: body,
    };
  });

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
