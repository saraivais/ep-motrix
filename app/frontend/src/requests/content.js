import axios from 'axios';

const baseURL = 'http://localhost:4001';

export async function getAllContent() {
  const response = await axios({
    method: 'get',
    url: `${baseURL}/content`,
  });
  return response.data;
}

export async function getOneContent(id) {
  const response = await axios({
    method: 'get',
    url: `${baseURL}/content/${id}`,
  });
  return response.data;
}

export async function editOneContent(id, token, { title, body }) {
  const response = await axios({
    method: 'patch',
    url: `${baseURL}/content/${id}`,
    headers: { Authorization: token },
    data: {
      title,
      body,
    },
  });
  return response;
}

export async function createContent(token, { title, body }) {
  const response = await axios({
    method: 'post',
    url: `${baseURL}/content`,
    headers: { Authorization: token },
    data: {
      title,
      body,
    },
  });
  return response;
}

export async function deleteOne(id, token) {
  const response = await axios({
    method: 'delete',
    url: `${baseURL}/content/${id}`,
    headers: { Authorization: token },
  });
  return response;
}

export async function massDelete(token, deleteMany) {
  const response = await axios({
    method: 'delete',
    url: `${baseURL}/content/`,
    headers: { Authorization: token },
    data: {
      deleteMany,
    },
  });
  return response;
}
