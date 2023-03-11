import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { login } from '../services/auth.service';
import { LogInFormInput } from '../types/form';
import { LogInErrorPayload, LogInPayload } from '../types/login-payload';
import { AxiosError } from 'axios';

export interface AuthState {
  profile: string;
  email: string;
  logInPayload: LogInPayload | null;
}

const initialState: AuthState = {
  profile: '🅰️ 🅱️',
  email: 'ab@gmail.com',
  logInPayload: null,
};

export const loginThunk = createAsyncThunk<LogInPayload, LogInFormInput, { rejectValue: LogInErrorPayload }>(
  'auth/loginThunkStatus',
  async (user: LogInFormInput, { rejectWithValue }) => {
    try {
      const res = await login(user.email, user.password);
      console.log('🟩 Succeeded to login');
      return res.data;
    } catch (e: any | AxiosError<LogInErrorPayload>) {
      console.log('🟥 Failed to login, e:', e);
      console.log('🟥 Failed to login, error:', e.error);
      if (!e.response) {
        console.log('🟥 Unexpected error, e:', e);
        throw e;
      }
      return rejectWithValue(e.response.data);
    }
  }
);
export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    updateProfileAction: (state) => {
      state.profile = '🐔 🐔 🐔';
      state.email = 'chicken@gmail.com';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<LogInPayload | null>) => {
      state.logInPayload = action.payload;
    });
  },
});

export const selectAuthState = (state: RootState): any => state.auth;

export const { updateProfileAction } = authSlice.actions;

export default authSlice.reducer;
