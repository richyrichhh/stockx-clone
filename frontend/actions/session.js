import * as SessionUtil from '../utils/api-session-util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const createUser = formUser => dispatch =>
  SessionUtil.register(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
  )
);

export const checkLogin = () => dispatch =>
  SessionUtil.check().then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch =>
  SessionUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), err => (
      dispatch(receiveSessionErrors(err.responseJSON))
  )
);

export const logout = () => dispatch =>
  SessionUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));


