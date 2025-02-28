/**
 * - Test scenario themeAction
 *   - should create an action to toggle theme
 *   - should create an action to set light theme
 *   - should create an action to set dark theme
 */

import { describe, it, expect } from 'vitest';
import { ActionType, toggleTheme, setLightTheme, setDarkTheme } from './action';

describe('theme actions', () => {
  it('should create an action to toggle theme', () => {
    // Arrange
    const expectedAction = {
      type: ActionType.TOGGLE_THEME,
    };

    // Assert
    expect(toggleTheme()).toEqual(expectedAction);
  });

  it('should create an action to set light theme', () => {
    // Arrange
    const expectedAction = {
      type: ActionType.SET_LIGHT_THEME,
    };

    // Assert
    expect(setLightTheme()).toEqual(expectedAction);
  });

  it('should create an action to set dark theme', () => {
    // Arrange
    const expectedAction = {
      type: ActionType.SET_DARK_THEME,
    };

    // Assert
    expect(setDarkTheme()).toEqual(expectedAction);
  });
});