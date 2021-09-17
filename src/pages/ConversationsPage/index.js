import React from 'react';
import { Alert } from 'reactstrap';

import Button from '../../components/Button';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import ConversationsListView from '../../containers/ConversationsListView';
import useConversationsContext from '../../hooks/useConversationsContext';

const ConversationsPage = () => {
  const {
    hasError,
  } = useConversationsContext();

  return (
    <>
      <Header />
      <PageContainer>
        Welcome

        {!hasError && (
          <ConversationsListView />
        )}
        {hasError && (
          <>
            <Alert color="danger">
              Sorry! Can't load data… Please retry.
            </Alert>
            <Button>Retry</Button>
          </>
        )}
      </PageContainer>
    </>
  );
};

export default ConversationsPage;
