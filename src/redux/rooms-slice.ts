import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from './store';
import { AxiosError } from 'axios';
import { getRooms } from '../services/rooms.service';
import { RoomsErrorPayload, RoomsPayload } from '../types/rooms.type';

export interface RoomsState {
  rooms: RoomsPayload | null;
}

const initialState: RoomsState = {
  rooms: null,
};

export const getRoomsThunk = createAsyncThunk<RoomsPayload, void>('rooms/getRoomsThunk', async () => {
  try {
    const res = await getRooms();
    console.log('🟩 Succeeded to GetRooms', res?.data.events);
    return res?.data;
  } catch (e: any | AxiosError<RoomsErrorPayload>) {
    console.log('🟥 Failed to GetRooms, error:', e.message);
    if (!e.response) {
      console.log('🟥 Unexpected error, e:', e);
      throw e;
    }
    return e.response.data;
  }
});
export const roomsSlice = createSlice({
  name: 'rooms',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRoomsThunk.fulfilled, (state, action: PayloadAction<RoomsPayload | null>) => {
      state.rooms = action.payload;
    });
  },
});

export const selectRoomsState = (state: RootState): any => state.rooms;

export default roomsSlice.reducer;
