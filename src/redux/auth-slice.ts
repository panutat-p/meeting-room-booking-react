import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface AuthState {
  profile: string;
  email: string;
}

const initialState: AuthState = {
  profile: '🐵 🐵 🐵',
  email: 'monkey@gmail.com',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateProfileAction: (state) => {
      state.profile = '🐔 🐔 🐔';
      state.email = 'chicken@gmail.com';
    },
  },
});

export const selectAuthState = (state: RootState): any => state.auth;

export const { updateProfileAction } = authSlice.actions;

export default authSlice.reducer;
