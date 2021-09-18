import React from 'react';
import PropTypes from 'prop-types';

import { sortConversations } from '../../utils';
import ListCell from '../ListCell';
import Wrapper from './Wrapper';

const List = ({ conversations }) => {
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

        return <ListCell key={id} {...conversation} />;
      })}
    </Wrapper>
  );
};

List.defaultProps = {
  conversations: [],
};

List.propTypes = {
  conversations: PropTypes.array,
};

export default List;
