import React from 'react';
import PropTypes from 'prop-types';

import ListCell from '../ListCell';
import Wrapper from './Wrapper';
import { sortConversations } from './utils';

const List = ({ conversations, onCellClick }) => {
  const sortedConversations = sortConversations(conversations);

  return (
    <Wrapper>
      {sortedConversations.map((conversation) => {
        const { id } = conversation;

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
