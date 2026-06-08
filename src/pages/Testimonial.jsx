import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash, FaTimes, FaStar } from "react-icons/fa";
import {
  HiPencil,
  HiTrash,
} from "react-icons/hi";

// Import Service Functions
import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../services/testimonialService";
import Button from "../components/ui/Button";

function Testimonials() {
  // Start with an empty array - no dummy data
  const [testimonials, setTestimonials] = useState([]);

  // Add Modal States
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
 const [rating, setRating] = useState("");
  const [text, setText] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  // Delete Modal States
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // Edit Modal States
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    role: "",
    rating: "",
    text: "",
  });
  const [editImageFile, setEditImageFile] = useState(null);
  const [editPreview, setEditPreview] = useState("");

  const token = localStorage.getItem("token");

  const getAvatarUrl = (item) => {
    const img = item?.avatar || item?.image;
    if (!img) return "";
    if (img.startsWith("http")) return img;
    return `http://localhost:5000${img}`;
  };

 const fetchTestimonials = async () => {
  try {
    const data = await getTestimonials();

    console.log("Testimonials Data:", data);

    setTestimonials(data || []);
  } catch (error) {
    console.error(error);
    toast.error("Failed to fetch testimonials");
  }
};

  useEffect(() => {
    // Fetch data immediately when component mounts
    fetchTestimonials();
  }, []);

  // --- Add Logic ---
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("student_name", name);
    formData.append("role", role);
    formData.append("rating", rating);
    formData.append("testimonial_text", text);
if (imageFile) {
  formData.append("avatar", imageFile);
}

    try {
      await createTestimonial(formData, token);

      toast.success("Testimonial added successfully");
      setShowModal(false);
      // Reset form
      setName("");
      setRole("");
      setRating("");
      setText("");
      setImageFile();
      setPreview("");
      // Refresh list from backend
      fetchTestimonials();
    } catch (error) {
      toast.error("Failed to add testimonial");
    }
  };

  // --- Edit Logic ---
  const handleEdit = (item) => {
    setEditForm({
      id: item.id,
      name: item.student_name || "",
      role: item.role || "",
      rating: item.rating || "",
      text: item.testimonial_text || "",
    });
    // setEditImageFile(null);
    setEditPreview(getAvatarUrl(item));
    setShowEditModal(true);
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditImageFile(file);
      setEditPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("student_name", editForm.name);
    formData.append("role", editForm.role);
    formData.append("rating", editForm.rating);
    formData.append("testimonial_text", editForm.text);

   if (editImageFile) {
  formData.append("avatar", editImageFile);
}

    try {
      await updateTestimonial(editForm.id, formData, token);

      toast.success("Testimonial updated successfully");
      setShowEditModal(false);
      // Refresh list from backend
      fetchTestimonials();
    } catch (error) {
      toast.error("Failed to update testimonial");
    }
  };

  // --- Delete Logic ---
  const handleDelete = (item) => {
    setSelectedTestimonial(item);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedTestimonial) return;

    try {
      await deleteTestimonial(selectedTestimonial.id, token);

      toast.success("Testimonial deleted successfully");
      setShowDeleteModal(false);
      setSelectedTestimonial(null);
      // Refresh list from backend
      fetchTestimonials();
    } catch (error) {
      toast.error("Failed to delete testimonial");
    }
  };

  return (
    <div className="p-8 text-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-purple-400">Testimonials</h1>
          <p className="text-gray-400 mt-2">Manage student reviews</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-2 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold"
        >
          + Add Testimonial
        </button>
      </div>

      <div className="bg-[#151519] border border-[#2c2c35] rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#202027] text-gray-400">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Avatar</th>
              <th className="p-4 text-left">Student Name</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Rating</th>
              <th className="p-4 text-left">Testimonial</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {testimonials.length === 0 ? (
              <tr>
                <td colSpan="7" className="p-8 text-center text-gray-500">
                  No testimonials found. Add one to get started.
                </td>
              </tr>
            ) : (
              testimonials.map((item) => (
                <tr key={item.id} className="border-t border-[#2c2c35]">
                  <td className="p-4">{item.id}</td>

                  <td className="p-2">
                    {getAvatarUrl(item) ? (
                      <img
                        src={getAvatarUrl(item)}
                        alt={item.student_name}
                        className="w-13 h-13 rounded-xl object-cover border border-[#333]"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div className="w-16 h-16 bg-[#26262b] rounded-xl flex items-center justify-center text-gray-500">
                        No Img
                      </div>
                    )}
                  </td>

                  <td className="p-4">{item.student_name}</td>
                  <td className="p-4">{item.role}</td>
                  <td className="p-6 text-yellow-400 flex items-center gap-1">
                      <FaStar size={14} /> {item.rating}
                  </td>
                  <td className="p-4 max-w-xs truncate">
                    {item.testimonial_text}
                  </td>


                  <td className="p-4">
                    {/* <div className="flex items-center gap-2">
                      

                      <Button
              variant="ghost"
              size="sm"
              icon={HiPencil}
              onClick={() =>
                handleEdit(row)
              }
            />

                      <button
                        onClick={() => handleDelete(item)}
                        title="Delete Testimonial"
                        className="w-8 h-8 flex items-center justify-center
                        rounded-lg bg-red-500/10 text-red-400
                        border border-red-500/20
                        hover:bg-red-500 hover:text-white
                        transition-all duration-300"
                      >
                        <FaTrash size={12} />
                      </button>
                    </div> */}
                    <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              icon={HiPencil}
             onClick={() =>
                handleEdit(item)
              }
            />

            <Button
              variant="ghost"
              size="sm"
              icon={HiTrash}
              onClick={() => handleDelete(item)}
              className="text-red-400 hover:text-red-300"
            />
          </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Testimonial Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="w-[520px] max-h-[85vh] overflow-y-auto bg-[#211c30] rounded-2xl p-6">
             {/* Header with X */}
             <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold">Add Testimonial</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <label>Student Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
                required
              />

              <label>Role</label>
              <input
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
                placeholder=""
                required
              />

              <label>Rating</label>
              <select
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
              >
             <option value="">Select Rating</option>

{[1, 2, 3, 4, 5].map((star) => (
  <option key={star} value={star}>
    {star} Star
  </option>
))}

              </select>

              <label>Testimonial Text</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white h-32"
                required
              />

              <label>Upload Avatar</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
              />

              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
              )}

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-3 border rounded-xl"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold"
                >
                  Add Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Testimonial Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="w-[520px] max-h-[85vh] overflow-y-auto bg-[#211c30] rounded-2xl p-6">
             {/* Header with X */}
             <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold">Edit Testimonial</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <form onSubmit={handleUpdate}>
              <label>Student Name</label>
              <input
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
                required
              />

              <label>Role</label>
              <input
                value={editForm.role}
                onChange={(e) =>
                  setEditForm({ ...editForm, role: e.target.value })
                }
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
                required
              />

              <label>Rating</label>
              <select
                value={editForm.rating}
                onChange={(e) =>
                  setEditForm({ ...editForm, rating: e.target.value })
                }
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
              >
              <option value="">Select Rating</option>

{[1, 2, 3, 4, 5].map((star) => (
  <option key={star} value={star}>
    {star} Star
  </option>
))}
              </select>

              <label>Testimonial Text</label>
              <textarea
                value={editForm.text}
                onChange={(e) =>
                  setEditForm({ ...editForm, text: e.target.value })
                }
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white h-32"
                required
              />

              <label>Update Avatar</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleEditImageChange}
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
              />

              {editPreview && (
                <img
                  src={editPreview}
                  alt="preview"
                  className="w-full h-40 object-cover rounded-xl mb-4"
                />
              )}

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-5 py-3 border rounded-xl"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold"
                >
                  Update Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="w-full max-w-md bg-[#221c3d] rounded-3xl p-8">
            <div className="flex justify-center mb-5">
              <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                <FaTrash className="text-red-500 text-2xl" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-center text-white mb-4">
              Delete Testimonial
            </h2>

            <p className="text-center text-gray-300 mb-8">
              Are you sure you want to delete this testimonial from
              <span className="text-pink-400 font-semibold">
                {" "}
                "{selectedTestimonial?.student_name}"{" "}
              </span>
              ?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedTestimonial(null);
                }}
                className="px-6 py-3 rounded-xl border border-gray-500 text-white"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold"
              >
                Delete Testimonial
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Testimonials;