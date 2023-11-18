import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ICompanyState {
  id?: string;
  name: string;
  email: string;
  about: string;
  website: string;
  phone: string;
  activity: string;
}

const initialState: ICompanyState = {
  id: '',
  name: '',
  email: '',
  about: '',
  website: '',
  phone: '',
  activity: '',
};

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setCompanyData: (state, action: PayloadAction<ICompanyState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.about = action.payload.about;
      state.website = action.payload.website;
      state.phone = action.payload.phone;
      state.activity = action.payload.activity;
    },
  },
});

export const { setCompanyData } = companySlice.actions;
export default companySlice.reducer;
