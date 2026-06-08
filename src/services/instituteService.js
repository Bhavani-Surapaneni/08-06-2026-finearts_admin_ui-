


import api from "./api";

/* =====================================================
   FIREBASE INSTITUTE FLOW
===================================================== */

/* LOGIN */
export const instituteLogin = async (firebaseToken) => {
  const res = await api.post(
    "/institutes/login",
    {},
    {
      headers: {
        Authorization: `Bearer ${firebaseToken}`,
      },
    }
  );

  return res.data;
};

/* CREATE INSTITUTE */
export const createInstitute = async (formData) => {
  const res = await api.post(
    "/institutes/create-test",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};

/* COMPLETE PROFILE */
export const completeInstituteProfile = async (
  formData,
  firebaseToken
) => {
  const res = await api.post(
    "/institutes/create-profile",
    formData,
    {
      headers: {
        Authorization: `Bearer ${firebaseToken}`,
      },
    }
  );

  return res.data;
};

/* GET PROFILE */
export const getInstituteProfile = async (
  firebaseToken
) => {
  const res = await api.get(
    "/institutes/profile",
    {
      headers: {
        Authorization: `Bearer ${firebaseToken}`,
      },
    }
  );

  return res.data;
};

/* REQUEST APPROVAL */
export const requestApproval = async (
  firebaseToken
) => {
  const res = await api.post(
    "/institutes/request-approval",
    {},
    {
      headers: {
        Authorization: `Bearer ${firebaseToken}`,
      },
    }
  );

  return res.data;
};

/* =====================================================
   ADMIN FLOW
===================================================== */

/* CREATE */
export const adminCreateInstitute = async (
  formData,
  adminToken
) => {
  const res = await api.post(
    "/institutes/admin/create",
    formData,
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};

/* UPDATE */
export const updateInstitute = async (
  id,
  formData,
  adminToken
) => {
  const res = await api.put(
    `/institutes/${id}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return res.data;
};

/* DELETE */
export const deleteInstitute = async (
  id,
  adminToken
) => {
  const res = await api.delete(
    `/institutes/${id}`,
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }
  );

  return res.data;
};

/* APPROVE */
export const approveInstitute = async (
  id,
  adminToken
) => {
  const res = await api.patch(
    `/institutes/admin/${id}/approve`,
    {},
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }
  );

  return res.data;
};

/* REJECT */
export const rejectInstitute = async (
  id,
  adminToken
) => {
  const res = await api.patch(
    `/institutes/admin/${id}/reject`,
    {},
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }
  );

  return res.data;
};

/* COMPATIBILITY FUNCTION */
export const updateInstituteApproval = async (
  id,
  status,
  adminToken
) => {
  const endpoint =
    status === "APPROVED"
      ? `/institutes/admin/${id}/approve`
      : `/institutes/admin/${id}/reject`;

  const res = await api.patch(
    endpoint,
    {},
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }
  );

  return res.data;
};

/* PENDING */
export const getPendingInstitutes = async (
  adminToken
) => {
  const res = await api.get(
    "/institutes/admin/pending",
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }
  );

  return res.data;
};

/* APPROVED */
export const getApprovedInstitutes = async (
  adminToken
) => {
  const res = await api.get(
    "/institutes/admin/approved",
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }
  );

  return res.data;
};

/* REJECTED */
export const getRejectedInstitutes = async (
  adminToken
) => {
  const res = await api.get(
    "/institutes/admin/rejected",
    {
      headers: {
        Authorization: `Bearer ${adminToken}`,
      },
    }
  );

  return res.data;
};

/* =====================================================
   COMMON
===================================================== */

export const getAllInstitutes = async (
  params = {}
) => {
  const res = await api.get(
    "/institutes",
    {
      params,
    }
  );

  return res.data;
};

export const getInstituteById = async (
  id
) => {
  const res = await api.get(
    `/institutes/${id}`
  );

  return res.data;
};

export const getInstituteTrainers =
  async (token) => {
    const res = await api.get(
      "/trainers/institute",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  };
/* =====================================================
   DASHBOARD
===================================================== */

export const getDashboard = async (
  token
) => {
  const res = await api.get(
    "/institutes/dashboard",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

/* =====================================================
   PROFILE
===================================================== */

export const getProfile = async (
  token
) => {
  const res = await api.get(
    "/institutes/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

/* =====================================================
   STUDENTS
===================================================== */

export const getStudents = async (
  token
) => {
  const res = await api.get(
    "/institutes/students",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

/* =====================================================
   BOOKINGS
===================================================== */

export const getBookings = async (
  token
) => {
  const res = await api.get(
    "/institutes/bookings",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

/* =====================================================
   INSTITUTE TRAINERS
===================================================== */

export const createInstituteTrainer = async (
  formData,
  token
) => {
  const res = await api.post(
    "/trainers",
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

export const updateInstituteTrainer = async (
  id,
  formData,
  token
) => {
  const res = await api.put(
    `/trainers/${id}`,
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

export const deleteInstituteTrainer = async (
  id,
  token
) => {
  const res = await api.delete(
    `/trainers/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

