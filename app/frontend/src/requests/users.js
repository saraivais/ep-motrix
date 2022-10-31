import axios from 'axios';

const baseURL = 'http://localhost:4001';

export async function postLogin({ email, password }) {
  const response = await axios({
    method: 'post',
    url: `${baseURL}/users/login`,
    data: {
      email,
      password,
    },
  });
  return response.data;
}

export async function createUser({ email, password }) {
  const response = await axios({
    method: 'post',
    url: `${baseURL}/users`,
    data: {
      email,
      password,
    },
  });
  return response.data;
}
