import React from 'react';
import { Chat } from '@progress/kendo-react-conversational-ui';

import Flex from '../../components/Flex';
import Text from '../../components/Text';
import useConversationsContext from '../../hooks/useConversationsContext';
import useUsersContext from '../../hooks/useUsersContext';
import { getFormattedMessages } from './utils';
import Wrapper from './Wrapper';
import Placeholder from './Placeholder';

const DetailsView = () => {
  const { messages, onNewMessageSend, selectedConversation } =
    useConversationsContext();
  const { user } = useUsersContext();
  const formattedMessages = getFormattedMessages(messages);

  return (
    <Wrapper>
      {!!selectedConversation ? (
        <Chat
          user={user}
          messages={formattedMessages}
          onMessageSend={onNewMessageSend}
          placeholder={'Type a message...'}
          width={'100%'}
        />
      ) : (
        <Placeholder>
          <Flex alignItems='center'>
            <Text fontSize='18px'>
              Please select a conversation to start to chat...
            </Text>
          </Flex>
        </Placeholder>
      )}
    </Wrapper>
  );
};

export default DetailsView;
