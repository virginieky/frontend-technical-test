import React from 'react';
import PropTypes from 'prop-types';

import { getDisplayedDate } from '../../utils';
import Padded from '../Padded';
import Text from '../Text';
import Wrapper from './Wrapper';

const ListCell = ({
  id,
  lastMessageTimestamp,
  onClick,
  recipientId,
  recipientNickname,
  senderId,
  senderNickname,
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
  lastMessageTimestamp: null,
  onClick: () => {},
  recipientId: null,
  recipientNickname: null,
  senderId: null,
  senderNickname: null,
};

ListCell.propTypes = {
  id: PropTypes.number,
  lastMessageTimestamp: PropTypes.number,
  onClick: PropTypes.func,
  recipientId: PropTypes.number,
  recipientNickname: PropTypes.string,
  senderId: PropTypes.number,
  senderNickname: PropTypes.string,
};

export default ListCell;
