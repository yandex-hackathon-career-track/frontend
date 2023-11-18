import { configureStore } from '@reduxjs/toolkit';
import { practicumApi } from '../api/apiOnRTKQ';
import userReducer from './slices/userSlice';
import companySlice from './slices/companySlice';
import allAttributesSlice from './slices/attributesSlice';
import applicantsSlice from './slices/applicantsSlice';
import vacanciesSlice from './slices/vacancySlice';
import selectedVacancySlice from './slices/selectedVacancySlice';

export const store = configureStore({
  reducer: {
    [practicumApi.reducerPath]: practicumApi.reducer,
    user: userReducer,
    company: companySlice,
    attributes: allAttributesSlice,
    applicants: applicantsSlice,
    vacancies: vacanciesSlice,
    selectedVacancy: selectedVacancySlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(practicumApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
