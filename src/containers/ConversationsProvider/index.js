import React, { useReducer, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import ConversationsContext from '../../contexts/ConversationsContext';
import useIsMounted from '../../hooks/useIsMounted';
import useUsersContext from '../../hooks/useUsersContext';
import { request } from '../../utils';
import reducer, { initialState } from './reducer';

const ConversationsProvider = ({ children }) => {
  const isMounted = useIsMounted();
  const {
    user: { id, nickname },
  } = useUsersContext();
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    if (id) {
      fetchConversations();
    }
  }, [id]);

  useEffect(() => {
    if (selectedConversation) {
      fetchMessages();
    }
  }, [selectedConversation]);

  const fetchConversations = async () => {
    const apiUrl = process.env.apiUrl;
    const requestURL = `${apiUrl}/conversations/${id}`;

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

  const createMessage = async (
    message,
    conversationId = selectedConversation,
  ) => {
    const apiUrl = process.env.apiUrl;
    const requestURL = `${apiUrl}/messages/${conversationId}`;
    const { text, timestamp } = message;
    const date = moment(timestamp).unix();

    const body = {
      body: text,
      timestamp: date,
      authorId: 1,
      conversationId,
    };

    try {
      await request(requestURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (isMounted) {
        fetchMessages();
      }
    } catch (err) {
      if (isMounted) {
        dispatch({ type: 'CREATE_MESSAGE_ERROR' });
      }
    }
  };

  const createConversation = async (form) => {
    const apiUrl = process.env.apiUrl;
    const requestURL = `${apiUrl}/conversations/${id}`;

    const timestamp = new Date().getTime();
    const body = {
      ...form.recipient,
      senderId: id,
      senderNickname: nickname,
      lastMessageTimestamp: timestamp,
    };

    const message = {
      timestamp,
      text: form.message,
    };

    try {
      const conversation = await request(requestURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (isMounted) {
        fetchConversations();
        createMessage(message, conversation.id);

        setSelectedConversation(conversation.id);
      }
    } catch (err) {
      if (isMounted) {
        dispatch({ type: 'SET_CONVERSATION_ERROR' });
      }
    }
  };

  const onConversationCreate = (form) => {
    createConversation(form);
  };

  const onNewMessageSend = ({ message }) => {
    createMessage(message);
  };

  const onSelectedConversationChange = (id) => {
    setSelectedConversation(id);
  };

  return (
    <ConversationsContext.Provider
      value={{
        ...reducerState,
        onConversationCreate,
        onSelectedConversationChange,
        onNewMessageSend,
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
