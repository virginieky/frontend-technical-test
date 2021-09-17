import sortConversations from '../sortConversations';

describe('utils', () => {
  describe('sortConversations', () => {
    it('should sorted conversations by last message timestamp', () => {
      const conversations = [
        {
          "id": 1,
          "recipientId": 2,
          "recipientNickname": "Jeremie",
          "senderId": 1,
          "senderNickname": "Thibaut",
          "lastMessageTimestamp": 1625637849
        },
        {
          "id": 2,
          "recipientId": 3,
          "recipientNickname": "Patrick",
          "senderId": 1,
          "senderNickname": "Thibaut",
          "lastMessageTimestamp": 1620284667
        },
        {
          "id": 3,
          "recipientId": 1,
          "recipientNickname": "Thibaut",
          "senderId": 4,
          "senderNickname": "Elodie",
          "lastMessageTimestamp": 1625648667
        },
      ]

      const expected = [
        {
          "id": 3,
          "recipientId": 1,
          "recipientNickname": "Thibaut",
          "senderId": 4,
          "senderNickname": "Elodie",
          "lastMessageTimestamp": 1625648667
        },
        {
          "id": 1,
          "recipientId": 2,
          "recipientNickname": "Jeremie",
          "senderId": 1,
          "senderNickname": "Thibaut",
          "lastMessageTimestamp": 1625637849
        },
        {
          "id": 2,
          "recipientId": 3,
          "recipientNickname": "Patrick",
          "senderId": 1,
          "senderNickname": "Thibaut",
          "lastMessageTimestamp": 1620284667
        },
      ]
      
      expect(sortConversations(conversations)).toEqual(expected);
    });
  });
});
