import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IApplicantMainInfo } from '../types/types';

const initialState: IApplicantMainInfo[] = [
  {
    id: '',
    user: '',
    first_name: '',
    last_name: '',
    stack: [{ id: 0, name: '' }],
    status: { id: 0, name: '' },
    total_experience: '',
    direction: { id: 0, name: '' },
    updated_at: '',
    latest_graduation_date: '',
    is_selected: false,
  },
];

export const applicantsSlice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {
    setApplicants: (state, action: PayloadAction<IApplicantMainInfo[]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setApplicants } = applicantsSlice.actions;
export default applicantsSlice.reducer;

// state.id = action.payload.id;
// state.user = action.payload.user;
// state.first_name = action.payload.first_name;
// state.last_name = action.payload.last_name;
// state.stack = action.payload.stack;
// state.status = action.payload.status;
// state.total_experience = action.payload.total_experience;
// state.direction = action.payload.direction;
// state.updated_at = action.payload.updated_at;
// state.latest_graduation_date = action.payload.latest_graduation_date;
// state.is_selected = action.payload.is_selected;
