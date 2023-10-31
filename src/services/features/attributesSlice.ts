import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAllAttributes } from '../types/types';

const initialState = {
  directions: [{ id: 0, name: '' }],
  cources: [{ id: 0, name: '', direction: { id: 0, name: '' } }],
  stack: [{ id: 0, name: '' }],
  work_formats: [{ id: 0, name: '' }],
  occupations: [{ id: 0, name: '' }],
  cities: [{ id: 0, name: '' }],
  activity_statuses: [{ id: 0, name: '' }],
  review_statuses: [{ id: 0, name: '' }],
};

export const allAttributesSlice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {
    setAllAttributes: (state, action: PayloadAction<IAllAttributes>) => {
      state.directions = action.payload.directions;
      state.cources = action.payload.cources;
      state.stack = action.payload.stack;
      state.occupations = action.payload.occupations;
      state.cities = action.payload.cities;
      state.review_statuses = action.payload.review_statuses;

      // Пока нигде не задействованы следующие 2 строки данных
      state.activity_statuses = action.payload.activity_statuses;
      state.work_formats = action.payload.work_formats;
    },
  },
});

export const { setAllAttributes } = allAttributesSlice.actions;
export default allAttributesSlice.reducer;
