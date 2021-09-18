import React from 'react';
import { Container } from 'reactstrap';

import List from '../../components/List';
import useConversationsContext from '../../hooks/useConversationsContext';

const ListView = () => {
  const { conversations, onSelectedConversationChange } =
    useConversationsContext();

  return (
    <Container>
      <List
        conversations={conversations}
        onCellClick={onSelectedConversationChange}
      />
    </Container>
  );
};

export default ListView;
