import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
  TOGGLE_UP_VOTE_THREAD: 'TOGGLE_UP_VOTE_THREAD',
  TOGGLE_DOWN_VOTE_THREAD: 'TOGGLE_DOWN_VOTE_THREAD',
  TOGGLE_NEUTRAL_UP_VOTE_THREAD: 'TOGGLE_NEUTRAL_UP_VOTE_THREAD',
  TOGGLE_NEUTRAL_DOWN_VOTE_THREAD: 'TOGGLE_NEUTRAL_DOWN_VOTE_THREAD',
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: {
    thread,
  },
});

const toggleUpVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_UP_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const toggleDownVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const toggleNeutralUpVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_NEUTRAL_UP_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const toggleNeutralDownVoteThreadActionCreator = ({ threadId, userId }) => ({
  type: ActionType.TOGGLE_NEUTRAL_DOWN_VOTE_THREAD,
  payload: {
    threadId,
    userId,
  },
});

const asyncAddThread = ({ title, body, category }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const thread = await api.createThread({ title, body, category });
    dispatch(addThreadActionCreator(thread));
  } catch (error) {
    alert(error.message);
  }
  dispatch(hideLoading());
};

const asyncToggleUpVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.toggleUpVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleDownVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.toggleDownVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleNeutralUpVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleNeutralUpVoteThreadActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.toggleNeutralVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleNeutralUpVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncToggleNeutralDownVoteThread = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(toggleNeutralDownVoteThreadActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.toggleNeutralVoteThread(threadId);
  } catch (error) {
    alert(error.message);
    dispatch(toggleNeutralDownVoteThreadActionCreator({ threadId, userId: authUser.id }));
  }
};

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
  toggleUpVoteThreadActionCreator,
  toggleDownVoteThreadActionCreator,
  toggleNeutralUpVoteThreadActionCreator,
  toggleNeutralDownVoteThreadActionCreator,
  asyncToggleUpVoteThread,
  asyncToggleDownVoteThread,
  asyncToggleNeutralUpVoteThread,
  asyncToggleNeutralDownVoteThread,
};