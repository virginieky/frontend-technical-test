import React from 'react';
import PropTypes from 'prop-types';

import { sortConversations } from '../../utils';
import ListCell from '../ListCell';
import Wrapper from './Wrapper';

const List = ({ conversations, onCellClick }) => {
  const sortedConversations = sortConversations(conversations);

  return (
    <Wrapper>
      {sortedConversations.map((conversation) => {
        const {
          id,
          senderId,
          senderNickname,
          recipientId,
          recipientNickname,
          lastMessageTimestamp,
        } = conversation;

        return <ListCell key={id} {...conversation} onClick={onCellClick} />;
      })}
    </Wrapper>
  );
};

List.defaultProps = {
  conversations: [],
  onCellClick: () => {},
};

List.propTypes = {
  conversations: PropTypes.array,
  onCellClick: PropTypes.func,
};

export default List;
