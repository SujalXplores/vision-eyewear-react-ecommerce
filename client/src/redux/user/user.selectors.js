import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectSignUpErrorMessage = createSelector(
  [selectUser],
  (user) => user.signUpError
);

export const selectSignInErrorMessage = createSelector(
  [selectUser],
  (user) => user.signInError
);
