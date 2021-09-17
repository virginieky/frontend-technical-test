import React from 'react';
import { Container } from 'reactstrap';

import List from '../../components/List';
import useConversationsContext from '../../hooks/useConversationsContext';

const ListView = () => {
  const {
    conversations,
  } = useConversationsContext();

  return (
    <Container>
      <List conversations={conversations} />
    </Container>
  );
};

export default ListView;
