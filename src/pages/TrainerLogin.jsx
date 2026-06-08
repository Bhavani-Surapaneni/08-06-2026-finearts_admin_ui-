// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// function TrainerLogin() {
//   const navigate = useNavigate();
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");

//   const sendOtp = (e) => {
//     e.preventDefault();

//     if (!phone) {
//       toast.error("Enter mobile number");
//       return;
//     }

//     toast.success("Use test OTP: 123456");
//   };

//   const verifyOtp = (e) => {
//     e.preventDefault();

//     if (otp !== "123456") {
//       toast.error("Invalid OTP");
//       return;
//     }

//     localStorage.setItem("token", "trainer-test-token");
//     localStorage.setItem("role", "TRAINER");

//     toast.success("Trainer login successful");
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen bg-[#08080c] flex items-center justify-center">
//       <div className="w-[430px] bg-[#18181d] border border-[#33333a] rounded-3xl p-10">
//         <h1 className="text-4xl font-bold text-center text-purple-400 mb-2">
//           Trainer Login
//         </h1>

//         <p className="text-center text-gray-400 mb-8">Test OTP login</p>

//         <form onSubmit={sendOtp}>
//           <label className="text-gray-300">Mobile Number</label>
//           <input
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="+919999999999"
//             className="w-full mt-2 mb-5 p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white outline-none"
//           />

//           <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
//             Send OTP
//           </button>
//         </form>

//         <form onSubmit={verifyOtp} className="mt-6">
//           <label className="text-gray-300">OTP</label>
//           <input
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             placeholder="Enter OTP 123456"
//             className="w-full mt-2 mb-5 p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white outline-none"
//           />

//           <button className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default TrainerLogin;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function TrainerLogin() {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const sendOtp = (e) => {
    e.preventDefault();

    if (!phone) {
      toast.error("Enter mobile number");
      return;
    }

    toast.success("Use test OTP: 123456");
  };

  const verifyOtp = (e) => {
    e.preventDefault();

    if (otp !== "123456") {
      toast.error("Invalid OTP");
      return;
    }

    /* SAVE TRAINER LOGIN */
    localStorage.setItem(
      "token",
      "trainer-test-token"
    );

    localStorage.setItem(
      "role",
      "TRAINER"
    );

    toast.success(
      "Trainer login successful"
    );

    /* GO TO TRAINER DASHBOARD */
    navigate("/trainer/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#08080c] flex items-center justify-center">
      <div className="w-[430px] bg-[#18181d] border border-[#33333a] rounded-3xl p-10 shadow-2xl">

        <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold mb-6">
          TR
        </div>

        <h1 className="text-4xl font-bold text-center text-purple-400 mb-2">
          Trainer Login
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Test OTP Login
        </p>

        <form onSubmit={sendOtp}>
          <label className="text-gray-300">
            Mobile Number
          </label>

          <input
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            placeholder="+919999999999"
            className="w-full mt-2 mb-5 p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white outline-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold"
          >
            Send OTP
          </button>
        </form>

        <form
          onSubmit={verifyOtp}
          className="mt-6"
        >
          <label className="text-gray-300">
            OTP
          </label>

          <input
            value={otp}
            onChange={(e) =>
              setOtp(e.target.value)
            }
            placeholder="Enter OTP 123456"
            className="w-full mt-2 mb-5 p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white outline-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold"
          >
            Login
          </button>
        </form>

      </div>
    </div>
  );
}

export default TrainerLogin;