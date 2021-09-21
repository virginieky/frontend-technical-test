import React from 'react';
import { render } from '@testing-library/react';
import UsersContext from '../contexts/UsersContext';

const renderWithUsersContext = (componentToRender, context) => {
  return render(
    <UsersContext.Provider value={context}>
      {componentToRender}
    </UsersContext.Provider>,
  );
};

export default renderWithUsersContext;
