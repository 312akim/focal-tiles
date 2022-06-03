import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

export type AuthState = {
  status?: boolean;
  email: string;
  nickname: string;
  phoneNumber: string;
};

const initialState: AuthState = {
    status: false,
    email: 'test@gmail.com',
    nickname: 'Test Nickname',
    phoneNumber: '+1 111-222-3333',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
      login: (state, action: PayloadAction<AuthState>) => {
        state.status = true;
        state.email = action.payload.email;
        state.phoneNumber = action.payload.phoneNumber;
        state.nickname = action.payload.nickname;
      },
      logout: () => {
        return initialState
      },
      setEmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
      },
      setNickname: (state, action: PayloadAction<string>) => {
        state.nickname = action.payload;
      },
      setPhoneNumber: (state, action: PayloadAction<string>) => {
        state.phoneNumber = action.payload;
      }
  },
});

export const { login, logout, setEmail, setNickname, setPhoneNumber } = authSlice.actions;

export const selectAuthStatus = (state: RootState) => state.auth.status;
export const selectAuthEmail = (state: RootState) => state.auth.email;
export const selectAuthNickname = (state: RootState) => state.auth.nickname;
export const selectAuthPhoneNumber = (state: RootState) => state.auth.phoneNumber;

export default authSlice.reducer;
