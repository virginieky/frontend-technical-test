import React from 'react';
import { Alert, Col, Row } from 'reactstrap';

import Button from '../../components/Button';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import ConversationsDetailsView from '../../containers/ConversationsDetailsView';
import ConversationsListView from '../../containers/ConversationsListView';
import useConversationsContext from '../../hooks/useConversationsContext';

const ConversationsPage = () => {
  const { hasError } = useConversationsContext();

  return (
    <>
      <Header />
      <PageContainer>
        {!hasError && (
          <Row>
            <Col xs='12' lg='4'>
              <ConversationsListView />
            </Col>
            <Col xs='12' lg='8'>
              <ConversationsDetailsView />
            </Col>
          </Row>
        )}
        Welcome
        {hasError && (
          <>
            <Alert color='danger'>Sorry! Can't load data… Please retry.</Alert>
            <Button>Retry</Button>
          </>
        )}
      </PageContainer>
    </>
  );
};

export default ConversationsPage;
