import produce from 'immer';

const initialState = {
  conversations: [],
  hasError: false,
};

const reducer = (state, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case 'GET_DATA_SUCCEEDED': {
        draftState.conversations = action.conversations;
        draftState.hasError = false;
        break;
      }
      case 'SET_ERROR': {
        draftState.hasError = true;
        break;
      }
      default:
        return draftState;
    }
  });

export default reducer;
export { initialState };
