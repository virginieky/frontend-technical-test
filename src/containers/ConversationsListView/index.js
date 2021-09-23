import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../components/Modal';
import List from '../../components/List';
import useConversationsContext from '../../hooks/useConversationsContext';
import useUsersContext from '../../hooks/useUsersContext';
import {
  filterByReference,
  getConversationCreate,
  getCellClick,
} from './utils';

const ListView = ({ setIsListHidden }) => {
  const {
    conversations,
    onSelectedConversationChange,
    onConversationCreate,
    selectedConversation,
  } = useConversationsContext();
  const { users } = useUsersContext();

  const filteredUsersByRecipient = filterByReference(
    users,
    conversations,
    'recipientId',
  );
  const filteredUsersBySender = filterByReference(
    filteredUsersByRecipient,
    conversations,
    'senderId',
  );

  return (
    <div>
      <Modal
        onCreate={getConversationCreate({
          onConversationCreate,
        })}
        options={filteredUsersBySender}
      />
      <List
        conversations={conversations}
        selectedItem={selectedConversation}
        onCellClick={getCellClick({
          onSelectedConversationChange,
          setIsListHidden,
        })}
      />
    </div>
  );
};

ListView.defaultProps = {
  setIsListHidden: () => {},
};

ListView.propTypes = {
  setIsListHidden: PropTypes.func,
};

export default ListView;
