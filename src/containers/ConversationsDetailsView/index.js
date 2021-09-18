import React from 'react';
import { Container } from 'reactstrap';

import useConversationsContext from '../../hooks/useConversationsContext';

const DetailsView = () => {
  const { messages } = useConversationsContext();

  return <Container>Messages</Container>;
};

export default DetailsView;
