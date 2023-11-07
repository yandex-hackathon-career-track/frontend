import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IVacanci } from '../types/Interfaces';

const initialState = [] as IVacanci[];

// {
//   id: '',
//   title: '',
//   is_published: true,
//   created_at: '',
//   updated_at: '',
//   views_qty: 0,
//   responds_qty: 0,
//   total_resume_qty: 0,
//   chosen_resume_qty: 0,
// },

export const vacanciesSlice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {
    setVacancies: (state, action: PayloadAction<IVacanci[]>) => {
      state = action.payload;
      return state;
    },
    setNewStatusToId: (state, action: PayloadAction<IVacanci>) => {
      state = state.map((item) =>
        item.id === action.payload.id ? { ...item, is_published: action.payload.is_published } : item,
      );
      return state;
    },
  },
});

export const { setVacancies, setNewStatusToId } = vacanciesSlice.actions;
export default vacanciesSlice.reducer;
