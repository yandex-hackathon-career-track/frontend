import { configureStore } from '@reduxjs/toolkit';
import { practicumApi } from './query/practicumApi';
import userReducer from './features/userSlice';
import companySlice from './features/companySlice';
import allAttributesSlice from './features/attributesSlice';
import applicantsSlice from './features/applicantsSlice';

export const store = configureStore({
  reducer: {
    [practicumApi.reducerPath]: practicumApi.reducer,
    user: userReducer,
    company: companySlice,
    attributes: allAttributesSlice,
    applicants: applicantsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(practicumApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
