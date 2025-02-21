import i18n from 'i18next';

const ActionType = {
  SET_LANGUAGE: 'SET_LANGUAGE',
};

const setLanguage = (language) => {
  i18n.changeLanguage(language);
  return {
    type: ActionType.SET_LANGUAGE,
    payload: {
      language,
    },
  };
};

export { ActionType, setLanguage };