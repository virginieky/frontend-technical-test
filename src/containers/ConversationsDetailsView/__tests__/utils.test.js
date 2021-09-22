import { getFormattedMessages } from '../utils';
import { messages } from '../../../templates';

describe('containers | ConversationsDetailsView | utils', () => {
  describe('getFormattedMessages', () => {
    it('should return an array with the right keys', () => {
      const expected = [
        {
          id: 1,
          conversationId: 1,
          timestamp: new Date(1625637849 * 1000),
          author: {
            id: 1,
          },
          text: "Bonjour c'est le premier message de la première conversation",
        },
        {
          id: 2,
          conversationId: 1,
          timestamp: new Date(1625637867 * 1000),
          author: {
            id: 1,
          },
          text: "Bonjour c'est le second message de la première conversation",
        },
        {
          id: 3,
          conversationId: 1,
          timestamp: new Date(1625648667 * 1000),
          author: {
            id: 2,
          },
          text: "Bonjour c'est le troisième message de la première conversation",
        },
        {
          id: 4,
          conversationId: 2,
          timestamp: new Date(1620284667 * 1000),
          author: {
            id: 2,
          },
          text: "Bonjour c'est le premier message de la seconde conversation",
        },
      ];

      expect(getFormattedMessages(messages)).toEqual(expected);
    });

    it('should return an empty array if messages is empty', () => {
      const expected = [];

      expect(getFormattedMessages([])).toEqual(expected);
    });
  });
});
