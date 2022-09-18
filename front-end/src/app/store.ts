import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import rootReducers from '../reducers/index';

export const store = configureStore({
  reducer: rootReducers,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
