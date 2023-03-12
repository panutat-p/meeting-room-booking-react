import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { BASE_URL } from './url';
import { ProfilePayload } from '../types/profie.type';

export async function getProfile(): Promise<AxiosResponse<ProfilePayload> | null> {
  const accessToken = localStorage.getItem('token');

  const config: AxiosRequestConfig = {
    method: 'GET',
    url: BASE_URL + '/profile',
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  };
  return axios(config);
}
