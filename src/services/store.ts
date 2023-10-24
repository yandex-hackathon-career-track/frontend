import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import { practicumApi } from './query/practicumApi';

export const store = configureStore({
  reducer: {
    [practicumApi.reducerPath]: practicumApi.reducer,
    player: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(practicumApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
