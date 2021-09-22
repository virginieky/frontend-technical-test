import { filterByReference, getConversationCreate } from '../utils';
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
});
