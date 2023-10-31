import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { deleteCookie } from '../../utils/cookie';

interface IUserAction {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface IUserState {
  id: string;
  email: string;
  password: string;
  isAuthorised: boolean;
}

const initialState: IUserState = {
  id: '',
  email: '',
  password: '',
  isAuthorised: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<IUserAction>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuthorised = true;
    },
    logOut: (state) => {
      deleteCookie('refresh');
      deleteCookie('access');
      state.id = '';
      state.email = '';
      state.password = '';
      state.isAuthorised = false;
    },
  },
});

export const { setUserData, logOut } = userSlice.actions;
export default userSlice.reducer;
