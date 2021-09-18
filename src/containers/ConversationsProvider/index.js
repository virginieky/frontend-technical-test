import React, { useReducer, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import useIsMounted from '../../hooks/useIsMounted';
import { request } from '../../utils';

import ConversationsContext from '../../contexts/ConversationsContext';
import reducer, { initialState } from './reducer';

const ConversationsProvider = ({ children }) => {
  const isMounted = useIsMounted();
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    fetchConversations();
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      fetchMessages();
    }
  }, [selectedConversation]);

  const fetchConversations = async () => {
    const apiUrl = process.env.apiUrl;
    const requestURL = `${apiUrl}/conversations/1`;

    try {
      const conversations = await request(requestURL, { method: 'GET' });

      if (isMounted) {
        dispatch({
          type: 'GET_CONVERSATIONS_SUCCEEDED',
          conversations,
        });
      }
    } catch (err) {
      if (isMounted) {
        dispatch({ type: 'SET_CONVERSATIONS_ERROR' });
      }
    }
  };

  const fetchMessages = async () => {
    const apiUrl = process.env.apiUrl;
    const requestURL = `${apiUrl}/messages/${selectedConversation}`;

    try {
      const messages = await request(requestURL, { method: 'GET' });

      if (isMounted) {
        dispatch({
          type: 'GET_MESSAGES_SUCCEEDED',
          messages,
        });
      }
    } catch (err) {
      if (isMounted) {
        dispatch({ type: 'SET_MESSAGES_ERROR' });
      }
    }
  };

  const onSelectedConversationChange = (id) => {
    setSelectedConversation(id);
  };

  return (
    <ConversationsContext.Provider
      value={{ ...reducerState, onSelectedConversationChange }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};

ConversationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConversationsProvider;
