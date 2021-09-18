import React from 'react';
import PropTypes from 'prop-types';

import { getDisplayedDate } from '../../utils';
import Padded from '../Padded';
import Text from '../Text';
import Wrapper from './Wrapper';

const ListCell = ({
  id,
  senderId,
  senderNickname,
  recipientId,
  recipientNickname,
  lastMessageTimestamp,
  onClick,
}) => {
  const handleClick = () => onClick(id);

  return (
    <Wrapper onClick={handleClick}>
      <Padded right bottom left>
        <Text fontSize='16px' ellipsis>
          {id} {recipientId} {recipientNickname} - {senderId} {senderNickname}
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
  onClick: () => {},
  senderId: null,
  senderNickname: null,
  recipientId: null,
  recipientNickname: null,
  lastMessageTimestamp: null,
};

ListCell.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func,
  senderId: PropTypes.number,
  senderNickname: PropTypes.string,
  recipientId: PropTypes.number,
  recipientNickname: PropTypes.string,
  lastMessageTimestamp: PropTypes.number,
};

export default ListCell;
