import moment from 'moment';
import { request } from '../../utils';

export const getConversationsFetch =
  ({ fetchConversations, id, isMounted, dispatch }) =>
  () => {
    if (id) {
      fetchConversations({ id, isMounted, dispatch });
    }
  };

export const getMessagesFetch =
  ({ fetchMessages, id, isMounted, dispatch }) =>
  () => {
    if (id) {
      fetchMessages({ id, isMounted, dispatch });
    }
  };

export const fetchConversations = async ({ id, isMounted, dispatch }) => {
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

export const fetchMessages = async ({ id, isMounted, dispatch }) => {
  const apiUrl = process.env.apiUrl;
  const requestURL = `${apiUrl}/messages/${id}`;

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

export const createMessage =
  ({ authorId, conversationId, isMounted, dispatch, fetchMessages }) =>
  async ({ message }) => {
    const apiUrl = process.env.apiUrl;
    const requestURL = `${apiUrl}/messages/${conversationId}`;
    const { text, timestamp } = message;
    const date = moment(timestamp).unix();

    const body = {
      body: text,
      timestamp: date,
      authorId,
      conversationId,
    };

    try {
      const message = await request(requestURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (isMounted) {
        fetchMessages({ id: conversationId, isMounted, dispatch });
      }
    } catch (err) {
      if (isMounted) {
        dispatch({ type: 'CREATE_MESSAGE_ERROR' });
      }
    }
  };

export const createConversation =
  ({ user: { id, nickname }, isMounted, dispatch }) =>
  async (recipient) => {
    const apiUrl = process.env.apiUrl;
    const requestURL = `${apiUrl}/conversations/${id}`;

    const timestamp = new Date().getTime();
    const body = {
      ...recipient,
      senderId: id,
      senderNickname: nickname,
      lastMessageTimestamp: timestamp,
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
        // The watcher does not work for the new conversations so I mocked the new entry by updating the store
        // The new entry will disappear on refresh so please restart the json-server to retrieve the changes
        dispatch({
          type: 'SET_NEW_CONVERSATION',
          conversation: { ...body, id: conversation.id },
        });

        getConversationSelect({ dispatch })(conversation.id);
      }
    } catch (err) {
      if (isMounted) {
        dispatch({ type: 'SET_CONVERSATION_ERROR' });
      }
    }
  };

export const getConversationSelect =
  ({ dispatch }) =>
  (id) => {
    dispatch({
      type: 'SET_SELECTED_CONVERSATION',
      id,
    });
  };
