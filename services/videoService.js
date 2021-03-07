import axios from 'axios';

const API = process.env.REACT_APP_API || 'https://quedape.com/etv/api';

//Lista peliculas
export const getVideos = async () => {
  return await axios.get(`${API}/v1/videos`);
};

//Lista series
export const getSeries = async () => {
  return await axios.get(`${API}/v1/series`);
};

//Lista Seasons
export const getSeasons = async (id) => {
  return await axios.get(`${API}/v1/seasons/serie/${id}`);
};

//Lista Chapters
export const getChapters = async (id) => {
  return await axios.get(`${API}/v1/chapters/season/${id}`);
};
