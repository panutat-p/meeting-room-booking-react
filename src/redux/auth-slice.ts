import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface AuthState {
  profile: string;
}

const initialState: AuthState = {
  profile: '🐵 🐵 🐵',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
});

export const selectAuthState = (state: RootState): any => state.auth;

export const {} = authSlice.actions;

export default authSlice.reducer;
