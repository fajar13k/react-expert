import { ActionType } from './action';

const themeReducer = (state = 'light', action = {}) => {
  switch (action.type) {
  case ActionType.TOGGLE_THEME:
    return {
      ...state,
      mode: state.mode === 'light' ? 'dark' : 'light'
    };
  case ActionType.SET_LIGHT_THEME:
    return {
      ...state,
      mode: 'light',
    };
  case ActionType.SET_DARK_THEME:
    return {
      ...state,
      mode: 'dark',
    };
  default:
    return state;
  };
};

export default themeReducer;