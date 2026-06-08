

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth } from "../config/firebase";
import { completeInstituteProfile } from "../services/instituteService";

export default function CreateProfile() {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    email: "",
    phone_number: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    timing: "",
    category_id: "",
    subcategory_id: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        image: file,
      });

      setPreview(URL.createObjectURL(file));
    }
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (!auth.currentUser) {
      toast.error("Please login again");
      return;
    }

    const firebaseToken =
      await auth.currentUser.getIdToken();

    const payload = {
      name: formData.name,
      description: formData.description,
      email: formData.email,
      phone_number: formData.phone_number,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      timing: formData.timing,
      categories: [
        {
          category_id: Number(formData.category_id),
          subcategory_id:
            Number(formData.subcategory_id) || null,
        },
      ],
    };

    await completeInstituteProfile(
      payload,
      firebaseToken
    );

    localStorage.setItem(
      "profileCreated",
      "true"
    );

    toast.success(
      "Profile submitted successfully"
    );

    navigate("/institute/pending");

  } catch (err) {
    console.error(err);

    toast.error(
      err?.response?.data?.message ||
      err?.message ||
      "Failed to submit profile"
    );
  }
};
  return (
    <div className="min-h-screen bg-[#08080c] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-[#18181d] border border-[#33333a] rounded-3xl p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <label className="cursor-pointer">
            {preview ? (
              <img
                src={preview}
                alt=""
                className="w-28 h-28 rounded-full object-cover border-4 border-purple-500"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold">
                IN
              </div>
            )}

            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImage}
            />
          </label>

          <h1 className="text-4xl font-bold text-purple-400 mt-6">
            Create Institute Profile
          </h1>

          <p className="text-gray-400 mt-2">
            Complete institute details
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Institute Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <input
            type="text"
            name="timing"
            placeholder="Timing"
            value={formData.timing}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <input
            type="text"
            name="category_id"
            placeholder="Category ID"
            value={formData.category_id}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <input
            type="text"
            name="subcategory_id"
            placeholder="Subcategory ID"
            value={formData.subcategory_id}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <textarea
            rows="4"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="md:col-span-2 p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <textarea
            rows="4"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="md:col-span-2 p-4 rounded-xl bg-[#26262b] border border-[#3b3b42] text-white"
          />

          <button
            type="submit"
            className="md:col-span-2 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold"
          >
            Send For Approval
          </button>
        </form>
      </div>
    </div>
  );
}