export const CLEAR_ERRORS = "CLEAR_ERRORS";

const clearErrors = () => ({
  type: CLEAR_ERRORS
});

const doNothing = new Promise(function (resolve) {
  resolve();
});

export const resetErrors = () => dispatch => dispatch(clearErrors());