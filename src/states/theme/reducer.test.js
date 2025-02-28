/**
 * - Test scenario themeReducer
 *   - should return the initial state
 *   - should handle TOGGLE_THEME
 *   - should handle SET_LIGHT_THEME
 *   - should handle SET_DARK_THEME
 */

import { describe, it, expect } from 'vitest';
import themeReducer from './reducer';

import { ActionType } from './action';

describe('themeReducer', () => {
  it('should return the initial state', () => {
    const initialState = { mode: 'light' };
    const action = {};
    const state = themeReducer(initialState, action);
    expect(state).toEqual(initialState);
  });

  it('should handle TOGGLE_THEME', () => {
    const initialState = { mode: 'light' };
    const action = { type: ActionType.TOGGLE_THEME };
    const state = themeReducer(initialState, action);
    expect(state).toEqual({ mode: 'dark' });

    const newState = themeReducer(state, action);
    expect(newState).toEqual({ mode: 'light' });
  });

  it('should handle SET_LIGHT_THEME', () => {
    const initialState = { mode: 'dark' };
    const action = { type: ActionType.SET_LIGHT_THEME };
    const state = themeReducer(initialState, action);
    expect(state).toEqual({ mode: 'light' });
  });

  it('should handle SET_DARK_THEME', () => {
    const initialState = { mode: 'light' };
    const action = { type: ActionType.SET_DARK_THEME };
    const state = themeReducer(initialState, action);
    expect(state).toEqual({ mode: 'dark' });
  });
});