import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import { ArrowLeft, ArrowClockwise, EmojiDizzy } from 'react-bootstrap-icons';

import Button from '../../components/Button';
import Flex from '../../components/Flex';
import Header from '../../components/Header';
import Padded from '../../components/Padded';
import PageContainer from '../../components/PageContainer';
import ConversationsDetailsView from '../../containers/ConversationsDetailsView';
import ConversationsListView from '../../containers/ConversationsListView';
import useConversationsContext from '../../hooks/useConversationsContext';
``;
import { getBackButtonClick } from './utils';
import { BackButton, Container, LeftPanel, RightPanel } from './styles';

const ConversationsPage = () => {
  const { hasConversationsError, onFetchConversations } =
    useConversationsContext();
  const [isListHidden, setIsListHidden] = useState(false);

  return (
    <>
      <Header />
      <BackButton
        isHidden={!isListHidden}
        onClick={getBackButtonClick({
          setIsListHidden,
        })}
      >
        <ArrowLeft size={30} color='#ff6e14' />
      </BackButton>
      <PageContainer>
        <Container>
          {!hasConversationsError && (
            <>
              <LeftPanel isHidden={isListHidden}>
                <ConversationsListView setIsListHidden={setIsListHidden} />
              </LeftPanel>
              <RightPanel>
                <ConversationsDetailsView />
              </RightPanel>
            </>
          )}
          {hasConversationsError && (
            <>
              <Padded right left top>
                <Alert color='danger'>
                  <Flex alignItems='center'>
                    <Padded right>
                      <EmojiDizzy size={30} color='#842029' />
                    </Padded>
                    <br />
                    <span>Sorry! Can't load data… Please retry.</span>
                  </Flex>
                </Alert>
              </Padded>
              <Button onClick={onFetchConversations}>
                <ArrowClockwise size={24} color='#ff6e14' />
                <span>Retry</span>
              </Button>
            </>
          )}
        </Container>
      </PageContainer>
    </>
  );
};

export default ConversationsPage;
