// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { adminLogin } from "../services/auth.service";

// // function Login() {
// //   const navigate = useNavigate();

// //   const [formData, setFormData] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await adminLogin(formData);

// //       console.log(res);

// //       localStorage.setItem("token", res.token);

// //       navigate("/dashboard");

// //     } catch (err) {
// //       console.log(err.response?.data || err.message);

// //       alert("Login Failed");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-screen">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="flex flex-col gap-4 p-6 border rounded"
// //       >
// //         <h2>Admin Login</h2>

// //         <input
// //           type="email"
// //           name="email"
// //           placeholder="Email"
// //           onChange={handleChange}
// //         />

// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           onChange={handleChange}
// //         />

// //         <button type="submit">
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { adminLogin } from "../services/auth.service";

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await adminLogin(formData);

//       console.log("LOGIN RESPONSE:", res);

//       const token =
//         res.token ||
//         res.data?.token ||
//         res.accessToken;

//       if (!token) {
//         alert("Token not found in response");
//         return;
//       }

//       localStorage.setItem("token", token);

//       navigate("/dashboard");

//     } catch (err) {
//       console.log(err.response?.data || err.message);

//       alert("Login Failed");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-4 p-6 border rounded"
//       >
//         <h2>Admin Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />

//         <button type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// import { useState } from "react";
// import { adminLogin } from "../services/auth.service";

// function Login() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   // const handleChange = (e) => {
//   //   setFormData({
//   //     ...formData,
//   //     [e.target.name]: e.target.value,
//   //   });
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   try {
//   //     const res = await adminLogin(formData);

//   //     // ✅ Correct backend structure: res.data.data.token
//   //     const token = res?.data?.data?.token;

//   //     if (!token) {
//   //       alert("Token not received from server");
//   //       return;
//   //     }

//   //     // Store JWT token
//   //     localStorage.setItem("token", token);

//   //     // optional: store admin info
//   //     localStorage.setItem(
//   //       "admin",
//   //       JSON.stringify(res.data.data.admin)
//   //     );

//   //     window.location.href = "/dashboard";
//   //   } catch (err) {
//   //     console.log(err.response?.data || err.message);
//   //     alert("Login Failed");
//   //   }
//   // };
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const res = await adminLogin(formData);

//     console.log("FULL LOGIN RESPONSE:", res);

//     const token =
//       res?.token ||
//       res?.data?.token ||
//       res?.data?.data?.token;

//     if (!token) {
//       alert("Token not received from server");
//       return;
//     }

//     // SAVE TOKEN
//     localStorage.setItem("token", token);

//     // SAVE ADMIN DATA
//     const adminData =
//       res?.admin ||
//       res?.data?.admin ||
//       res?.data?.data?.admin;

//     if (adminData) {
//       localStorage.setItem(
//         "admin",
//         JSON.stringify(adminData)
//       );
//     }

//     // REDIRECT
//     window.location.href = "/dashboard";

//   } catch (err) {
//     console.log(
//       "LOGIN ERROR:",
//       err.response?.data || err.message
//     );

//     alert(
//       err.response?.data?.message ||
//       "Login Failed"
//     );
//   }
// };



// import { useState } from "react";
// import { adminLogin } from "../services/auth.service";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const res = await adminLogin(formData);

//       console.log("FULL LOGIN RESPONSE:", res);

//       const token =
//         res?.token ||
//         res?.data?.token ||
//         res?.data?.data?.token;

//       if (!token) {
//         alert("Token not received from server");
//         return;
//       }

//       // Save login details
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", "ADMIN");

//       console.log(
//         "TOKEN:",
//         localStorage.getItem("token")
//       );

//       console.log(
//         "ROLE:",
//         localStorage.getItem("role")
//       );

//       // Redirect to admin dashboard
//       window.location.href = "/dashboard";

//     } catch (err) {
//       console.log(
//         err?.response?.data || err.message
//       );

//       alert("Login Failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background-dark px-4">
//       <div className="w-full max-w-md glass-effect rounded-3xl p-8 border border-white/10 shadow-2xl">

//         <div className="flex flex-col items-center mb-8">
//           <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-4">
//             <span className="text-white text-3xl font-bold">
//               DP
//             </span>
//           </div>

//           <h1 className="text-3xl font-bold gradient-text">
//             Admin Login
//           </h1>

//           <p className="text-gray-400 text-sm mt-2">
//             Welcome back to Dance Platform
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-5"
//         >
//           <div>
//             <label className="block text-sm text-gray-300 mb-2">
//               Email
//             </label>

//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-300 mb-2">
//               Password
//             </label>

//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 rounded-xl gradient-bg text-white font-semibold disabled:opacity-50"
//           >
//             {loading
//               ? "Logging in..."
//               : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;



// import { useState } from "react";
// import { adminLogin } from "../services/auth.service";

// function Login() {
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const res = await adminLogin(formData);

//       console.log("FULL LOGIN RESPONSE:", res);

//       const token =
//         res?.token ||
//         res?.data?.token ||
//         res?.data?.data?.token;

//       if (!token) {
//         alert("Token not received from server");
//         return;
//       }

//       /* SAVE LOGIN DATA */
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", "ADMIN");

//       console.log(
//         "TOKEN:",
//         localStorage.getItem("token")
//       );

//       console.log(
//         "ROLE:",
//         localStorage.getItem("role")
//       );

//       /* REDIRECT */
//       window.location.href = "/dashboard";

//     } catch (err) {
//       console.error(
//         err?.response?.data || err.message
//       );

//       alert("Login Failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background-dark px-4">
//       <div className="w-full max-w-md glass-effect rounded-3xl p-8 border border-white/10 shadow-2xl">

//         {/* Logo */}
//         <div className="flex flex-col items-center mb-8">
//           <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-4">
//             <span className="text-white text-3xl font-bold">
//               DP
//             </span>
//           </div>

//           <h1 className="text-3xl font-bold gradient-text">
//             Admin Login
//           </h1>

//           <p className="text-gray-400 text-sm mt-2">
//             Welcome back to Dance Platform
//           </p>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-5"
//         >
//           <div>
//             <label className="block text-sm text-gray-300 mb-2">
//               Email
//             </label>

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-300 mb-2">
//               Password
//             </label>

//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 rounded-xl gradient-bg text-white font-semibold disabled:opacity-50"
//           >
//             {loading
//               ? "Logging in..."
//               : "Login"}
//           </button>
//         </form>

//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { adminLogin } from "../services/auth.service";

function Login() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await adminLogin(formData);

      console.log("FULL LOGIN RESPONSE:", res);

      const token =
        res?.token ||
        res?.data?.token ||
        res?.data?.data?.token;

      if (!token) {
        alert("Token not received from server");
        return;
      }

      /* SAVE LOGIN DATA */
      localStorage.setItem("token", token);
      localStorage.setItem("role", "ADMIN");

      console.log(
        "TOKEN:",
        localStorage.getItem("token")
      );

      console.log(
        "ROLE:",
        localStorage.getItem("role")
      );

      /* REDIRECT */
      window.location.href = "/dashboard";

    } catch (err) {
      console.error(
        err?.response?.data || err.message
      );

      alert("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-dark px-4">
      <div className="w-full max-w-md glass-effect rounded-3xl p-8 border border-white/10 shadow-2xl">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-4">
            <span className="text-white text-3xl font-bold">
              DP
            </span>
          </div>

          <h1 className="text-3xl font-bold gradient-text">
            Admin Login
          </h1>

          <p className="text-gray-400 text-sm mt-2">
            Welcome back to Dance Platform
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl gradient-bg text-white font-semibold disabled:opacity-50"
          >
            {loading
              ? "Logging in..."
              : "Login"}
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;