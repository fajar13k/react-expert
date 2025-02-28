const ActionType = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  SET_LIGHT_THEME: 'SET_LIGHT_THEME',
  SET_DARK_THEME: 'SET_DARK_THEME',
};

const toggleTheme = () => ({
  type: ActionType.TOGGLE_THEME,
});

const setLightTheme = () => ({
  type: ActionType.SET_LIGHT_THEME,
});

const setDarkTheme = () => ({
  type: ActionType.SET_DARK_THEME,
});

export { ActionType, toggleTheme, setLightTheme, setDarkTheme };
