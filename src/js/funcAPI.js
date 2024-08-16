import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function getReviews() {
  const { data } = await axios.get('reviews');
  return data;
}

export async function addRequest(request) {
  return (await axios.post('requests', request)).data;
}
