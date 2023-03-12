import axios, { AxiosResponse } from 'axios';
import type { AxiosRequestConfig } from 'axios';

import { LogInPayload } from '../types/login-payload';
import { BASE_URL } from './url';

export async function login(email: string, password: string): Promise<AxiosResponse<LogInPayload>> {
  const config: AxiosRequestConfig = {
    method: 'POST',
    url: BASE_URL + '/login',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      email: email,
      password: password,
    },
  };
  return axios(config);
}

export function logout(): void {
  localStorage.removeItem('token');
}
