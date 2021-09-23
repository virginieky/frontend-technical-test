import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import ConversationsContext from '../../contexts/ConversationsContext';
import useIsMounted from '../../hooks/useIsMounted';
import useUsersContext from '../../hooks/useUsersContext';
import reducer, { initialState } from './reducer';
import {
  createConversation,
  createMessage,
  fetchConversations,
  fetchMessages,
  getConversationsFetch,
  getConversationSelect,
  getMessagesFetch,
} from './utils';

const ConversationsProvider = ({ children }) => {
  const isMounted = useIsMounted();
  const {
    user: { id, nickname },
  } = useUsersContext();
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  const { selectedConversation } = reducerState;

  const getConversations = () =>
    getConversationsFetch({
      fetchConversations,
      id,
      isMounted,
      dispatch,
    })();

  useEffect(() => {
    getConversations();
  }, [id]);

  useEffect(() => {
    getMessagesFetch({
      fetchMessages,
      id: selectedConversation,
      isMounted,
      dispatch,
    })();
  }, [selectedConversation]);

  return (
    <ConversationsContext.Provider
      value={{
        ...reducerState,
        onConversationCreate: createConversation({
          user: { id, nickname },
          isMounted,
          dispatch,
        }),
        onSelectedConversationChange: getConversationSelect({
          dispatch,
        }),
        onNewMessageSend: createMessage({
          authorId: id,
          conversationId: selectedConversation,
          isMounted,
          dispatch,
          fetchMessages,
        }),
        onFetchConversations: getConversations,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};

ConversationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConversationsProvider;
