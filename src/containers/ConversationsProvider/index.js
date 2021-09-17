import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import useIsMounted from '../../hooks/useIsMounted';
import { request } from '../../utils';

import ConversationsContext from '../../contexts/ConversationsContext'; 
import reducer, { initialState } from './reducer';

const ConversationsProvider = ({
  children,
}) => {
  const isMounted = useIsMounted();
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchConversations();
  }, []);

  const fetchConversations = async () => {
    const apiUrl = process.env.apiUrl;
    const requestURL = `${apiUrl}/conversations/1`;

    try {
      const conversations = await request(requestURL, { method: 'GET' });

      if (isMounted) {
        dispatch({
          type: 'GET_DATA_SUCCEEDED',
          conversations,
        });
      }
      
    } catch (err) {
      if (isMounted) {
        dispatch({ type: 'SET_ERROR' });
      }
    }
  };

  return (
    <ConversationsContext.Provider
      value={{ ...reducerState }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};

ConversationsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConversationsProvider;
