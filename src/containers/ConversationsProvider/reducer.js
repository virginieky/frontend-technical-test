import produce from 'immer';

const initialState = {
  conversations: [],
  hasConversationsError: false,
  hasMessagesError: false,
  messages: [],
  hasConversationError: false,
};

const reducer = (state, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case 'GET_CONVERSATIONS_SUCCEEDED': {
        draftState.conversations = action.conversations;
        draftState.hasConversationsError = false;
        break;
      }
      case 'SET_CONVERSATIONS_ERROR': {
        draftState.hasConversationsError = true;
        break;
      }
      case 'GET_MESSAGES_SUCCEEDED': {
        draftState.messages = action.messages;
        draftState.hasMessagesError = false;
        break;
      }
      case 'SET_MESSAGES_ERROR': {
        draftState.hasMessagesError = true;
        break;
      }
      case 'SET_CONVERSATION_ERROR': {
        draftState.hasConversationError = true;
        break;
      }
      case 'SET_NEW_CONVERSATION': {
        draftState.conversations = [
          ...draftState.conversations,
          action.conversation,
        ];
        break;
      }
      default:
        return draftState;
    }
  });

export default reducer;
export { initialState };
