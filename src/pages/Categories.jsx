// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { FaEdit, FaTrash } from "react-icons/fa";

// const API_URL = "http://localhost:5000/api/categories";

// function Categories() {
//   const [categories, setCategories] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [preview, setPreview] = useState("");

//   const [showDeleteModal, setShowDeleteModal] = useState(false);
// const [selectedCategory, setSelectedCategory] = useState(null);

//   const [showEditModal, setShowEditModal] = useState(false);

// const [editForm, setEditForm] = useState({
//   id: "",
//   name: "",
//   description: "",
// });

// const handleEdit = (cat) => {
//   setEditForm({
//     id: cat.id,
//     name: cat.name || "",
//     description: cat.description || "",
//   });

//   setShowEditModal(true);
// };

// const handleUpdateCategory = async () => {
//   try {
//     const res = await fetch(`${API_URL}/${editForm.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({
//         name: editForm.name,
//         description: editForm.description,
//       }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       toast.error(data.message || "Update failed");
//       return;
//     }

//     toast.success("Category updated successfully");
//     setShowEditModal(false);
//     fetchCategories();
//   } catch {
//     toast.error("Update failed");
//   }
// };

// const handleDelete = async (id) => {
//   if (!window.confirm("Delete this category?")) return;

//   try {
//     const res = await fetch(`${API_URL}/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       toast.error(data.message || "Delete failed");
//       return;
//     }

//     toast.success("Category deleted successfully");
//     fetchCategories();
//   } catch {
//     toast.error("Delete failed");
//   }
// };

//   const token = localStorage.getItem("token");

//   const getImageUrl = (item) => {
//     const img = item?.image || item?.image_url;
//     if (!img) return "";
//     if (img.startsWith("http")) return img;
//     return `http://localhost:5000${img}`;
//   };

//   const fetchCategories = async () => {
//     try {
//       const res = await fetch(API_URL);
//       const data = await res.json();
//       setCategories(data.data || []);
//     } catch {
//       toast.error("Failed to fetch categories");
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     setImageFile(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!token) {
//       toast.error("Please login as admin first");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("description", description);

//     if (imageFile) {
//       formData.append("image", imageFile);
//     }

//     const res = await fetch(API_URL, {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       body: formData,
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       toast.error(data.message || "Failed to add category");
//       return;
//     }

//     toast.success("Category added successfully");

//     setShowModal(false);
//     setName("");
//     setDescription("");
//     setImageFile(null);
//     setPreview("");

//     fetchCategories();
//   };

//   return (
//     <div className="p-8 text-white">
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <h1 className="text-4xl font-bold text-purple-400">Categories</h1>
//           <p className="text-gray-400 mt-2">Manage categories</p>
//         </div>

//         <button
//           onClick={() => setShowModal(true)}
//           className="px-2 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold"
//         >
//           + Add Category
//         </button>
//       </div>


// {showEditModal && (
//   <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
//     <div className="w-[520px] bg-[#211c30] rounded-2xl p-6">
//       <h2 className="text-2xl font-bold mb-5">
//         Edit Category
//       </h2>

//       <label>Category Name</label>
//       <input
//         value={editForm.name}
//         onChange={(e) =>
//           setEditForm({
//             ...editForm,
//             name: e.target.value,
//           })
//         }
//         className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
//       />

//       <label>Description</label>
//       <input
//         value={editForm.description}
//         onChange={(e) =>
//           setEditForm({
//             ...editForm,
//             description: e.target.value,
//           })
//         }
//         className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
//       />
//       <div className="mb-8">
//   <label className="block text-white text-xl mb-3">
//     Upload Image
//   </label>

//   <input
//     type="file"
//     accept="image/*"
//     onChange={(e) =>
//       setEditForm({
//         ...editForm,
//         image: e.target.files[0],
//       })
//     }
//     className="w-full px-5 py-4 rounded-2xl bg-[#2c2647] text-white"
//   />
// </div>

//       <div className="flex justify-end gap-4 mt-4">
//         <button
//           onClick={() => setShowEditModal(false)}
//           className="px-5 py-3 border rounded-xl"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={handleUpdateCategory}
//           className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold"
//         >
//           Update Category
//         </button>
//       </div>
//     </div>
//   </div>
// )}




//       <div className="bg-[#151519] border border-[#2c2c35] rounded-2xl overflow-hidden">
//         <table className="w-full">
//           <thead className="bg-[#202027] text-gray-400">
//             <tr>
//               <th className="p-4 text-left">ID</th>
//               <th className="p-4 text-left">Image</th>
//               <th className="p-4 text-left">Name</th>
//               <th className="p-4 text-left">Description</th>
//                <th className="p-4 text-left">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {categories.map((cat) => (
//               <tr key={cat.id} className="border-t border-[#2c2c35]">
//                 <td className="p-4">{cat.id}</td>

//                 <td className="p-2">
//                   {getImageUrl(cat) ? (
//                     <img
//                       src={getImageUrl(cat)}
//                       alt={cat.name}
//                       className="w-13 h-13 rounded-xl object-cover border border-[#333]"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />
//                   ) : (
//                     <div className="w-16 h-16 bg-[#26262b] rounded-xl flex items-center justify-center text-gray-500">
//                       No Img
//                     </div>
//                   )}
//                 </td>

//                 <td className="p-4">{cat.name}</td>
//                 <td className="p-4">{cat.description || "-"}</td>

// <td className="p-4">
//   <div className="flex items-center gap-2">
//     <button
//       onClick={() => handleEdit(cat)}
//       title="Edit Category"
//       className="w-8 h-8 flex items-center justify-center
//       rounded-lg bg-purple-500/10 text-purple-400
//       border border-purple-500/20
//       hover:bg-purple-500 hover:text-white
//       transition-all duration-300"
//     >
//       <FaEdit size={12} />
//     </button>

//     <button
//       onClick={() => handleDelete(cat.id)}
//       title="Delete Category"
//       className="w-8 h-8 flex items-center justify-center
//       rounded-lg bg-red-500/10 text-red-400
//       border border-red-500/20
//       hover:bg-red-500 hover:text-white
//       transition-all duration-300"
//     >
//       <FaTrash size={12} />
//     </button>
//   </div>
// </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {showModal && (
//         <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
//           <div className="w-[520px] bg-[#211c30] rounded-2xl p-6">
//             <h2 className="text-2xl font-bold mb-5">Add Category</h2>

//             <form onSubmit={handleSubmit}>
//               <label>Category Name</label>
//               <input
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
//                 required
//               />

//               <label>Description</label>
//               <input
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
//               />

//               <label>Upload Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
//               />

//               {preview && (
//                 <img
//                   src={preview}
//                   alt="preview"
//                   className="w-full h-40 object-cover rounded-xl mb-4"
//                 />
//               )}

//               <div className="flex justify-end gap-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className="px-5 py-3 border rounded-xl"
//                 >
//                   Cancel
//                 </button>



// {showDeleteModal && (
//   <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
//     <div className="w-full max-w-md bg-[#221c3d] rounded-3xl p-8">

//       <div className="flex justify-center mb-5">
//         <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
//           <FaTrash className="text-red-500 text-2xl" />
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold text-center text-white mb-4">
//         Delete Category
//       </h2>

//       <p className="text-center text-gray-300 mb-8">
//         Are you sure you want to delete
//         <span className="text-pink-400 font-semibold">
//           {" "} "{selectedCategory?.name}"{" "}
//         </span>
//         ?
//       </p>

//       <div className="flex justify-center gap-4">
//         <button
//           onClick={() => {
//             setShowDeleteModal(false);
//             setSelectedCategory(null);
//           }}
//           className="px-6 py-3 rounded-xl border border-gray-500 text-white"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={confirmDelete}
//           className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold"
//         >
//           Delete Category
//         </button>
//       </div>

//     </div>
//   </div>
// )}




//                 <button className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
//                   Add Category
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Categories;

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa"; // Added FaTimes

const API_URL = "http://localhost:5000/api/categories";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Add Category States
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  // Delete Modal States
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Edit Modal States
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    description: "",
  });
  const [editImageFile, setEditImageFile] = useState(null);
  const [editPreview, setEditPreview] = useState("");

  const token = localStorage.getItem("token");

  const getImageUrl = (item) => {
    const img = item?.image || item?.image_url;
    if (!img) return "";
    if (img.startsWith("http")) return img;
    return `http://localhost:5000${img}`;
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCategories(data.data || []);
    } catch {
      toast.error("Failed to fetch categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // --- Add Category Logic ---
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Please login as admin first");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to add category");
        return;
      }

      toast.success("Category added successfully");
      setShowModal(false);
      setName("");
      setDescription("");
      setImageFile(null);
      setPreview("");
      fetchCategories();
    } catch {
      toast.error("Failed to add category");
    }
  };

  // --- Edit Category Logic ---
  const handleEdit = (cat) => {
    setEditForm({
      id: cat.id,
      name: cat.name || "",
      description: cat.description || "",
    });
    setEditImageFile(null);
    setEditPreview(getImageUrl(cat));
    setShowEditModal(true);
  };

  const handleEditImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setEditImageFile(file);
    setEditPreview(URL.createObjectURL(file));
  };

  const handleUpdateCategory = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", editForm.name);
      formData.append("description", editForm.description);

      // Only append image if a new one was selected
      if (editImageFile) {
        formData.append("image", editImageFile);
      }

      const res = await fetch(`${API_URL}/${editForm.id}`, {
        method: "PUT",
        headers: {
          // Do not set Content-Type when sending FormData
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Update failed");
        return;
      }

      toast.success("Category updated successfully");
      setShowEditModal(false);
      fetchCategories();
    } catch {
      toast.error("Update failed");
    }
  };

  // --- Delete Category Logic ---
  const handleDelete = (cat) => {
    setSelectedCategory(cat);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedCategory) return;

    try {
      const res = await fetch(`${API_URL}/${selectedCategory.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Delete failed");
        return;
      }

      toast.success("Category deleted successfully");
      setShowDeleteModal(false);
      setSelectedCategory(null);
      fetchCategories();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-8 text-white">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-purple-400">Categories</h1>
          <p className="text-gray-400 mt-2">Manage categories</p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="px-2 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold"
        >
          + Add Category
        </button>
      </div>

      <div className="bg-[#151519] border border-[#2c2c35] rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#202027] text-gray-400">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((cat) => (
              <tr key={cat.id} className="border-t border-[#2c2c35]">
                <td className="p-4">{cat.id}</td>

                <td className="p-2">
                  {getImageUrl(cat) ? (
                    <img
                      src={getImageUrl(cat)}
                      alt={cat.name}
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

                <td className="p-4">{cat.name}</td>
                <td className="p-4">{cat.description || "-"}</td>

                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(cat)}
                      title="Edit Category"
                      className="w-8 h-8 flex items-center justify-center
                      rounded-lg bg-purple-500/10 text-purple-400
                      border border-purple-500/20
                      hover:bg-purple-500 hover:text-white
                      transition-all duration-300"
                    >
                      <FaEdit size={12} />
                    </button>

                    <button
                      onClick={() => handleDelete(cat)}
                      title="Delete Category"
                      className="w-8 h-8 flex items-center justify-center
                      rounded-lg bg-red-500/10 text-red-400
                      border border-red-500/20
                      hover:bg-red-500 hover:text-white
                      transition-all duration-300"
                    >
                      <FaTrash size={12} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Category Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="w-[520px] bg-[#211c30] rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-5">Add Category</h2>

            <form onSubmit={handleSubmit}>
              <label>Category Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
                required
              />

              <label>Description</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
              />

              <label>Upload Image</label>
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
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Category Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="w-[520px] max-h-[85vh] overflow-y-auto bg-[#211c30] rounded-2xl p-6">
            
            {/* Header with Title and X Button */}
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-2xl font-bold">Edit Category</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <form onSubmit={handleUpdateCategory}>
              <label>Category Name</label>
              <input
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    name: e.target.value,
                  })
                }
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
                required
              />

              <label>Description</label>
              <input
                value={editForm.description}
                onChange={(e) =>
                  setEditForm({
                    ...editForm,
                    description: e.target.value,
                  })
                }
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
              />

              <label>Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleEditImageChange}
                className="w-full mt-2 mb-4 p-4 rounded-xl bg-[#2b2638] text-white"
              />
              
              {editPreview && (
                <img
                  src={editPreview}
                  alt="Category Preview"
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
                  Update Category
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
              Delete Category
            </h2>

            <p className="text-center text-gray-300 mb-8">
              Are you sure you want to delete
              <span className="text-pink-400 font-semibold">
                {" "}
                "{selectedCategory?.name}"{" "}
              </span>
              ?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setSelectedCategory(null);
                }}
                className="px-6 py-3 rounded-xl border border-gray-500 text-white"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold"
              >
                Delete Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Categories;