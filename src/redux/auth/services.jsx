export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const handlePending = (state) => {
  state.isLoading = true;
  state.error = "";
};

export const handleFulfilledRegister = (state, action) => {
  state.isLoading = false;
  state.error = "";
  state.user = action.payload.user;
  state.token = action.payload.token;
};

export const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = "";
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

