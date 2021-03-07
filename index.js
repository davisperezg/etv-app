/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as authService from './services/authService';

const API = 'https://quedape.com/etv/api';

axios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest.url === `${API}/v1/auth/token`
    ) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const username = await AsyncStorage.getItem('username');
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        const resToken = await authService.token(username, refreshToken);
        if (resToken.status === 200) {
          await AsyncStorage.setItem('token', resToken.data.token);
          const token = await AsyncStorage.getItem('token');
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
          return axios(originalRequest);
        }
      } catch (e) {
        console.log(e);
      }
    }
    return Promise.reject(error);
  },
);

AppRegistry.registerComponent(appName, () => App);
