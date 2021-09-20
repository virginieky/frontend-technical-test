import produce from 'immer';

const initialState = {
  users: [],
  user: {},
  hasUserError: false,
  hasUsersError: false,
};

const reducer = (state, action) =>
  produce(state, (draftState) => {
    switch (action.type) {
      case 'GET_USERS_SUCCEEDED': {
        draftState.users = action.users;
        draftState.hasUsersError = false;
        break;
      }
      case 'SET_USERS_ERROR': {
        draftState.hasUsersError = true;
        break;
      }
      case 'GET_USER_SUCCEEDED': {
        draftState.user = action.user;
        draftState.hasUserError = false;
        break;
      }
      case 'SET_USER_ERROR': {
        draftState.hasUserError = true;
        break;
      }
      default:
        return draftState;
    }
  });

export default reducer;
export { initialState };
