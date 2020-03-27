import * as FollowsUtil from '../utils/api-follows-util';

export const RECEIVE_FOLLOWS = 'RECEIVE_FOLLOWS';
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const DELETE_FOLLOW = 'DELETE_FOLLOW';
export const RECEIVE_FOLLOW_ERRORS = 'RECEIVE_FOLLOW_ERRORS';

const receiveFollow = order => ({
  type: RECEIVE_FOLLOW,
  order
});

const receiveFollows = orders => ({
  type: RECEIVE_FOLLOWS,
  orders
});

const deleteFollow = productId => ({
  type: DELETE_FOLLOW,
  itemId
});

const receiveFollowErrors = errors => ({
  type: RECEIVE_FOLLOW_ERRORS,
  errors
});

export const fetchFollows = (user_id) => dispatch =>
  FollowsUtil.fetchFollows(user_id).then(follows => dispatch(receiveFollows(follows)));

export const createFollow = formFollow => dispatch =>
  FollowsUtil.createFollow(formFollow).then(follow => dispatch(receiveFollow(follow)), errors => dispatch(receiveFollowErrors(errors.responseJSON)));

export const deleteFollow = id => dispatch =>
  FollowsUtil.deleteFollow(id).then(() => dispatch(deleteFollow(id)));

