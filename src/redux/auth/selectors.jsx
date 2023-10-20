export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectError = (state) => state.auth.error;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectToken = (state) => state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectAuth = (state) => {
  const isLoggedIn = selectIsLoggedIn(state);
  const user = selectUser(state);
  const error = selectError(state);
  const isLoading = selectIsLoading(state);

  return {
    isLoggedIn,
    user,
    error,
    isLoading,
  };
};
