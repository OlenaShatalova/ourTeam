import axios from 'axios';

export async function getPhotos(query, page) {
  const BASE_URL = 'https://api.unsplash.com';
  const END_POINT = '/search/photos';
  const KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';
  const params = {
    params: {
      query,
      page,
      per_page: 12,
      orientation: 'portrait',
      client_id: KEY,
    },
  };
  try {
    const response = await axios.get(`${BASE_URL}${END_POINT}`, params);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
