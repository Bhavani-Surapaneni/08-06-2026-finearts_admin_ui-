import axios from "axios";

const API_URL = "http://localhost:5000/api/testimonials";

export const getTestimonials = async () => {
  const res = await axios.get(API_URL);
  return res.data.data;
};

export const createTestimonial = async (formData, token) => {
  const res = await axios.post(API_URL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const updateTestimonial = async (
  id,
  formData,
  token
) => {
  const res = await axios.put(
    `${API_URL}/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};

export const deleteTestimonial = async (
  id,
  token
) => {
  const res = await axios.delete(
    `${API_URL}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};