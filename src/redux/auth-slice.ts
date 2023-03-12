import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { login } from '../services/auth.service';
import { LogInFormInput } from '../types/form';
import { LogInErrorPayload, LoginType } from '../types/login.type';
import { AxiosError } from 'axios';

export interface AuthState {
  profile: string;
  email: string;
  logInPayload: LoginType | null;
}

const initialState: AuthState = {
  profile: '🅰️ 🅱️',
  email: 'ab@gmail.com',
  logInPayload: null,
};

export const loginThunk = createAsyncThunk<LoginType, LogInFormInput, { rejectValue: LogInErrorPayload }>(
  'auth/loginThunkStatus',
  async (user: LogInFormInput, { rejectWithValue }) => {
    try {
      const res = await login(user.email, user.password);
      console.log('🟩 Succeeded to login');
      localStorage.setItem('token', res.data.access_token);
      return res.data;
    } catch (e: any | AxiosError<LogInErrorPayload>) {
      console.log('🟥 Failed to login, error:', e.message);
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
    builder.addCase(loginThunk.fulfilled, (state, action: PayloadAction<LoginType | null>) => {
      state.logInPayload = action.payload;
    });
  },
});

export const selectAuthState = (state: RootState): any => state.auth;

export const { updateProfileAction } = authSlice.actions;

export default authSlice.reducer;
