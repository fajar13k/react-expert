/**
 * Test scenario for usersReducer
 *
 * - usersReducer
 *   - should return the initial state when given by unknown action
 *   - should return the users when given by RECEIVE_USERS action
 */

import { describe, expect, it } from 'vitest';
import usersReducer from './reducer';
import { ActionType } from './action';

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users: [
          {
            id: 'user-1',
            name: 'User One',
            email: 'userone@example.com',
          },
          {
            id: 'user-2',
            name: 'User Two',
            email: 'usertwo@example.com',
          },
        ],
      },
    };

    // Action
    const nextState = usersReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(action.payload.users);
  });
});