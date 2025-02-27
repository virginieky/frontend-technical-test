import React from 'react';
import PropTypes from 'prop-types';

import { getDisplayedDate } from '../../utils';
import Padded from '../Padded';
import Text from '../Text';
import Wrapper from './Wrapper';
import { getCellClick } from './utils';

const ListCell = ({
  id,
  lastMessageTimestamp,
  onClick,
  recipientNickname,
  senderNickname,
  isSelected,
}) => {
  return (
    <Wrapper onClick={getCellClick({ onClick, id })} isSelected={isSelected}>
      <Padded right bottom left>
        <Text fontSize='16px' ellipsis>
          {recipientNickname} {'<->'} {senderNickname}
        </Text>
        <Padded bottom small />
        <Text fontSize='12px' ellipsis>
          Last message sent: {getDisplayedDate(lastMessageTimestamp)}
        </Text>
      </Padded>
    </Wrapper>
  );
};

ListCell.defaultProps = {
  id: null,
  isSelected: false,
  lastMessageTimestamp: null,
  onClick: () => {},
  recipientId: null,
  recipientNickname: null,
  senderId: null,
  senderNickname: null,
};

ListCell.propTypes = {
  id: PropTypes.number,
  isSelected: PropTypes.bool,
  lastMessageTimestamp: PropTypes.number,
  onClick: PropTypes.func,
  recipientId: PropTypes.number,
  recipientNickname: PropTypes.string,
  senderId: PropTypes.number,
  senderNickname: PropTypes.string,
};

export default ListCell;
