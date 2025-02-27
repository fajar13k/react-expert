/**
 * Test scenario for threadDetailReducer
 *
 * - threadDetailReducer
 *   - should return the initial state when given by unknown action
 *   - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
 *   - should return the thread detail with the new comment when given by ADD_COMMENT action
 *   - should return the thread detail with the toggled upvote when given by TOGGLE_UP_VOTE_THREAD_DETAIL action
 *   - should return the thread detail with the toggled downvote when given by TOGGLE_DOWN_VOTE_THREAD_DETAIL action
 *   - should return the thread detail with the neutralized upvote when given by TOGGLE_NEUTRAL_UP_VOTE_THREAD_DETAIL action
 *   - should return the thread detail with the neutralized downvote when given by TOGGLE_NEUTRAL_DOWN_VOTE_THREAD_DETAIL action
 *   - should return the thread detail with the toggled upvote comment when given by TOGGLE_UP_VOTE_COMMENT action
 *   - should return the thread detail with the toggled downvote comment when given by TOGGLE_DOWN_VOTE_COMMENT action
 *   - should return the thread detail with the neutralized upvote comment when given by TOGGLE_NEUTRAL_UP_VOTE_COMMENT action
 *   - should return the thread detail with the neutralized downvote comment when given by TOGGLE_NEUTRAL_DOWN_VOTE_COMMENT action
 */

import { describe, expect, it } from 'vitest';
import threadDetailReducer from './reducer';
import { ActionType } from './action';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = null;
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'Thread test 1',
          body: 'Lorem Ipsum Dolor Sit Amet',
          category: 'redux',
          createdAt: '2023-05-29T07:55:52.266Z',
          ownerId: 'user-1',
          comments: [],
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return the thread detail with the new comment when given by ADD_COMMENT action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Lorem Ipsum Dolor Sit Amet',
      category: 'redux',
      createdAt: '2023-05-29T07:55:52.266Z',
      ownerId: 'user-1',
      comments: [],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.ADD_COMMENT,
      payload: {
        comment: {
          id: 'comment-1',
          content: 'This is a comment',
          createdAt: '2023-05-29T08:00:00.000Z',
          ownerId: 'user-2',
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [action.payload.comment, ...initialState.comments],
    });
  });

  it('should return the thread detail with the toggled upvote when given by TOGGLE_UP_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Lorem Ipsum Dolor Sit Amet',
      category: 'redux',
      createdAt: '2023-05-29T07:55:52.266Z',
      ownerId: 'user-1',
      comments: [],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.TOGGLE_UP_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-2',
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
    });
  });

  it('should return the thread detail with the toggled downvote when given by TOGGLE_DOWN_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Lorem Ipsum Dolor Sit Amet',
      category: 'redux',
      createdAt: '2023-05-29T07:55:52.266Z',
      ownerId: 'user-1',
      comments: [],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.TOGGLE_DOWN_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-2',
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: [action.payload.userId],
    });
  });

  it('should return the thread detail with the neutralized upvote when given by TOGGLE_NEUTRAL_UP_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Lorem Ipsum Dolor Sit Amet',
      category: 'redux',
      createdAt: '2023-05-29T07:55:52.266Z',
      ownerId: 'user-1',
      comments: [],
      upVotesBy: ['user-2'],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.TOGGLE_NEUTRAL_UP_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-2',
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
    });
  });

  it('should return the thread detail with the neutralized downvote when given by TOGGLE_NEUTRAL_DOWN_VOTE_THREAD_DETAIL action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Lorem Ipsum Dolor Sit Amet',
      category: 'redux',
      createdAt: '2023-05-29T07:55:52.266Z',
      ownerId: 'user-1',
      comments: [],
      upVotesBy: [],
      downVotesBy: ['user-2'],
    };
    const action = {
      type: ActionType.TOGGLE_NEUTRAL_DOWN_VOTE_THREAD_DETAIL,
      payload: {
        userId: 'user-2',
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: [],
    });
  });

  it('should return the thread detail with the toggled upvote comment when given by TOGGLE_UP_VOTE_COMMENT action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Lorem Ipsum Dolor Sit Amet',
      category: 'redux',
      createdAt: '2023-05-29T07:55:52.266Z',
      ownerId: 'user-1',
      comments: [
        {
          id: 'comment-1',
          content: 'This is a comment',
          createdAt: '2023-05-29T08:00:00.000Z',
          ownerId: 'user-2',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.TOGGLE_UP_VOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-3',
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it('should return the thread detail with the toggled downvote comment when given by TOGGLE_DOWN_VOTE_COMMENT action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Lorem Ipsum Dolor Sit Amet',
      category: 'redux',
      createdAt: '2023-05-29T07:55:52.266Z',
      ownerId: 'user-1',
      comments: [
        {
          id: 'comment-1',
          content: 'This is a comment',
          createdAt: '2023-05-29T08:00:00.000Z',
          ownerId: 'user-2',
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.TOGGLE_DOWN_VOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-3',
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it('should return the thread detail with the neutralized upvote comment when given by TOGGLE_NEUTRAL_UP_VOTE_COMMENT action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Lorem Ipsum Dolor Sit Amet',
      category: 'redux',
      createdAt: '2023-05-29T07:55:52.266Z',
      ownerId: 'user-1',
      comments: [
        {
          id: 'comment-1',
          content: 'This is a comment',
          createdAt: '2023-05-29T08:00:00.000Z',
          ownerId: 'user-2',
          upVotesBy: ['user-3'],
          downVotesBy: [],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.TOGGLE_NEUTRAL_UP_VOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-3',
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
        },
      ],
    });
  });

  it('should return the thread detail with the neutralized downvote comment when given by TOGGLE_NEUTRAL_DOWN_VOTE_COMMENT action', () => {
    // Arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread test 1',
      body: 'Lorem Ipsum Dolor Sit Amet',
      category: 'redux',
      createdAt: '2023-05-29T07:55:52.266Z',
      ownerId: 'user-1',
      comments: [
        {
          id: 'comment-1',
          content: 'This is a comment',
          createdAt: '2023-05-29T08:00:00.000Z',
          ownerId: 'user-2',
          upVotesBy: [],
          downVotesBy: ['user-3'],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.TOGGLE_NEUTRAL_DOWN_VOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-3',
      },
    };

    // Action
    const nextState = threadDetailReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: [],
        },
      ],
    });
  });
});