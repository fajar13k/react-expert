/**
 * Test scenario for languagesReducer
 *
 * - languagesReducer
 *   - should return the initial state when given by unknown action
 *   - should return the new state with the set language when given by SET_LANGUAGE action
 */

import { describe, expect, it } from 'vitest';
import languagesReducer from './reducer';
import { ActionType } from './action';

describe('languagesReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // Action
    const nextState = languagesReducer(initialState, action);

    // Assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the new state with the set language when given by SET_LANGUAGE action', () => {
    // Arrange
    const initialState = [];
    const action = {
      type: ActionType.SET_LANGUAGE,
      payload: {
        language: 'en',
      },
    };

    // Action
    const nextState = languagesReducer(initialState, action);

    // Assert
    expect(nextState).toEqual({
      ...initialState,
      language: action.payload.language,
    });
  });
});