import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IDataResponseChangeStatus, IRespondsOfVacanci } from '../types/Interfaces';

const initialState = null as unknown as IRespondsOfVacanci;

export const selectedVacancySlice = createSlice({
  name: 'selectedVacancy',
  initialState,
  reducers: {
    setSelectedVacancy: (state: IRespondsOfVacanci, action: PayloadAction<IRespondsOfVacanci>) => {
      state = action.payload;
      return state;
    },
    setNewStatsToId: (state, action: PayloadAction<IDataResponseChangeStatus>) => {
      const { id, status, applicant, vacancy_new_stats } = action.payload;
      const { interview, refusal, under_review, sent_test } = vacancy_new_stats;
      // state = { ...state, ...vacancy_new_stats };
      state.new = vacancy_new_stats.new;
      state.interview = interview;
      state.refusal = refusal;
      state.under_review = under_review;
      state.sent_test = sent_test;
      state.responds.map((item) => (item.applicant.id === applicant ? (item.status = { name: status, id: id }) : item));
    },
  },
});

export const { setSelectedVacancy, setNewStatsToId } = selectedVacancySlice.actions;
export default selectedVacancySlice.reducer;
