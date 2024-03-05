import type {AxiosRequestConfig} from 'axios';
import {API_BASE_URL, API_TIMEOUT} from '../../app/constants';

// SETUP API DEFAULTS
export const axiosDefaultRequestConfig: AxiosRequestConfig = {
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Accept: 'application/vnd.api+json',
    Authorization: 'f44a4aabfc5992514d262d7f517327e7',
    UserAddressID: '60877',
    StoreID: '4',
  },
};
