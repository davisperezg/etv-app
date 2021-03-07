import axios from 'axios';

const API = process.env.REACT_APP_API || 'https://quedape.com/etv/api';

//login
export const postLogin = async (username, password) => {
  const user = {
    username: username,
    password: password,
  };
  return await axios.post(`${API}/v1/auth/signIn`, user);
};

//Obtener datos
export const getData = async () => {
  return await axios.get(`${API}/v1/auth/user`);
};

//Obtener datos
export const getInfoXData = async (id) => {
  return await axios.get(`${API}/v1/user/${id}`);
};

//Desconecta usuario
export const disconnectDevice = async (id) => {
  return await axios.put(`${API}/v1/disconnect`, id);
};

//Desconectar usuario
export const amountDisconnected = async () => {
  return await axios.put(`${API}/v1/amount/disconnected`);
};

//Contar usuario
export const amountConnected = async () => {
  return await axios.put(`${API}/v1/amount/connected`);
};

//Token
export const token = async (username, refreshToken) => {
  const user = {
    username: username,
    refreshToken: refreshToken,
  };
  return await axios.post(`${API}/v1/auth/token`, user);
};
