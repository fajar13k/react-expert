import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
  TOGGLE_UP_VOTE_THREAD_DETAIL: 'TOGGLE_UP_VOTE_THREAD_DETAIL',
  TOGGLE_DOWN_VOTE_THREAD_DETAIL: 'TOGGLE_DOWN_VOTE_THREAD_DETAIL',
  TOGGLE_NEUTRAL_UP_VOTE_THREAD_DETAIL: 'TOGGLE_NEUTRAL_UP_VOTE_THREAD_DETAIL',
  TOGGLE_NEUTRAL_DOWN_VOTE_THREAD_DETAIL: 'TOGGLE_NEUTRAL_DOWN_VOTE_THREAD_DETAIL',
  TOGGLE_UP_VOTE_COMMENT: 'TOGGLE_UP_VOTE_COMMENT',
  TOGGLE_DOWN_VOTE_COMMENT: 'TOGGLE_DOWN_VOTE_COMMENT',
  TOGGLE_NEUTRAL_UP_VOTE_COMMENT: 'TOGGLE_NEUTRAL_UP_VOTE_COMMENT',
  TOGGLE_NEUTRAL_DOWN_VOTE_COMMENT: 'TOGGLE_NEUTRAL_DOWN_VOTE_COMMENT',
};

const receiveThreadDetailActionCreator = (threadDetail) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: {
    threadDetail,
  },
});

const addCommentActionCreator = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: {
    comment,
  },
});

const toggleUpVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const toggleDownVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const toggleNeutralUpVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_NEUTRAL_UP_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const toggleNeutralDownVoteThreadDetailActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_NEUTRAL_DOWN_VOTE_THREAD_DETAIL,
  payload: {
    threadId,
    userId,
  },
});

const toggleUpVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_UP_VOTE_COMMENT,
  payload: {
    commentId,
    userId,
  },
});

const toggleDownVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
  payload: {
    commentId,
    userId,
  },
});

const toggleNeutralUpVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_NEUTRAL_UP_VOTE_COMMENT,
  payload: {
    commentId,
    userId,
  },
});

const toggleNeutralDownVoteCommentActionCreator = ({ commentId, userId }) => ({
  type: ActionType.TOGGLE_NEUTRAL_DOWN_VOTE_COMMENT,
  payload: {
    commentId,
    userId,
  },
});

const asyncAddComment = ({ content, commentTo }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const comment = await api.createComment({ content, commentTo });
    dispatch(addCommentActionCreator(comment));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const threadDetail = await api.getThreadDetail(threadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

const asyncToggleUpVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.toggleUpVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleDownVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleDownVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.toggleDownVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleDownVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleNeutralUpVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleNeutralUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.toggleNeutralVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleNeutralUpVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleNeutralDownVoteThreadDetail = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleNeutralDownVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.toggleNeutralVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleNeutralDownVoteThreadDetailActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleUpVoteComment = (threadId, commentId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleUpVoteCommentActionCreator({ commentId, userId: authUser.id }));

  try {
    await api.toggleUpVoteComment(threadId, commentId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleUpVoteCommentActionCreator({ commentId, userId: authUser.id }));
  }
};

const asyncToggleDownVoteComment = (threadId, commentId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleDownVoteCommentActionCreator({ commentId, userId: authUser.id }));

  try {
    await api.toggleDownVoteComment(threadId, commentId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleDownVoteCommentActionCreator({ commentId, userId: authUser.id }));
  }
};

const asyncToggleNeutralUpVoteComment = (threadId, commentId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleNeutralUpVoteCommentActionCreator({ commentId, userId: authUser.id }));

  try {
    await api.toggleNeutralVoteComment(threadId, commentId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleNeutralUpVoteCommentActionCreator({ commentId, userId: authUser.id }));
  }
};

const asyncToggleNeutralDownVoteComment = (threadId, commentId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleNeutralDownVoteCommentActionCreator({ commentId, userId: authUser.id }));

  try {
    await api.toggleNeutralVoteComment(threadId, commentId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleNeutralDownVoteCommentActionCreator({ commentId, userId: authUser.id }));
  }
};

export {
  ActionType,
  receiveThreadDetailActionCreator,
  toggleUpVoteThreadDetailActionCreator,
  toggleDownVoteThreadDetailActionCreator,
  toggleNeutralUpVoteThreadDetailActionCreator,
  toggleNeutralDownVoteThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralUpVoteThreadDetail,
  asyncToggleNeutralDownVoteThreadDetail,
  asyncToggleUpVoteComment,
  asyncToggleDownVoteComment,
  asyncToggleNeutralUpVoteComment,
  asyncToggleNeutralDownVoteComment,
  addCommentActionCreator,
  asyncAddComment,
};