/**
 * Test scenario for threadsReducer
 *
 * - threadsReducer
 *   - should return the initial state when given by unknown action
 *   - should return the threads when given by RECEIVE_THREADS action
 *   - should return the threads with the new threads when given by ADD_THREAD action
 *   - should return the threads with the toggled upvote thread when given by TOGGLE_UP_VOTE_THREAD action
 *   - should return the threads with the toggled downvote thread when given by TOGGLE_DOWN_VOTE_THREAD action
 *   - should return the threads with the toggled neutral upvote thread when given by TOGGLE_NEUTRAL_UP_VOTE_THREAD action
 *   - should return the threads with the toggled neutral downvote thread when given by TOGGLE_NEUTRAL_DOWN_VOTE_THREAD action
 */

import { describe, expect, it } from 'vitest';
import threadsReducer from './reducer';
import { ActionType } from './action';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread test 1',
            body: 'Lorem Ipsum Dolor Sit Amet',
            category: 'redux',
            createdAt: '2023-05-29T07:55:52.266Z',
            ownerId: 'user-1',
            totalComments: 0,
            upVotesBy: [],
            downVotesBy: [],
          },
          {
            id: 'thread-2',
            title: 'Thread test 2',
            body: 'Consectetum Lip Emil',
            category: 'react',
            createdAt: '2023-02-29T07:55:52.266Z',
            ownerId: 'user-2',
            totalComments: 1,
            upVotesBy: ['user-1'],
            downVotesBy: [],
          },
        ],
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread test 1',
        body: 'Lorem Ipsum Dolor Sit Amet',
        category: 'redux',
        createdAt: '2023-05-29T07:55:52.266Z',
        ownerId: 'user-1',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.ADD_THREAD,
      payload: {
        thread: {
          id: 'thread-3',
          title: 'Thread test 3',
          body: 'The Quick Brown Fox Jumps Over The Lazy Dog',
          category: 'react',
          createdAt: '2023-08-22T07:55:52.266Z',
          ownerId: 'user-1',
          totalComments: 0,
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // Action
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the toggled upvote thread when given by TOGGLE_UP_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-4',
        title: 'Thread test 4',
        body: 'I can can the can in A can',
        category: 'react',
        createdAt: '2023-09-10T07:55:52.266Z',
        ownerId: 'user-1',
        totalComments: 1,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.TOGGLE_UP_VOTE_THREAD,
      payload: {
        threadId: 'thread-4',
        userId: 'user-1',
      },
    };

    // Action: UpVote Thread
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the toggled upvote thread when given by TOGGLE_DOWN_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-4',
        title: 'Thread test 4',
        body: 'I can can the can in A can',
        category: 'react',
        createdAt: '2023-09-10T07:55:52.266Z',
        ownerId: 'user-1',
        totalComments: 1,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.TOGGLE_DOWN_VOTE_THREAD,
      payload: {
        threadId: 'thread-4',
        userId: 'user-1',
      },
    };

    // Action: UpVote Thread
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with the toggled neutral upvote thread when given by TOGGLE_NEUTRAL_UP_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-5',
        title: 'Thread test 5',
        body: 'Neutral upvote test',
        category: 'react',
        createdAt: '2023-09-10T07:55:52.266Z',
        ownerId: 'user-1',
        totalComments: 1,
        upVotesBy: ['user-1'],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.TOGGLE_NEUTRAL_UP_VOTE_THREAD,
      payload: {
        threadId: 'thread-5',
        userId: 'user-1',
      },
    };

    // Action: Neutral UpVote Thread
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
      },
    ]);
  });

  it('should return the threads with the toggled neutral downvote thread when given by TOGGLE_NEUTRAL_DOWN_VOTE_THREAD action', () => {
    // Arrange
    const initialState = [
      {
        id: 'thread-6',
        title: 'Thread test 6',
        body: 'Neutral downvote test',
        category: 'react',
        createdAt: '2023-09-10T07:55:52.266Z',
        ownerId: 'user-1',
        totalComments: 1,
        upVotesBy: [],
        downVotesBy: ['user-1'],
      },
    ];

    const action = {
      type: ActionType.TOGGLE_NEUTRAL_DOWN_VOTE_THREAD,
      payload: {
        threadId: 'thread-6',
        userId: 'user-1',
      },
    };

    // Action: Neutral DownVote Thread
    const nextState = threadsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [],
      },
    ]);
  });
});
