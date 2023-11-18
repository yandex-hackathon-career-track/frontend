import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IVacanci } from '../../helpers/tsTypes/Interfaces';

const initialState = [] as IVacanci[];

export const vacanciesSlice = createSlice({
  name: 'vacancy',
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
