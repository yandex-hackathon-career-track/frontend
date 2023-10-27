import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import { practicumApi } from './query/practicumApi';
import companySlice from './features/companySlice';

export const store = configureStore({
  reducer: {
    [practicumApi.reducerPath]: practicumApi.reducer,
    user: userReducer,
    company: companySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(practicumApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
