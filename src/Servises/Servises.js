import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';

export const getAllPhotos = async (query, page = 1) => {
  const params = new URLSearchParams({
    q: query,
    page,
    per_page: 20,
    key: '41241875-626c3239215a842e842cb8043',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const { data } = await axios.get(`${BASE_URL}/?${params}`);
  return data;
};
