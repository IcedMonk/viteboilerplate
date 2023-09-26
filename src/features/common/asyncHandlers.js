export const createAsyncHandlers = (
  builder,
  asyncThunk,
  property,
  loadingProperty,
  errorCode
) => {
  builder.addCase(asyncThunk.pending, (state) => {
    state.loading[loadingProperty] = true;
  });
  builder.addCase(asyncThunk.fulfilled, (state, action) => {
    state.loading[loadingProperty] = false;
    state[property] = action.payload;
    state.error = "";
    state.errorCode = "";
  });
  builder.addCase(asyncThunk.rejected, (state, action) => {
    state.loading[loadingProperty] = false;
    state[property] = null;
    state.error = action.error.message;
    state.errorCode = errorCode;
  });
};
