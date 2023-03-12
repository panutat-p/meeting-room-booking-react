import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { BASE_URL } from './url';
import { RoomsPayload } from '../types/rooms.type';

export async function getRooms(): Promise<AxiosResponse<RoomsPayload> | null> {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: BASE_URL + '/events',
  };
  return axios(config);
}
