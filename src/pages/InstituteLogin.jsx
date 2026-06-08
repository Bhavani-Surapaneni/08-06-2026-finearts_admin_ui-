import { useNavigate } from "react-router-dom";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../config/firebase";

export default function InstituteLogin() {
  const navigate = useNavigate();

 const handleGoogleLogin = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(
      auth,
      provider
    );

    const firebaseToken =
      await result.user.getIdToken();

    localStorage.setItem(
      "token",
      firebaseToken
    );

    localStorage.setItem(
      "role",
      "INSTITUTE"
    );

    toast.success(
      "Login Successful"
    );

    try {

      const res = await fetch(
        "http://localhost:5000/api/institutes/profile",
        {
          headers: {
            Authorization: `Bearer ${firebaseToken}`,
          },
        }
      );

      const data = await res.json();

      if (
        data.success &&
        data.data
      ) {

        if (
          data.data.approval_status ===
          "APPROVED"
        ) {
          navigate(
            "/institute/dashboard"
          );
        } else {
          navigate(
            "/institute/pending"
          );
        }

      } else {

        navigate(
          "/institute/create-profile"
        );

      }

    } catch {

      navigate(
        "/institute/create-profile"
      );

    }

  } catch (err) {

    console.error(err);

    toast.error(
      "Google Login Failed"
    );

  }
};

  return (
    <div className="min-h-screen bg-[#08080c] flex items-center justify-center">
      <div className="w-[430px] bg-[#18181d] border border-[#33333a] rounded-3xl p-10">

        <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold mb-6">
          IN
        </div>

        <h1 className="text-4xl font-bold text-center text-purple-400 mb-2">
          Institute Login
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Sign in with Google
        </p>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-4 rounded-xl bg-white text-black font-semibold flex items-center justify-center gap-3"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-6 h-6"
          />
          Continue with Google
        </button>

      </div>
    </div>
  );
}