import {
  filterByReference,
  getConversationCreate,
  getCellClick,
} from '../utils';
import { conversations, users } from '../../../templates';

describe('containers | ConversationsListView | utils', () => {
  describe('filterByReference', () => {
    it('should return a filtered array', () => {
      const expected = [
        {
          id: 2,
          nickname: 'Jeremie',
          token: 'xxxx',
        },
        {
          id: 3,
          nickname: 'Patrick',
          token: 'xxxx',
        },
        {
          id: 5,
          nickname: 'Maeko',
          token: 'xxxx',
        },
        {
          id: 6,
          nickname: 'Duarte',
          token: 'xxxx',
        },
      ];

      expect(filterByReference(users, conversations, 'senderId')).toEqual(
        expected,
      );
    });
  });

  describe('getConversationCreate', () => {
    const getConversationCreateProps = {
      onConversationCreate: jest.fn(),
    };

    it('should call onConversationCreate with the right recipient id', () => {
      getConversationCreate(getConversationCreateProps)(3);

      expect(
        getConversationCreateProps.onConversationCreate,
      ).toHaveBeenCalledWith(3);
    });
  });

  describe('getCellClick', () => {
    const getCellClickProps = {
      onSelectedConversationChange: jest.fn(),
      setIsListHidden: jest.fn(),
    };

    it('should call onSelectedConversationChange with the right conversation id', () => {
      getCellClick(getCellClickProps)(3);

      expect(
        getCellClickProps.onSelectedConversationChange,
      ).toHaveBeenCalledWith(3);
    });

    it('should call setIsListHidden with the true value', () => {
      getCellClick(getCellClickProps)(3);

      expect(getCellClickProps.setIsListHidden).toHaveBeenCalledWith(true);
    });
  });
});
