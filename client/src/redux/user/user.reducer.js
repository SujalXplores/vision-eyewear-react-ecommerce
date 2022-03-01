import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  signInError: null,
  signUpError: null,
  signOutError: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signInError: null,
        signUpError: null,
        signOutError: null,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        signInError: null,
        signUpError: null,
        signOutError: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        signInError: null,
        signUpError: null,
        signOutError: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        signInError: action.payload,
        signUpError: null,
        signOutError: null,
      };
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        signOutError: action.payload,
        signInError: null,
        signUpError: null,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpError: action.payload,
        signInError: null,
        signOutError: null,
      };
    default:
      return state;
  }
};

export default userReducer;
