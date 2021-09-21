import {
  getCreateButtonClick,
  getModalToggle,
  getRecipientChange,
} from '../utils';
import { users } from '../../../templates';

describe('getCreateButtonClick', () => {
  const getCreateButtonClickProps = {
    options: users,
    recipient: '2',
    onCreate: jest.fn(),
    toggle: jest.fn(),
  };

  it('should call onCreate with the right user id and nickname', () => {
    getCreateButtonClick(getCreateButtonClickProps)();

    const recipient = {
      recipientId: 2,
      recipientNickname: 'Jeremie',
    };
    expect(getCreateButtonClickProps.onCreate).toHaveBeenCalledWith(recipient);
  });
});

describe('getModalToggle', () => {
  let newState;
  const prevState = false;
  const getModalToggleProps = {
    setModal: jest.fn((callback) => {
      newState = callback(prevState);
    }),
  };

  it('should call setModal with the right value', () => {
    getModalToggle(getModalToggleProps)();

    expect(getModalToggleProps.setModal).toHaveBeenCalled();
    expect(newState).toEqual(true);
  });
});

describe('getRecipientChange', () => {
  const getRecipientChangeProps = {
    setRecipient: jest.fn(),
  };

  it('should call setRecipient with the right value', () => {
    getRecipientChange(getRecipientChangeProps)({ target: { value: 2 } });

    expect(getRecipientChangeProps.setRecipient).toHaveBeenCalledWith(2);
  });
});
