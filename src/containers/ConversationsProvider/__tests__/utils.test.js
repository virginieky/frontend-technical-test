import 'whatwg-fetch';
import {
  createConversation,
  createMessage,
  getConversationsFetch,
  getConversationSelect,
  getMessagesFetch,
  fetchConversations,
  fetchMessages,
} from '../utils';

describe('containers | ConversationsProvider | utils', () => {
  describe('getConversationsFetch', () => {
    const getConversationsFetchProps = {
      fetchConversations: jest.fn(),
    };

    it('should not call fetchConversations if id is undefined', () => {
      getConversationsFetch(getConversationsFetchProps)();

      expect(
        getConversationsFetchProps.fetchConversations,
      ).not.toHaveBeenCalled();
    });

    it('should call fetchConversations if id is defined', () => {
      getConversationsFetchProps.id = 3;
      getConversationsFetch(getConversationsFetchProps)();

      expect(getConversationsFetchProps.fetchConversations).toHaveBeenCalled();
    });
  });

  describe('getMessagesFetch', () => {
    const getMessagesFetchProps = {
      fetchMessages: jest.fn(),
    };

    it('should not call fetchMessages if selectedConversation is undefined', () => {
      getMessagesFetch(getMessagesFetchProps)();

      expect(getMessagesFetchProps.fetchMessages).not.toHaveBeenCalled();
    });

    it('should call fetchMessages if selectedConversation is defined', () => {
      getMessagesFetchProps.id = 3;
      getMessagesFetch(getMessagesFetchProps)();

      expect(getMessagesFetchProps.fetchMessages).toHaveBeenCalled();
    });
  });

  describe('fetchConversations', () => {
    const sucessResult = new Response('[]', {
      status: 200,
    });

    const failResult = new Response('', {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'Content-type': 'application/json',
      },
    });

    beforeEach(() => {
      window.fetch = jest.fn();
    });

    describe('request success - is mounted', () => {
      const fetchConversationsProps = {
        id: 1,
        dispatch: jest.fn(),
        isMounted: true,
      };

      beforeEach(() => {
        window.fetch.mockReturnValue(Promise.resolve(sucessResult));
        fetchConversations(fetchConversationsProps);
      });

      it('should call conversations succeeded dispatch if fetch succeeded and isMounted is true', () => {
        const expected = {
          type: 'GET_CONVERSATIONS_SUCCEEDED',
          conversations: [],
        };

        expect(fetchConversationsProps.dispatch).toHaveBeenCalledWith(expected);
      });
    });

    describe('request success - is not mounted', () => {
      const fetchConversationsProps = {
        id: 1,
        dispatch: jest.fn(),
        isMounted: false,
      };

      beforeEach(() => {
        window.fetch.mockReturnValue(Promise.resolve(sucessResult));
        fetchConversations(fetchConversationsProps);
      });

      it('should not call conversations succeeded dispatch if fetch succeeded and isMounted is false', () => {
        expect(fetchConversationsProps.dispatch).not.toHaveBeenCalled();
      });
    });

    describe('request fail - is mounted', () => {
      const fetchConversationsProps = {
        id: 1,
        isMounted: true,
        dispatch: jest.fn(),
      };

      beforeEach(() => {
        fetchConversations(fetchConversationsProps);
        window.fetch.mockReturnValue(Promise.resolve(failResult));
      });

      it('should call conversations error dispatch if fetch failed and isMounted is true', () => {
        const expected = {
          type: 'SET_CONVERSATIONS_ERROR',
        };

        expect(fetchConversationsProps.dispatch).toHaveBeenCalledWith(expected);
      });
    });

    describe('request fail - is not mounted', () => {
      const fetchConversationsProps = {
        id: 1,
        isMounted: false,
        dispatch: jest.fn(),
      };

      beforeEach(() => {
        fetchConversations(fetchConversationsProps);
        window.fetch.mockReturnValue(Promise.resolve(failResult));
      });

      it('should not call conversations error dispatch if fetch failed and isMounted is false', () => {
        expect(fetchConversationsProps.dispatch).not.toHaveBeenCalled();
      });
    });
  });

  describe('fetchMessages', () => {
    const sucessResult = new Response('[]', {
      status: 200,
    });

    const failResult = new Response('', {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'Content-type': 'application/json',
      },
    });

    beforeEach(() => {
      window.fetch = jest.fn();
    });

    describe('request success - is mounted', () => {
      const fetchMessagesProps = {
        id: 3,
        dispatch: jest.fn(),
        isMounted: true,
      };

      beforeEach(() => {
        window.fetch.mockReturnValue(Promise.resolve(sucessResult));
        fetchMessages(fetchMessagesProps);
      });

      it('should call messages succeeded dispatch if fetch succeeded and isMounted is true', () => {
        const expected = {
          type: 'GET_MESSAGES_SUCCEEDED',
          messages: [],
        };

        expect(fetchMessagesProps.dispatch).toHaveBeenCalledWith(expected);
      });
    });

    describe('request success - is not mounted', () => {
      const fetchMessagesProps = {
        id: 1,
        dispatch: jest.fn(),
        isMounted: false,
      };

      beforeEach(() => {
        fetchMessages(fetchMessagesProps);
        window.fetch.mockReturnValue(Promise.resolve(sucessResult));
      });

      it('should not call conversations succeeded dispatch if fetch succeeded and isMounted is false', () => {
        expect(fetchMessagesProps.dispatch).not.toHaveBeenCalled();
      });
    });

    describe('request fail - is mounted', () => {
      const fetchMessagesProps = {
        id: 1,
        isMounted: true,
        dispatch: jest.fn(),
      };

      beforeEach(() => {
        fetchMessages(fetchMessagesProps);
        window.fetch.mockReturnValue(Promise.resolve(failResult));
      });

      it('should call messages error dispatch if fetch failed and isMounted is true', () => {
        const expected = {
          type: 'SET_MESSAGES_ERROR',
        };

        expect(fetchMessagesProps.dispatch).toHaveBeenCalledWith(expected);
      });
    });

    describe('request fail - is not mounted', () => {
      const fetchMessagesProps = {
        id: 1,
        isMounted: false,
        dispatch: jest.fn(),
      };

      beforeEach(() => {
        fetchMessages(fetchMessagesProps);
        window.fetch.mockReturnValue(Promise.resolve(failResult));
      });

      it('should not call conversations error dispatch if fetch failed and isMounted is false', () => {
        expect(fetchMessagesProps.dispatch).not.toHaveBeenCalled();
      });
    });
  });

  describe('createMessage', () => {
    const sucessResult = new Response('{}', {
      status: 201,
      headers: {
        'Content-type': 'application/json',
      },
    });

    const failResult = new Response('', {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const message = {
      text: 'hello',
      timestamp: new Date(),
    };

    beforeEach(() => {
      window.fetch = jest.fn();
    });

    describe('request success - is mounted', () => {
      const createMessageProps = {
        authorId: 1,
        conversationId: 3,
        isMounted: true,
        dispatch: jest.fn(),
        fetchMessages: jest.fn(),
      };

      beforeEach(() => {
        window.fetch.mockReturnValue(Promise.resolve(sucessResult));
        createMessage(createMessageProps)({ message });
      });

      it('should call fetchMessages if fetch succeeded and isMounted is true', () => {
        expect(createMessageProps.fetchMessages).toHaveBeenCalled();
      });
    });

    describe('request success - is not mounted', () => {
      const createMessageProps = {
        authorId: 1,
        conversationId: 3,
        isMounted: false,
        dispatch: jest.fn(),
        fetchMessages: jest.fn(),
      };

      beforeEach(() => {
        window.fetch.mockReturnValue(Promise.resolve(sucessResult));
        createMessage(createMessageProps)({ message });
      });

      it('should not call conversations succeeded dispatch if fetch succeeded and isMounted is false', () => {
        expect(createMessageProps.dispatch).not.toHaveBeenCalled();
      });
    });

    describe('request fail - is mounted', () => {
      const createMessageProps = {
        authorId: 1,
        message: {
          text: 'hello',
          timestamp: new Date(),
        },
        conversationId: 3,
        isMounted: true,
        dispatch: jest.fn(),
        fetchMessages: jest.fn(),
      };

      beforeEach(() => {
        window.fetch.mockReturnValue(Promise.resolve(failResult));
        createMessage(createMessageProps)({ message });
      });

      it('should call messages error dispatch if fetch failed and isMounted is true', () => {
        const expected = {
          type: 'CREATE_MESSAGE_ERROR',
        };

        expect(createMessageProps.dispatch).toHaveBeenCalledWith(expected);
      });
    });

    describe('request fail - is not mounted', () => {
      const createMessageProps = {
        authorId: 1,
        message: {
          text: 'hello',
          timestamp: new Date(),
        },
        conversationId: 3,
        isMounted: false,
        dispatch: jest.fn(),
        fetchMessages: jest.fn(),
      };

      beforeEach(() => {
        window.fetch.mockReturnValue(Promise.resolve(failResult));
        createMessage(createMessageProps)({ message });
      });

      it('should not call conversations error dispatch if fetch failed and isMounted is false', () => {
        expect(createMessageProps.dispatch).not.toHaveBeenCalled();
      });
    });
  });

  describe('createConversation', () => {
    const sucessResult = new Response('{}', {
      status: 201,
      headers: {
        'Content-type': 'application/json',
      },
    });

    const failResult = new Response('', {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'Content-type': 'application/json',
      },
    });

    const user = {
      id: 1,
      nickname: 'Thibault',
    };

    const recipient = {
      recipientId: 3,
      recipientNickename: 'Elodie',
    };

    beforeEach(() => {
      window.fetch = jest.fn();
    });

    describe('request success - is mounted', () => {
      const createConversationProps = {
        user,
        isMounted: true,
        dispatch: jest.fn(),
        setSelectedConversation: jest.fn(),
      };

      beforeEach(() => {
        window.fetch.mockReturnValue(Promise.resolve(sucessResult));
        createConversation(createConversationProps)(recipient);
      });

      it('should call new conversation dispatch if fetch succeeded and isMounted is true', () => {
        expect(createConversationProps.dispatch).toHaveBeenCalled();
      });
    });

    describe('request success - is not mounted', () => {
      const createConversationProps = {
        user,
        isMounted: false,
        dispatch: jest.fn(),
        setSelectedConversation: jest.fn(),
      };

      beforeEach(() => {
        createConversation(createConversationProps)(recipient);
        window.fetch.mockReturnValue(Promise.resolve(sucessResult));
      });

      it('should not call new conversation succeeded dispatch if fetch succeeded and isMounted is false', () => {
        expect(createConversationProps.dispatch).not.toHaveBeenCalled();
      });
    });

    describe('request fail - is mounted', () => {
      const createConversationProps = {
        user,
        isMounted: true,
        dispatch: jest.fn(),
        setSelectedConversation: jest.fn(),
      };

      beforeEach(() => {
        createConversation(createConversationProps)(recipient);
        window.fetch.mockReturnValue(Promise.resolve(failResult));
      });

      it('should call messages error dispatch if fetch failed and isMounted is true', () => {
        const expected = {
          type: 'SET_CONVERSATION_ERROR',
        };

        expect(createConversationProps.dispatch).toHaveBeenCalledWith(expected);
      });
    });

    describe('request fail - is not mounted', () => {
      const createConversationProps = {
        user,
        isMounted: false,
        dispatch: jest.fn(),
        setSelectedConversation: jest.fn(),
      };

      beforeEach(() => {
        createConversation(createConversationProps)(recipient);
        window.fetch.mockReturnValue(Promise.resolve(failResult));
      });

      it('should not call conversations error dispatch if fetch failed and isMounted is false', () => {
        expect(createConversationProps.dispatch).not.toHaveBeenCalled();
      });
    });
  });

  describe('getConversationSelect', () => {
    const getConversationSelectProps = {
      setSelectedConversation: jest.fn(),
    };

    it('should call setSelectedConversation with the right id', () => {
      getConversationSelect(getConversationSelectProps)(3);

      expect(
        getConversationSelectProps.setSelectedConversation,
      ).toHaveBeenCalledWith(3);
    });
  });
});
