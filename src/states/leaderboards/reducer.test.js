/**
 * Test scenario for leaderboardsReducer
 *
 * - leaderboardsReducer
 *   - should return the initial state when given by unknown action
 *   - should return the leaderboards when given by RECEIVE_LEADERBOARDS action
 */

import { describe, expect, it } from 'vitest';
import leaderboardsReducer from './reducer';
import { ActionType } from './action';

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_LEADERBOARDS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
          {
            user: {
              id: 'user-1',
              name: 'User One',
              email: 'userone@example.com',
            },
            score: 100,
          },
          {
            user: {
              id: 'user-2',
              name: 'User Two',
              email: 'usertwo@example.com',
            },
            score: 80,
          },
        ],
      },
    };

    // Action
    const nextState = leaderboardsReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});