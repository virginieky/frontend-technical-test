import React from 'react';
import { Container } from 'reactstrap';

import Modal from '../../components/Modal';
import List from '../../components/List';
import useConversationsContext from '../../hooks/useConversationsContext';
import useUsersContext from '../../hooks/useUsersContext';
import { filterByReference, getConversationCreate } from './utils';

const ListView = () => {
  const { conversations, onSelectedConversationChange, onConversationCreate } =
    useConversationsContext();
  const { users } = useUsersContext();

  const filteredUsersByRecipient = filterByReference(
    users,
    conversations,
    'recipientId',
  );
  const filteredUsersBySender = filterByReference(
    filteredUsersByRecipient,
    conversations,
    'senderId',
  );

  return (
    <Container>
      <Modal
        onCreate={getConversationCreate({
          onConversationCreate,
        })}
        options={filteredUsersBySender}
      />
      <List
        conversations={conversations}
        onCellClick={onSelectedConversationChange}
      />
    </Container>
  );
};

export default ListView;
