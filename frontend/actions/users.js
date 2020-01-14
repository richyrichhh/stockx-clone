import * as UsersUtil from '../utils/api-users-util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const DELETE_USER = 'DELETE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS'

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const deleteUser = userId => ({
  type: DELETE_USER,
  userId
});

const receiveUserErrors = errors => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const fetchUser = id => dispatch => 
  UsersUtil.fetchUser(id).then(user => dispatch(receiveUser(user)));

export const updateUser = formUser => dispatch =>
  UsersUtil.updateUser(formUser)
    .then(user => dispatch(receiveUser(user)), err => (
      dispatch(receiveUserErrors(err.responseJSON))
  )
);

export const removeUser = id => dispatch =>
  UsersUtil.deleteUser(id).then(() => dispatch(deleteUser(id)));