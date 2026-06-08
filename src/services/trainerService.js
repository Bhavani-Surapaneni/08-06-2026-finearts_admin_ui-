import axios from "axios";

const API_URL = "http://localhost:5000/api/trainers";

const authConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const getAllTrainers = async (token) => {
  const res = await axios.get(
    API_URL,
    authConfig(token)
  );

  return res.data;
};

export const getTrainerById = async (
  id,
  token
) => {
  const res = await axios.get(
    `${API_URL}/${id}`,
    authConfig(token)
  );

  return res.data;
};

/* =========================
   CREATE TRAINER
========================= */

export const createTrainer = async (
  data,
  token
) => {
  const res = await axios.post(
    `${API_URL}/admin-create`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return res.data;
};

/* =========================
   UPDATE TRAINER
========================= */

export const updateTrainer = async (
  id,
  data,
  token
) => {
  const res = await axios.put(
    `${API_URL}/admin-update/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return res.data;
};

/* =========================
   DELETE TRAINER
========================= */

export const deleteTrainer = async (
  id,
  token
) => {
  const res = await axios.delete(
    `${API_URL}/admin-delete/${id}`,
    authConfig(token)
  );

  return res.data;
};

/* =========================
   APPROVE TRAINER
========================= */

export const approveTrainer = async (
  id,
  token
) => {
  const res = await axios.put(
    `${API_URL}/admin/${id}/approve`,
    {},
    authConfig(token)
  );

  return res.data;
};

/* =========================
   REJECT TRAINER
========================= */

export const rejectTrainer = async (
  id,
  token
) => {
  const res = await axios.put(
    `${API_URL}/admin/${id}/reject`,
    {},
    authConfig(token)
  );

  return res.data;
};

/* =========================
   SUSPEND TRAINER
========================= */

export const suspendTrainer = async (
  id,
  token
) => {
  const res = await axios.put(
    `${API_URL}/admin/${id}/suspend`,
    {},
    authConfig(token)
  );

  return res.data;
};