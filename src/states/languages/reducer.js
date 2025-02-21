import { ActionType } from './action';

const languagesReducer = (languages = [], action = {}) => {
  switch (action.type) {
  case ActionType.SET_LANGUAGE:
    return {
      ...languages,
      language: action.payload.language
    };
  default:
    return languages;
  }
};

export default languagesReducer;
