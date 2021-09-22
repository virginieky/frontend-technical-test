import React from 'react';
import { render } from '@testing-library/react';
import ConversationsContext from '../contexts/ConversationsContext';
import UsersContext from '../contexts/UsersContext';

const renderWithContextes = (
  componentToRender,
  usersContext,
  conversationsContext,
) => {
  return render(
    <UsersContext.Provider value={usersContext}>
      <ConversationsContext.Provider value={conversationsContext}>
        {componentToRender}
      </ConversationsContext.Provider>
    </UsersContext.Provider>,
  );
};

export default renderWithContextes;
