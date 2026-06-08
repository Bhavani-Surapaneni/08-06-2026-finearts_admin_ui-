import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getProfile } from "../services/instituteService";

export default function InstituteProfile() {
const [loading, setLoading] =
useState(true);

const [profile, setProfile] =
useState(null);

useEffect(() => {
loadProfile();
}, []);

const loadProfile = async () => {
try {
const token =
localStorage.getItem("token");


  const res =
    await getProfile(token);

  setProfile(res.data);
} catch (err) {
  console.error(err);

  toast.error(
    "Failed to load profile"
  );
} finally {
  setLoading(false);
}


};

if (loading) {
return ( <div className="text-white p-6">
Loading profile... </div>
);
}

if (!profile) {
return ( <div className="text-red-400 p-6">
Profile not found </div>
);
}

return ( <div className="space-y-6"> <div> <h1 className="text-3xl font-bold gradient-text">
Institute Profile </h1>


    <p className="text-gray-400 mt-1">
      View institute details
    </p>
  </div>

  <div className="glass-effect rounded-3xl p-8">
    <div className="flex flex-col md:flex-row gap-8">

      <div>
        <img
          src={
            profile.image_url ||
            "https://via.placeholder.com/200"
          }
          alt="Institute"
          className="w-40 h-40 rounded-3xl object-cover border border-gray-700"
        />
      </div>

      <div className="flex-1">
        <h2 className="text-3xl font-bold text-white">
          {profile.name}
        </h2>

        <div className="mt-3">
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              profile.approval_status ===
              "APPROVED"
                ? "bg-green-500/20 text-green-400"
                : profile.approval_status ===
                  "REJECTED"
                ? "bg-red-500/20 text-red-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {profile.approval_status}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <div>
            <p className="text-gray-400">
              Email
            </p>

            <p className="text-white">
              {profile.email || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Phone
            </p>

            <p className="text-white">
              {profile.phone_number || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              City
            </p>

            <p className="text-white">
              {profile.city || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              State
            </p>

            <p className="text-white">
              {profile.state || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Pincode
            </p>

            <p className="text-white">
              {profile.pincode || "-"}
            </p>
          </div>

          <div>
            <p className="text-gray-400">
              Timing
            </p>

            <p className="text-white">
              {profile.timing || "-"}
            </p>
          </div>

        </div>
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white mb-3">
        Address
      </h3>

      <p className="text-gray-300">
        {profile.address || "-"}
      </p>
    </div>

    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white mb-3">
        Description
      </h3>

      <p className="text-gray-300">
        {profile.description || "-"}
      </p>
    </div>
  </div>
</div>


);
}




