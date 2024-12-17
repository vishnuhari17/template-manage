import axios from 'axios';

// const API_BASE_URL = 'http://localhost:3000/api';

const API_BASE_URL = 'https://assignment-backend-c0pp.onrender.com/api';

export const getTemplates = async () => {
  const response = await axios.get(`${API_BASE_URL}/templates`);
  return response.data;
};

export const getTemplate = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/templates/${id}`);
  return response.data;
}

export const createTemplate = async (template) => {
  const response = await axios.post(`${API_BASE_URL}/templates`, template);
  return response.data;
};

export const updateTemplate = async (id, template) => {
  const response = await axios.put(`${API_BASE_URL}/templates/${id}`, template);
  return response.data;
};

export const deleteTemplate = async (id) => {
  await axios.delete(`${API_BASE_URL}/templates/${id}`);
};