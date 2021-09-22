import reducer, { initialState } from '../reducer';
import { conversations, messages } from '../../../templates';

describe('containers | ConversationsProvider | reducer', () => {
  describe('GET_CONVERSATIONS_SUCCEEDED', () => {
    it('should update conversations and set hasConversationsError to false', () => {
      const state = initialState;
      const action = {
        type: 'GET_CONVERSATIONS_SUCCEEDED',
        conversations,
      };

      const expected = {
        ...initialState,
        conversations,
        hasConversationsError: false,
      };

      expect(reducer(state, action)).toEqual(expected);
    });
  });

  describe('SET_CONVERSATIONS_ERROR', () => {
    it('should set hasConversationsError to true', () => {
      const state = initialState;
      const action = {
        type: 'SET_CONVERSATIONS_ERROR',
      };

      const expected = {
        ...initialState,
        hasConversationsError: true,
      };

      expect(reducer(state, action)).toEqual(expected);
    });
  });

  describe('GET_MESSAGES_SUCCEEDED', () => {
    it('should update messages and set hasMessagesError to false', () => {
      const state = initialState;
      const action = {
        type: 'GET_MESSAGES_SUCCEEDED',
        messages,
      };

      const expected = {
        ...initialState,
        messages,
        hasMessagesError: false,
      };

      expect(reducer(state, action)).toEqual(expected);
    });
  });

  describe('SET_MESSAGES_ERROR', () => {
    it('should set hasMessagesError to true', () => {
      const state = initialState;
      const action = {
        type: 'SET_MESSAGES_ERROR',
      };

      const expected = {
        ...initialState,
        hasMessagesError: true,
      };

      expect(reducer(state, action)).toEqual(expected);
    });
  });

  describe('SET_CONVERSATION_ERROR', () => {
    it('should set hasConversationError to true', () => {
      const state = initialState;
      const action = {
        type: 'SET_CONVERSATION_ERROR',
      };

      const expected = {
        ...initialState,
        hasConversationError: true,
      };

      expect(reducer(state, action)).toEqual(expected);
    });
  });

  describe('SET_NEW_CONVERSATION', () => {
    it('should add new item to conversations', () => {
      const state = initialState;
      const action = {
        type: 'SET_NEW_CONVERSATION',
        conversation: conversations[0],
      };

      const expected = {
        ...initialState,
        conversations: [conversations[0]],
      };

      expect(reducer(state, action)).toEqual(expected);
    });
  });

  describe('default', () => {
    it('should return actual draft if no type is set', () => {
      const state = initialState;
      const action = {};

      const expected = {
        ...initialState,
      };

      expect(reducer(state, action)).toEqual(expected);
    });
  });
});
