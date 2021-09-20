import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import useIsMounted from '../../hooks/useIsMounted';
import UsersContext from '../../contexts/UsersContext';
import { request } from '../../utils';
import reducer, { initialState } from './reducer';

const UsersProvider = ({ children }) => {
  const isMounted = useIsMounted();
  const [reducerState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const apiUrl = process.env.apiUrl;
    const requestURL = `${apiUrl}/users`;

    try {
      const users = await request(requestURL, { method: 'GET' });

      if (isMounted) {
        dispatch({
          type: 'GET_USERS_SUCCEEDED',
          users,
        });
      }
    } catch (err) {
      if (isMounted) {
        dispatch({ type: 'SET_USERS_ERROR' });
      }
    }
  };

  const fetchUser = async (userId) => {
    const apiUrl = process.env.apiUrl;
    const requestURL = `${apiUrl}/user/${userId}`;

    try {
      const users = await request(requestURL, { method: 'GET' });

      if (isMounted) {
        dispatch({
          type: 'GET_USER_SUCCEEDED',
          user: users[0],
        });
      }
    } catch (err) {
      if (isMounted) {
        dispatch({ type: 'SET_USER_ERROR' });
      }
    }
  };

  const setCurrentUser = (userId) => {
    fetchUser(userId);
  };

  return (
    <UsersContext.Provider value={{ ...reducerState, setCurrentUser }}>
      {children}
    </UsersContext.Provider>
  );
};

UsersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UsersProvider;
