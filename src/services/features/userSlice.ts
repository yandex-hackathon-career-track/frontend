import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISetUserAction {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface IUserState {
  id: string;
  name: string;
  email: string;
  password: string;
  isAuthorised: boolean;
}

const initialState: IUserState = {
  id: '',
  name: 'Пользователь',
  email: '',
  password: '',
  isAuthorised: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ISetUserAction>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuthorised = true;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
