// // import axios from "axios";
// // import { auth } from "../config/firebase";

// // const API_URL = "http://localhost:5000/api/bookings";

// // /* ───────────── GET FRESH TOKEN ───────────── */
// // const getAuthHeaders = async () => {
// //   const user = auth.currentUser;

// //   if (!user) {
// //     throw new Error("User not logged in");
// //   }

// //   // 🔥 FORCE FRESH TOKEN (VERY IMPORTANT)
// //   const token = await user.getIdToken(true);

// //   return {
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //     },
// //   };
// // };

// // /* ───────────── GET MY BOOKINGS ───────────── */
// // export const getMyBookings = async () => {
// //   const res = await axios.get(
// //     `${API_URL}/my`,
// //     await getAuthHeaders()
// //   );

// //   return res.data;
// // };

// // /* ───────────── CONFIRM ───────────── */
// // export const confirmBooking = async (id) => {
// //   const res = await axios.patch(
// //     `${API_URL}/${id}/confirm`,
// //     {},
// //     await getAuthHeaders()
// //   );

// //   return res.data;
// // };

// // /* ───────────── CANCEL ───────────── */
// // export const cancelBooking = async (id) => {
// //   const res = await axios.patch(
// //     `${API_URL}/${id}/cancel`,
// //     {},
// //     await getAuthHeaders()
// //   );

// //   return res.data;
// // };

// // /* ───────────── COMPLETE ───────────── */
// // export const completeBooking = async (id) => {
// //   const res = await axios.patch(
// //     `${API_URL}/${id}/complete`,
// //     {},
// //     await getAuthHeaders()
// //   );

// //   return res.data;
// // };
// import axios from "axios";
// import { auth } from "../config/firebase";

// const API_URL = "http://localhost:5000/api/bookings";

// /* ───────────────── GET AUTH HEADERS ───────────────── */
// const getAuthHeaders = async () => {
//   const user = auth.currentUser;

//   if (!user) {
//     throw new Error("User not logged in");
//   }

//   const token = await user.getIdToken(true);

//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// /* ───────────────── GET MY BOOKINGS ───────────────── */
// export const getMyBookings = async () => {
//   const res = await axios.get(
//     `${API_URL}/my`,
//     await getAuthHeaders()
//   );

//   return res.data;
// };

// /* ───────────────── GET ALL BOOKINGS (ADMIN) ───────────────── */
// export const getAllBookings = async () => {
//   const res = await axios.get(
//     `${API_URL}`,
//     await getAuthHeaders()
//   );

//   return res.data;
// };

// /* ───────────────── CONFIRM BOOKING ───────────────── */
// export const confirmBooking = async (id) => {
//   const res = await axios.patch(
//     `${API_URL}/${id}/confirm`,
//     {},
//     await getAuthHeaders()
//   );

//   return res.data;
// };

// /* ───────────────── CANCEL BOOKING ───────────────── */
// export const cancelBooking = async (id) => {
//   const res = await axios.patch(
//     `${API_URL}/${id}/cancel`,
//     {},
//     await getAuthHeaders()
//   );

//   return res.data;
// };

// /* ───────────────── COMPLETE BOOKING ───────────────── */
// export const completeBooking = async (id) => {
//   const res = await axios.patch(
//     `${API_URL}/${id}/complete`,
//     {},
//     await getAuthHeaders()
//   );

//   return res.data;
// };
// import axios from "axios";
// import { auth } from "../config/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// const API_URL = "http://localhost:5000/api/bookings";

// /* ───────────────── WAIT FOR AUTH USER ───────────────── */
// const getCurrentUser = () => {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(
//       auth,
//       (user) => {
//         unsubscribe();
//         resolve(user);
//       },
//       (error) => reject(error)
//     );
//   });
// };

// /* ───────────────── GET AUTH HEADERS ───────────────── */
// const getAuthHeaders = async () => {
//   const user = await getCurrentUser();

//   if (!user) {
//     throw new Error("User not logged in");
//   }

//   const token = await user.getIdToken(true);

//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// /* ───────────────── GET MY BOOKINGS ───────────────── */
// export const getMyBookings = async () => {
//   const res = await axios.get(
//     `${API_URL}/my`,
//     await getAuthHeaders()
//   );

//   return res.data;
// };

// /* ───────────────── GET ALL BOOKINGS (ADMIN) ───────────────── */
// export const getAllBookings = async () => {
//   const res = await axios.get(
//     `${API_URL}`,
//     await getAuthHeaders()
//   );

//   return res.data;
// };

// /* ───────────────── CONFIRM BOOKING ───────────────── */
// export const confirmBooking = async (id) => {
//   const res = await axios.patch(
//     `${API_URL}/${id}/confirm`,
//     {},
//     await getAuthHeaders()
//   );

//   return res.data;
// };

// /* ───────────────── CANCEL BOOKING ───────────────── */
// export const cancelBooking = async (id) => {
//   const res = await axios.patch(
//     `${API_URL}/${id}/cancel`,
//     {},
//     await getAuthHeaders()
//   );

//   return res.data;
// };

// /* ───────────────── COMPLETE BOOKING ───────────────── */
// export const completeBooking = async (id) => {
//   const res = await axios.patch(
//     `${API_URL}/${id}/complete`,
//     {},
//     await getAuthHeaders()
//   );

//   return res.data;
// };
// import axios from "axios";
// import { auth } from "../config/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// const API_URL = "http://localhost:5000/api/bookings";

// /* ───────────────── GET CURRENT USER (SAFE) ───────────────── */
// const getCurrentUser = () => {
//   return new Promise((resolve) => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       unsubscribe();
//       resolve(user || null);
//     });
//   });
// };

// /* ───────────────── GET AUTH HEADERS ───────────────── */
// const getAuthHeaders = async () => {
//   const user = await getCurrentUser();

//   if (!user) {
//     throw new Error("User not logged in");
//   }

//   const token = await user.getIdToken();

//   if (!token) {
//     throw new Error("Token not available");
//   }

//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// /* ───────────────── GET MY BOOKINGS ───────────────── */
// export const getMyBookings = async () => {
//   const config = await getAuthHeaders();

//   const res = await axios.get(
//     `${API_URL}/my`,
//     config
//   );

//   return res.data;
// };

// /* ───────────────── GET ALL BOOKINGS (ADMIN) ───────────────── */
// export const getAllBookings = async () => {
//   const config = await getAuthHeaders();

//   const res = await axios.get(
//     `${API_URL}`,
//     config
//   );

//   return res.data;
// };

// /* ───────────────── CONFIRM BOOKING ───────────────── */
// export const confirmBooking = async (id) => {
//   const config = await getAuthHeaders();

//   const res = await axios.patch(
//     `${API_URL}/${id}/confirm`,
//     {},
//     config
//   );

//   return res.data;
// };

// /* ───────────────── CANCEL BOOKING ───────────────── */
// export const cancelBooking = async (id) => {
//   const config = await getAuthHeaders();

//   const res = await axios.patch(
//     `${API_URL}/${id}/cancel`,
// //     {},
// //     config
// //   );

// //   return res.data;
// // };

// // /* ───────────────── COMPLETE BOOKING ───────────────── */
// // export const completeBooking = async (id) => {
// //   const config = await getAuthHeaders();

// //   const res = await axios.patch(
// //     `${API_URL}/${id}/complete`,
// //     {},
// //     config
// //   );

// //   return res.data;
// // }; 

// // import axios from "axios";
// // import { auth } from "../config/firebase";

// // const API_URL = "http://localhost:5000/api/bookings";

// // /* ───────────────── GET TOKEN DIRECTLY (STABLE) ───────────────── */
// // const getToken = async () => {
// //   const user = auth.currentUser;

// //   if (!user) {
// //     throw new Error("User not logged in");
// //   }

// //   return await user.getIdToken();
// // };

// // /* ───────────────── AXIOS CONFIG ───────────────── */
// // const getConfig = async () => {
// //   const token = await getToken();

// //   return {
// //     headers: {
// //       Authorization: `Bearer ${token}`,
// //     },
// //   };
// // };

// // /* ───────────────── GET MY BOOKINGS ───────────────── */
// // export const getMyBookings = async () => {
// //   const res = await axios.get(
// //     `${API_URL}/my`,
// //     await getConfig()
// //   );

// //   return res.data;
// // };

// // /* ───────────────── GET ALL BOOKINGS ───────────────── */
// // export const getAllBookings = async () => {
// //   const res = await axios.get(
// //     `${API_URL}`,
// //     await getConfig()
// //   );

// //   return res.data;
// // };

// // /* ───────────────── CONFIRM ───────────────── */
// // export const confirmBooking = async (id) => {
// //   const res = await axios.patch(
// //     `${API_URL}/${id}/confirm`,
// //     {},
// //     await getConfig()
// //   );

// //   return res.data;
// // };

// // /* ───────────────── CANCEL ───────────────── */
// // export const cancelBooking = async (id) => {
// //   const res = await axios.patch(
// //     `${API_URL}/${id}/cancel`,
// //     {},
// //     await getConfig()
// //   );

// //   return res.data;
// // };

// // /* ───────────────── COMPLETE ───────────────── */
// // export const completeBooking = async (id) => {
// //   const res = await axios.patch(
// //     `${API_URL}/${id}/complete`,
// //     {},
// //     await getConfig()
// //   );

// //   return res.data;
// // };
// import axios from "axios";
// import { auth } from "../config/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// const API_URL = "http://localhost:5000/api/bookings";

// /* ───────── WAIT FOR AUTH READY ───────── */
// const getCurrentUser = () => {
//   return new Promise((resolve) => {
//     const unsub = onAuthStateChanged(auth, (user) => {
//       unsub();
//       resolve(user);
//     });
//   });
// };

// /* ───────── GET TOKEN ───────── */
// const getAuthHeaders = async () => {
//   const user = await getCurrentUser();

//   if (!user) {
//     throw new Error("User not logged in");
//   }

//   const token = await user.getIdToken();

//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// /* ───────── GET MY BOOKINGS ───────── */
// export const getMyBookings = async () => {
//   const config = await getAuthHeaders();
//   const res = await axios.get(`${API_URL}/my`, config);
//   return res.data;
// };

// /* ───────── GET ALL BOOKINGS (ADMIN) ───────── */
// export const getAllBookings = async () => {
//   const config = await getAuthHeaders();
//   const res = await axios.get(`${API_URL}`, config);
//   return res.data;
// };

// /* ───────── STATUS ACTIONS ───────── */
// export const confirmBooking = async (id) => {
//   const config = await getAuthHeaders();
//   const res = await axios.patch(`${API_URL}/${id}/confirm`, {}, config);
//   return res.data;
// };

// export const cancelBooking = async (id) => {
//   const config = await getAuthHeaders();
//   const res = await axios.patch(`${API_URL}/${id}/cancel`, {}, config);
//   return res.data;
// };

// export const completeBooking = async (id) => {
//   const config = await getAuthHeaders();
//   const res = await axios.patch(`${API_URL}/${id}/complete`, {}, config);
//   return res.data;
// };

// import axios from "axios";
// import { auth } from "../config/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// const API_URL = "http://localhost:5000/api/bookings";

// /* ─────────────────────────────────────────────
//    WAIT FOR FIREBASE AUTH
// ───────────────────────────────────────────── */
// const waitForAuth = () => {
//   return new Promise((resolve) => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       unsubscribe();
//       resolve(user);
//     });
//   });
// };

// /* ─────────────────────────────────────────────
//    GET AUTH HEADERS
// ───────────────────────────────────────────── */
// const getAuthHeaders = async () => {
//   let user = auth.currentUser;

//   // wait if firebase not ready
//   if (!user) {
//     user = await waitForAuth();
//   }

//   if (!user) {
//     throw new Error("User not logged in");
//   }

//   const token = await user.getIdToken(true);

//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// /* ─────────────────────────────────────────────
//    GET MY BOOKINGS
// ───────────────────────────────────────────── */
// export const getMyBookings = async () => {
//   const config = await getAuthHeaders();

//   const response = await axios.get(
//     `${API_URL}/my`,
//     config
//   );

//   return response.data;
// };

// /* ─────────────────────────────────────────────
//    GET ALL BOOKINGS (ADMIN)
// ───────────────────────────────────────────── */
// export const getAllBookings = async () => {
//   const config = await getAuthHeaders();

//   const response = await axios.get(
//     API_URL,
//     config
//   );

//   return response.data;
// };

// /* ─────────────────────────────────────────────
//    CONFIRM BOOKING
// ───────────────────────────────────────────── */
// export const confirmBooking = async (id) => {
//   const config = await getAuthHeaders();

//   const response = await axios.patch(
//     `${API_URL}/${id}/confirm`,
//     {},
//     config
//   );

//   return response.data;
// };

// /* ─────────────────────────────────────────────
//    CANCEL BOOKING
// ───────────────────────────────────────────── */
// export const cancelBooking = async (id) => {
//   const config = await getAuthHeaders();

//   const response = await axios.patch(
//     `${API_URL}/${id}/cancel`,
//     {},
//     config
//   );

//   return response.data;
// };

// /* ─────────────────────────────────────────────
//    COMPLETE BOOKING
// ───────────────────────────────────────────── */
// export const completeBooking = async (id) => {
//   const config = await getAuthHeaders();

//   const response = await axios.patch(
//     `${API_URL}/${id}/complete`,
//     {},
//     config
//   );

//   return response.data;
// };


// import axios from "axios";
// import { auth } from "../config/firebase";

// const API_URL = "http://localhost:5000/api/bookings";

// /* ─────────────────────────────────────────────
//    WAIT FOR FIREBASE USER
// ───────────────────────────────────────────── */
// const waitForFirebaseUser = () => {
//   return new Promise((resolve, reject) => {

//     const timeout = setTimeout(() => {
//       reject(new Error("Firebase auth timeout"));
//     }, 10000);

//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       clearTimeout(timeout);
//       unsubscribe();

//       resolve(user);
//     });
//   });
// };

// /* ─────────────────────────────────────────────
//    GET AUTH CONFIG
// ───────────────────────────────────────────── */
// const getAuthConfig = async () => {

//   let user = auth.currentUser;

//   // WAIT FOR FIREBASE RESTORE
//   if (!user) {
//     user = await waitForFirebaseUser();
//   }

//   // STILL NO USER
//   if (!user) {
//     throw new Error("User not logged in");
//   }

//   // FORCE REFRESH TOKEN
//   const token = await user.getIdToken(true);

//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// /* ─────────────────────────────────────────────
//    GET ALL BOOKINGS
// ───────────────────────────────────────────── */
// export const getAllBookings = async () => {

//   const config = await getAuthConfig();

//   const response = await axios.get(
//     API_URL,
//     config
//   );

//   return response.data;
// };

// /* ─────────────────────────────────────────────
//    GET MY BOOKINGS
// ───────────────────────────────────────────── */
// export const getMyBookings = async () => {

//   const config = await getAuthConfig();

//   const response = await axios.get(
//     `${API_URL}/my`,
//     config
//   );

//   return response.data;
// };

// /* ─────────────────────────────────────────────
//    CONFIRM BOOKING
// ───────────────────────────────────────────── */
// export const confirmBooking = async (id) => {

//   const config = await getAuthConfig();

//   const response = await axios.patch(
//     `${API_URL}/${id}/confirm`,
//     {},
//     config
//   );

//   return response.data;
// };

// /* ─────────────────────────────────────────────
//    CANCEL BOOKING
// ───────────────────────────────────────────── */
// export const cancelBooking = async (id) => {

//   const config = await getAuthConfig();

//   const response = await axios.patch(
//     `${API_URL}/${id}/cancel`,
//     {},
//     config
//   );

//   return response.data;
// };

// /* ─────────────────────────────────────────────
//    COMPLETE BOOKING
// ───────────────────────────────────────────── */
// export const completeBooking = async (id) => {

//   const config = await getAuthConfig();

//   const response = await axios.patch(
//     `${API_URL}/${id}/complete`,
//     {},
//     config
//   );

//   return response.data;
// };

import axios from "axios";

const API_URL = "http://localhost:5000/api/bookings";

/* GET ADMIN TOKEN */
const getAdminConfig = () => {

  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Admin token not found");
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

/* GET ALL BOOKINGS */
export const getAllBookings = async () => {

  const config = getAdminConfig();

  const response = await axios.get(
    API_URL,
    config
  );

  return response.data;
};

/* CONFIRM BOOKING */
export const confirmBooking = async (id) => {

  const config = getAdminConfig();

  const response = await axios.patch(
    `${API_URL}/${id}/confirm`,
    {},
    config
  );

  return response.data;
};

/* CANCEL BOOKING */
export const cancelBooking = async (id) => {

  const config = getAdminConfig();

  const response = await axios.patch(
    `${API_URL}/${id}/cancel`,
    {},
    config
  );

  return response.data;
};

/* COMPLETE BOOKING */
export const completeBooking = async (id) => {

  const config = getAdminConfig();

  const response = await axios.patch(
    `${API_URL}/${id}/complete`,
    {},
    config
  );

  return response.data;
};