import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';

import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import languagesReducer from './languages/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import themeReducer from './theme/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    languages: languagesReducer,
    users: usersReducer,
    theme: themeReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboards: leaderboardsReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
