import axios from "axios";

const API_URL = "http://localhost:5000/faqs";

export const getFAQs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addFAQ = async (faq) => {
  const response = await axios.post(`${API_URL}/add`, faq);
  return response.data;
};

export const updateFAQ = async (id, faq) => {
  const response = await axios.put(`${API_URL}/${id}`, faq);
  return response.data;
};

export const deleteFAQ = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};


