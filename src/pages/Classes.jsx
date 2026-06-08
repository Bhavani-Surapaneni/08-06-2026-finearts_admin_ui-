
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { HiPlus, HiPencil, HiTrash } from "react-icons/hi";

// import DataTable from "../components/ui/DataTable";
// import Modal from "../components/ui/Modal";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import FormInput from "../components/ui/FormInput";

// import API from "../services/api";

// export default function Classes() {
//   const [classes, setClasses] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingClass, setEditingClass] = useState(null);

//   const [deleteId, setDeleteId] = useState(null);
//   const [openDelete, setOpenDelete] = useState(false);

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category_id: "",
//     subcategory_id: "",
//     trainer_id: "",
//     institute_id: "",
//     price: "",
//     duration: "",
//     level: "BEGINNER",
//     mode: "ONLINE",
//     max_students: "",
//     meeting_link: "",
//     status: "ACTIVE",
//   });

//   /* ================= FETCH ================= */
//   const fetchClasses = async () => {
//     try {
//       const res = await API.get("/classes");
//       const list = res?.data?.data;

//       setClasses(
//         Array.isArray(list)
//           ? list.filter((c) => Number(c.id) > 0)
//           : []
//       );
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch classes");
//     }
//   };

//   useEffect(() => {
//     fetchClasses();
//   }, []);

//   /* ================= DELETE ================= */
//   const handleDelete = (id) => {
//     if (!id) return;
//     setDeleteId(id);
//     setOpenDelete(true);
//   };

//   const confirmDelete = async () => {
//     if (!deleteId) return;

//     try {
//       await API.delete(`/classes/admin/${deleteId}`);
//       toast.success("Class deleted successfully");
//       fetchClasses();
//     } catch (err) {
//       console.error(err);
//       toast.error(err?.response?.data?.message || "Delete failed");
//     } finally {
//       setOpenDelete(false);
//       setDeleteId(null);
//     }
//   };

//   /* ================= EDIT ================= */
//   const handleEdit = (cls) => {
//     if (!cls) return;

//     setEditingClass(cls);

//     setFormData({
//       title: cls.title || "",
//       description: cls.description || "",
//       category_id: cls.category_id || "",
//       subcategory_id: cls.subcategory_id || "",
//       trainer_id: cls.trainer_id || "",
//       institute_id: cls.institute_id || "",
//       price: cls.price || "",
//       duration: cls.duration || "",
//       level: cls.level || "BEGINNER",
//       mode: cls.mode || "ONLINE",
//       max_students: cls.max_students || "",
//       meeting_link: cls.meeting_link || "",
//       status: cls.status || "ACTIVE",
//     });

//     setIsModalOpen(true);
//   };

//   /* ================= CREATE / UPDATE ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = {
//         title: formData.title,
//         description: formData.description,
//         category_id: Number(formData.category_id),
//         subcategory_id: formData.subcategory_id
//           ? Number(formData.subcategory_id)
//           : null,
//         trainer_id: formData.trainer_id ? Number(formData.trainer_id) : null,
//         institute_id: formData.institute_id ? Number(formData.institute_id) : null,
//         price: Number(formData.price),
//         duration: Number(formData.duration),
//         level: formData.level,
//         mode: formData.mode,
//         max_students: formData.max_students
//           ? Number(formData.max_students)
//           : null,
//         meeting_link: formData.meeting_link,
//         status: formData.status,
//       };

//       if (editingClass?.id) {
//         await API.put(`/classes/admin/${editingClass.id}`, payload);
//         toast.success("Class updated successfully");
//       } else {
//         await API.post("/classes/admin/create", payload);
//         toast.success("Class created successfully");
//       }

//       fetchClasses();
//       closeModal();
//     } catch (err) {
//       console.error(err);
//       toast.error(err?.response?.data?.message || "Something went wrong");
//     }
//   };

//   /* ================= CLOSE ================= */
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingClass(null);

//     setFormData({
//       title: "",
//       description: "",
//       category_id: "",
//       subcategory_id: "",
//       trainer_id: "",
//       institute_id: "",
//       price: "",
//       duration: "",
//       level: "BEGINNER",
//       mode: "ONLINE",
//       max_students: "",
//       meeting_link: "",
//       status: "ACTIVE",
//     });
//   };

//   /* ================= TABLE ================= */
//   const columns = [
//     { key: "id", label: "ID" },

//     {
//       key: "title",
//       label: "Class Name",
//       render: (v) => <span className="font-medium">{v || "-"}</span>,
//     },

//     { key: "institute_name", label: "Institute", render: (v) => v || "N/A" },
//     { key: "trainer_name", label: "Trainer", render: (v) => v || "N/A" },
//     { key: "category_name", label: "Category", render: (v) => v || "N/A" },
//     { key: "subcategory_name", label: "Subcategory", render: (v) => v || "N/A" },

//     {
//       key: "level",
//       label: "Level",
//       render: (v) => <Badge variant="purple">{v || "-"}</Badge>,
//     },

//     {
//       key: "price",
//       label: "Price",
//       render: (v) => (
//         <span className="text-green-400 font-semibold">₹{v ?? 0}</span>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (v) => (
//         <Badge variant={v === "ACTIVE" ? "success" : "warning"}>
//           {v || "-"}
//         </Badge>
//       ),
//     },

//     /* ✅ CREATED AT */
//     {
//       key: "created_at",
//       label: "Created At",
//       render: (v) => (v ? new Date(v).toLocaleString() : "-"),
//     },

//     /* ✅ UPDATED AT */
//     {
//       key: "updated_at",
//       label: "Updated At",
//       render: (v) => (v ? new Date(v).toLocaleString() : "-"),
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up h-screen">

//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold gradient-text">Classes</h1>
//           <p className="text-gray-400 mt-1">Manage all your course listings</p>
//         </div>

//         <Button icon={HiPlus} onClick={() => setIsModalOpen(true)}>
//           Add Class
//         </Button>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={classes}
//         actions={(row) => (
//           <>
//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiPencil}
//               onClick={() => handleEdit(row)}
//             />

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiTrash}
//               className="text-red-400 hover:text-red-300"
//               onClick={() => handleDelete(row?.id)}
//             />
//           </>
//         )}
//       />

//       {/* DELETE MODAL */}
//       {openDelete && (
//         <Modal
//           isOpen={openDelete}
//           onClose={() => setOpenDelete(false)}
//           title="Confirm Delete"
//         >
//           <p>Are you sure you want to delete this class?</p>

//           <div className="flex justify-end gap-3 mt-4">
//             <Button variant="secondary" onClick={() => setOpenDelete(false)}>
//               Cancel
//             </Button>

//             <Button className="bg-red-500" onClick={confirmDelete}>
//               Delete
//             </Button>
//           </div>
//         </Modal>
//       )}

//       {/* CREATE / EDIT MODAL */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         title={editingClass ? "Edit Class" : "Add Class"}
//       >
//         <form onSubmit={handleSubmit} className="space-y-4">

//           <FormInput
//             label="Class Title"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData({ ...formData, title: e.target.value })
//             }
//           />

//           <FormInput
//             label="Description"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//           />

//           <FormInput
//             label="Category ID"
//             value={formData.category_id}
//             onChange={(e) =>
//               setFormData({ ...formData, category_id: e.target.value })
//             }
//           />

//           <FormInput
//             label="Subcategory ID"
//             value={formData.subcategory_id}
//             onChange={(e) =>
//               setFormData({ ...formData, subcategory_id: e.target.value })
//             }
//           />

//           <div className="flex justify-end gap-3 pt-4">
//             <Button type="button" variant="secondary" onClick={closeModal}>
//               Cancel
//             </Button>

//             <Button type="submit">
//               {editingClass ? "Update Class" : "Add Class"}
//             </Button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// } 
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { HiPlus, HiPencil, HiTrash } from "react-icons/hi";

// import DataTable from "../components/ui/DataTable";
// import Modal from "../components/ui/Modal";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import FormInput from "../components/ui/FormInput";

// import API from "../services/api";

// export default function Classes() {
//   const [classes, setClasses] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingClass, setEditingClass] = useState(null);

//   const [deleteId, setDeleteId] = useState(null);
//   const [openDelete, setOpenDelete] = useState(false);

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     category_name: "",
//     subcategory_name: "",
//     trainer_name: "",
//     institute_name: "",
//     price: "",
//     duration: "",
//     level: "BEGINNER",
//     status: "ACTIVE",
//   });

//   /* ================= FETCH ================= */
//   const fetchClasses = async () => {
//     try {
//       const res = await API.get("/classes");
//       const list = res?.data?.data;

//       setClasses(
//         Array.isArray(list)
//           ? list.filter((c) => Number(c.id) > 0)
//           : []
//       );
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch classes");
//     }
//   };

//   useEffect(() => {
//     fetchClasses();
//   }, []);

//   /* ================= DELETE ================= */
//   const handleDelete = (id) => {
//     if (!id) return;
//     setDeleteId(id);
//     setOpenDelete(true);
//   };

//   const confirmDelete = async () => {
//     if (!deleteId) return;

//     try {
//       await API.delete(`/classes/admin/${deleteId}`);
//       toast.success("Class deleted successfully");
//       fetchClasses();
//     } catch (err) {
//       console.error(err);
//       toast.error(err?.response?.data?.message || "Delete failed");
//     } finally {
//       setOpenDelete(false);
//       setDeleteId(null);
//     }
//   };

//   /* ================= EDIT ================= */
//   const handleEdit = (cls) => {
//     if (!cls) return;

//     setEditingClass(cls);

//     setFormData({
//       title: cls.title || "",
//       description: cls.description || "",
//       category_name: cls.category_name || "",
//       subcategory_name: cls.subcategory_name || "",
//       trainer_name: cls.trainer_name || "",
//       institute_name: cls.institute_name || "",
//       price: cls.price || "",
//       duration: cls.duration || "",
//       level: cls.level || "BEGINNER",
//       status: cls.status || "ACTIVE",
//     });

//     setIsModalOpen(true);
//   };

//   /* ================= CREATE / UPDATE ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = {
//         title: formData.title,
//         description: formData.description,
//         category_name: formData.category_name,
//         subcategory_name: formData.subcategory_name,
//         trainer_name: formData.trainer_name,
//         institute_name: formData.institute_name,
//         price: Number(formData.price),
//         duration: Number(formData.duration),
//         level: formData.level,
//         status: formData.status,
//       };

//       if (editingClass?.id) {
//         await API.put(`/classes/admin/${editingClass.id}`, payload);
//         toast.success("Class updated successfully");
//       } else {
//         await API.post("/classes/admin/create", payload);
//         toast.success("Class created successfully");
//       }

//       fetchClasses();
//       closeModal();
//     } catch (err) {
//       console.error(err);
//       toast.error(err?.response?.data?.message || "Something went wrong");
//     }
//   };

//   /* ================= CLOSE ================= */
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingClass(null);

//     setFormData({
//       title: "",
//       description: "",
//       category_name: "",
//       subcategory_name: "",
//       trainer_name: "",
//       institute_name: "",
//       price: "",
//       duration: "",
//       level: "BEGINNER",
//       status: "ACTIVE",
//     });
//   };

//   /* ================= TABLE ================= */
//   const columns = [
//     { key: "id", label: "ID" },

//     {
//       key: "title",
//       label: "Class Name",
//       render: (v) => <span className="font-semibold">{v || "-"}</span>,
//     },

//     { key: "institute_name", label: "Institute", render: (v) => v || "N/A" },
//     { key: "trainer_name", label: "Trainer", render: (v) => v || "N/A" },
//     { key: "category_name", label: "Category", render: (v) => v || "N/A" },
//     { key: "subcategory_name", label: "Subcategory", render: (v) => v || "N/A" },

//     {
//       key: "level",
//       label: "Level",
//       render: (v) => <Badge variant="purple">{v || "-"}</Badge>,
//     },

//     {
//       key: "price",
//       label: "Price",
//       render: (v) => (
//         <span className="text-green-400 font-semibold">₹{v ?? 0}</span>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (v) => (
//         <Badge variant={v === "ACTIVE" ? "success" : "warning"}>
//           {v || "-"}
//         </Badge>
//       ),
//     },

//     {
//       key: "created_at",
//       label: "Created At",
//       render: (v) => (v ? new Date(v).toLocaleString() : "-"),
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up h-screen">

//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold gradient-text">Classes</h1>
//           <p className="text-gray-400 mt-1">
//             Manage all your course listings
//           </p>
//         </div>

//         <Button icon={HiPlus} onClick={() => setIsModalOpen(true)}>
//           Add Class
//         </Button>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={classes}
//         actions={(row) => (
//           <>
//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiPencil}
//               onClick={() => handleEdit(row)}
//             />

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiTrash}
//               className="text-red-400 hover:text-red-300"
//               onClick={() => handleDelete(row?.id)}
//             />
//           </>
//         )}
//       />

//       {/* DELETE MODAL */}
//       {openDelete && (
//         <Modal
//           isOpen={openDelete}
//           onClose={() => setOpenDelete(false)}
//           title="Confirm Delete"
//         >
//           <p>Are you sure you want to delete this class?</p>

//           <div className="flex justify-end gap-3 mt-4">
//             <Button variant="secondary" onClick={() => setOpenDelete(false)}>
//               Cancel
//             </Button>

//             <Button className="bg-red-500" onClick={confirmDelete}>
//               Delete
//             </Button>
//           </div>
//         </Modal>
//       )}

//       {/* ADD / EDIT MODAL */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         title={editingClass ? "Edit Class" : "Add Class"}
//       >
//         <form onSubmit={handleSubmit} className="space-y-4">

//           <FormInput
//             label="Class Name"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData({ ...formData, title: e.target.value })
//             }
//           />

//           <FormInput
//             label="Institute Name"
//             value={formData.institute_name}
//             onChange={(e) =>
//               setFormData({ ...formData, institute_name: e.target.value })
//             }
//           />

//           <FormInput
//             label="Trainer Name"
//             value={formData.trainer_name}
//             onChange={(e) =>
//               setFormData({ ...formData, trainer_name: e.target.value })
//             }
//           />

//           <FormInput
//             label="Category"
//             value={formData.category_name}
//             onChange={(e) =>
//               setFormData({ ...formData, category_name: e.target.value })
//             }
//           />

//           <FormInput
//             label="Subcategory"
//             value={formData.subcategory_name}
//             onChange={(e) =>
//               setFormData({ ...formData, subcategory_name: e.target.value })
//             }
//           />

//           <FormInput
//             label="Level"
//             value={formData.level}
//             onChange={(e) =>
//               setFormData({ ...formData, level: e.target.value })
//             }
//           />

//           <FormInput
//             label="Price"
//             value={formData.price}
//             onChange={(e) =>
//               setFormData({ ...formData, price: e.target.value })
//             }
//           />

//           <FormInput
//             label="Status"
//             value={formData.status}
//             onChange={(e) =>
//               setFormData({ ...formData, status: e.target.value })
//             }
//           />

//           <div className="flex justify-end gap-3 pt-4">
//             <Button type="button" variant="secondary" onClick={closeModal}>
//               Cancel
//             </Button>

//             <Button type="submit">
//               {editingClass ? "Update Class" : "Add Class"}
//             </Button>
//           </div>

//         </form>
//       </Modal>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { HiPlus, HiPencil, HiTrash } from "react-icons/hi";

// import DataTable from "../components/ui/DataTable";
// import Modal from "../components/ui/Modal";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import FormInput from "../components/ui/FormInput";

// import API from "../services/api";

// export default function Classes() {
//   const [classes, setClasses] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingClass, setEditingClass] = useState(null);

//   const [deleteId, setDeleteId] = useState(null);
//   const [openDelete, setOpenDelete] = useState(false);

//   const defaultForm = {
//     title: "",
//     description: "",
//     category_name: "",
//     subcategory_name: "",
//     trainer_name: "",
//     institute_name: "",
//     price: "",
//     duration: "",
//     level: "BEGINNER",
//     status: "ACTIVE",
//   };

//   const [formData, setFormData] = useState(defaultForm);

//   /* ================= FETCH ================= */
//   const fetchClasses = async () => {
//     try {
//       const res = await API.get("/classes");
//       const list = res?.data?.data;

//       setClasses(Array.isArray(list) ? list : []);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to fetch classes");
//     }
//   };

//   useEffect(() => {
//     fetchClasses();
//   }, []);

//   /* ================= DELETE ================= */
//   const handleDelete = (id) => {
//     setDeleteId(id);
//     setOpenDelete(true);
//   };

//   const confirmDelete = async () => {
//     try {
//       await API.delete(`/classes/admin/${deleteId}`);
//       toast.success("Class deleted successfully");
//       fetchClasses();
//     } catch (err) {
//       toast.error(err?.response?.data?.message || "Delete failed");
//     } finally {
//       setOpenDelete(false);
//       setDeleteId(null);
//     }
//   };

//   /* ================= EDIT ================= */
//   const handleEdit = (cls) => {
//     setEditingClass(cls);

//     setFormData({
//       title: cls.title || "",
//       description: cls.description || "",
//       category_name: cls.category_name || "",
//       subcategory_name: cls.subcategory_name || "",
//       trainer_name: cls.trainer_name || "",
//       institute_name: cls.institute_name || "",
//       price: cls.price || "",
//       duration: cls.duration || "",
//       level: cls.level || "BEGINNER",
//       status: cls.status || "ACTIVE", // 🔥 IMPORTANT FIX
//     });

//     setIsModalOpen(true);
//   };

//   /* ================= CREATE / UPDATE ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = {
//         title: formData.title?.trim(),
//         description: formData.description?.trim(),
//         category_name: formData.category_name?.trim(),
//         subcategory_name: formData.subcategory_name?.trim(),
//         trainer_name: formData.trainer_name?.trim(),
//         institute_name: formData.institute_name?.trim(),
//         price: Number(formData.price || 0),
//         duration: Number(formData.duration || 0),
//         level: formData.level || "BEGINNER",

//         // 🔥 CRITICAL FIX (NEVER NULL)
//         status: formData.status?.trim() || "ACTIVE",
//       };

//       if (editingClass?.id) {
//         await API.put(`/classes/admin/${editingClass.id}`, payload);
//         toast.success("Class updated successfully");
//       } else {
//         await API.post("/classes/admin/create", payload);
//         toast.success("Class created successfully");
//       }

//       fetchClasses();
//       closeModal();
//     } catch (err) {
//       console.error(err);
//       toast.error(err?.response?.data?.message || "Something went wrong");
//     }
//   };

//   /* ================= CLOSE ================= */
//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingClass(null);
//     setFormData(defaultForm);
//   };

//   /* ================= TABLE ================= */
//   const columns = [
//     { key: "id", label: "ID" },

//     {
//       key: "title",
//       label: "Class Name",
//       render: (v) => <span className="font-semibold">{v || "-"}</span>,
//     },

//     { key: "institute_name", label: "Institute", render: (v) => v || "N/A" },
//     { key: "trainer_name", label: "Trainer", render: (v) => v || "N/A" },
//     { key: "category_name", label: "Category", render: (v) => v || "N/A" },
//     { key: "subcategory_name", label: "Subcategory", render: (v) => v || "N/A" },

//     {
//       key: "level",
//       label: "Level",
//       render: (v) => <Badge variant="purple">{v || "-"}</Badge>,
//     },

//     {
//       key: "price",
//       label: "Price",
//       render: (v) => (
//         <span className="text-green-400 font-semibold">₹{v ?? 0}</span>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (v) => (
//         <Badge variant={v === "ACTIVE" ? "success" : "warning"}>
//           {v || "ACTIVE"}
//         </Badge>
//       ),
//     },

//     {
//       key: "created_at",
//       label: "Created At",
//       render: (v) => (v ? new Date(v).toLocaleString() : "-"),
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up h-screen">

//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold gradient-text">Classes</h1>
//           <p className="text-gray-400 mt-1">
//             Manage all your course listings
//           </p>
//         </div>

//         <Button icon={HiPlus} onClick={() => setIsModalOpen(true)}>
//           Add Class
//         </Button>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={classes}
//         actions={(row) => (
//           <>
//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiPencil}
//               onClick={() => handleEdit(row)}
//             />

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiTrash}
//               className="text-red-400"
//               onClick={() => handleDelete(row.id)}
//             />
//           </>
//         )}
//       />

//       {/* DELETE MODAL */}
//       <Modal
//         isOpen={openDelete}
//         onClose={() => setOpenDelete(false)}
//         title="Confirm Delete"
//       >
//         <p>Are you sure?</p>

//         <div className="flex justify-end gap-3 mt-4">
//           <Button variant="secondary" onClick={() => setOpenDelete(false)}>
//             Cancel
//           </Button>

//           <Button className="bg-red-500" onClick={confirmDelete}>
//             Delete
//           </Button>
//         </div>
//       </Modal>

//       {/* ADD / EDIT MODAL */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         title={editingClass ? "Edit Class" : "Add Class"}
//       >
//         <form onSubmit={handleSubmit} className="space-y-4">

//           <FormInput
//             label="Class Name"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData({ ...formData, title: e.target.value })
//             }
//           />

//           <FormInput
//             label="Institute Name"
//             value={formData.institute_name}
//             onChange={(e) =>
//               setFormData({ ...formData, institute_name: e.target.value })
//             }
//           />

//           <FormInput
//             label="Trainer Name"
//             value={formData.trainer_name}
//             onChange={(e) =>
//               setFormData({ ...formData, trainer_name: e.target.value })
//             }
//           />

//           <FormInput
//             label="Category"
//             value={formData.category_name}
//             onChange={(e) =>
//               setFormData({ ...formData, category_name: e.target.value })
//             }
//           />

//           <FormInput
//             label="Subcategory"
//             value={formData.subcategory_name}
//             onChange={(e) =>
//               setFormData({ ...formData, subcategory_name: e.target.value })
//             }
//           />

//           <FormInput
//             label="Level"
//             value={formData.level}
//             onChange={(e) =>
//               setFormData({ ...formData, level: e.target.value })
//             }
//           />

//           <FormInput
//             label="Price"
//             value={formData.price}
//             onChange={(e) =>
//               setFormData({ ...formData, price: e.target.value })
//             }
//           />

//           <FormInput
//             label="Status"
//             value={formData.status}
//             onChange={(e) =>
//               setFormData({ ...formData, status: e.target.value })
//             }
//           />

//           <div className="flex justify-end gap-3 pt-4">
//             <Button type="button" variant="secondary" onClick={closeModal}>
//               Cancel
//             </Button>

//             <Button type="submit">
//               {editingClass ? "Update Class" : "Add Class"}
//             </Button>
//           </div>

//         </form>
//       </Modal>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiPlus, HiPencil, HiTrash } from "react-icons/hi";

import DataTable from "../components/ui/DataTable";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import FormInput from "../components/ui/FormInput";

import API from "../services/api";

export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState(null);

  const [deleteId, setDeleteId] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);

  const defaultForm = {
    title: "",
    description: "",
    category_id: "",
    subcategory_id: "",
    trainer_id: "",
    institute_id: "",
    price: "",
    duration: "",
    level: "BEGINNER",
    mode: "ONLINE",
    max_students: "",
    meeting_link: "",
  };

  const [formData, setFormData] = useState(defaultForm);

  const fetchClasses = async () => {
    try {
      const res = await API.get("/classes");
      setClasses(res?.data?.data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch classes");
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const handleDelete = (id) => {
    setDeleteId(id);
    setOpenDelete(true);
  };

  const confirmDelete = async () => {
    try {
      await API.delete(`/classes/admin/${deleteId}`);
      toast.success("Class deleted successfully");
      fetchClasses();
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Delete failed"
      );
    } finally {
      setOpenDelete(false);
      setDeleteId(null);
    }
  };

  const handleEdit = (cls) => {
    setEditingClass(cls);

    setFormData({
      title: cls.title || "",
      description: cls.description || "",
      category_id: cls.category_id || "",
      subcategory_id: cls.subcategory_id || "",
      trainer_id: cls.trainer_id || "",
      institute_id: cls.institute_id || "",
      price: cls.price || "",
      duration: cls.duration || "",
      level: cls.level || "BEGINNER",
      mode: cls.mode || "ONLINE",
      max_students: cls.max_students || "",
      meeting_link: cls.meeting_link || "",
    });

    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        title: formData.title?.trim(),
        description: formData.description?.trim(),

        category_id: Number(formData.category_id),

        subcategory_id: formData.subcategory_id
          ? Number(formData.subcategory_id)
          : null,

        trainer_id: Number(formData.trainer_id),
          institute_id: Number(formData.institute_id),

        price: Number(formData.price || 0),
        duration: Number(formData.duration || 60),

        level: formData.level || "BEGINNER",
        mode: formData.mode || "ONLINE",

        max_students: formData.max_students
          ? Number(formData.max_students)
          : null,

        meeting_link: formData.meeting_link || null,
      };

      console.log("Payload =>", payload);

      if (editingClass?.id) {
        await API.put(
          `/classes/admin/${editingClass.id}`,
          payload
        );

        toast.success("Class updated successfully");
      } else {
        await API.post(
          "/classes/admin/create",
          payload
        );

        toast.success("Class created successfully");
      }

      fetchClasses();
      closeModal();
    } catch (err) {
      console.log(
        "Backend Error:",
        err.response?.data
      );

      toast.error(
        err?.response?.data?.message ||
        "Something went wrong"
      );
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingClass(null);
    setFormData(defaultForm);
  };


  const columns = [
    {
      key: "id",
      label: "ID",
    },

    {
      key: "title",
      label: "Class Name",
      render: (v) => (
        <span className="font-semibold">
          {v || "-"}
        </span>
      ),
    },

    {
      key: "trainer_name",
      label: "Trainer",
      render: (v) => v || "N/A",
    },

    {
      key: "category_name",
      label: "Category",
      render: (v) => v || "N/A",
    },

    {
      key: "subcategory_name",
      label: "Subcategory",
      render: (v) => v || "N/A",
    },

    {
      key: "level",
      label: "Level",
      render: (v) => (
        <Badge variant="purple">
          {v || "-"}
        </Badge>
      ),
    },

    {
      key: "price",
      label: "Price",
      render: (v) => (
        <span className="text-green-400 font-semibold">
          ₹{v ?? 0}
        </span>
      ),
    },

    {
      key: "created_at",
      label: "Created At",
      render: (v) =>
        v
          ? new Date(v).toLocaleString()
          : "-",
    },
  ];

  return (
    <div className="space-y-6 animate-slide-up h-screen">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">
            Classes
          </h1>

          <p className="text-gray-400 mt-1">
            Manage all your course listings
          </p>
        </div>

        <Button
          icon={HiPlus}
          onClick={() => setIsModalOpen(true)}
        >
          Add Class
        </Button>
      </div>

      {/* TABLE */}
      <DataTable
        columns={columns}
        data={classes}
        actions={(row) => (
          <>
            <Button
              variant="ghost"
              size="sm"
              icon={HiPencil}
              onClick={() => handleEdit(row)}
            />

            <Button
              variant="ghost"
              size="sm"
              icon={HiTrash}
              className="text-red-400"
              onClick={() => handleDelete(row.id)}
            />
          </>
        )}
      />

      {/* DELETE MODAL */}
      <Modal
        isOpen={openDelete}
        onClose={() => setOpenDelete(false)}
        title="Confirm Delete"
      >
        <p>Are you sure?</p>

        <div className="flex justify-end gap-3 mt-4">
          <Button
            variant="secondary"
            onClick={() => setOpenDelete(false)}
          >
            Cancel
          </Button>

          <Button
            className="bg-red-500"
            onClick={confirmDelete}
          >
            Delete
          </Button>
        </div>
      </Modal>

      {/* ADD / EDIT MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={
          editingClass
            ? "Edit Class"
            : "Add Class"
        }
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <FormInput
            label="Class Name"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
          />

          <FormInput
            label="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />
    
<FormInput
  label="Institute ID"
  value={formData.institute_id}
  onChange={(e) =>
    setFormData({
      ...formData,
      institute_id: e.target.value,
    })
  }
/>




          <FormInput
            label="Category ID"
            value={formData.category_id}
            onChange={(e) =>
              setFormData({
                ...formData,
                category_id: e.target.value,
              })
            }
          />

          <FormInput
            label="Subcategory ID"
            value={formData.subcategory_id}
            onChange={(e) =>
              setFormData({
                ...formData,
                subcategory_id: e.target.value,
              })
            }
          />

          <FormInput
            label="Trainer ID"
            value={formData.trainer_id}
            onChange={(e) =>
              setFormData({
                ...formData,
                trainer_id: e.target.value,
              })
            }
          />

          <FormInput
            label="Price"
            value={formData.price}
            onChange={(e) =>
              setFormData({
                ...formData,
                price: e.target.value,
              })
            }
          />

          <FormInput
            label="Duration"
            value={formData.duration}
            onChange={(e) =>
              setFormData({
                ...formData,
                duration: e.target.value,
              })
            }
          />

          <FormInput
            label="Level"
            value={formData.level}
            onChange={(e) =>
              setFormData({
                ...formData,
                level: e.target.value,
              })
            }
          />

          <FormInput
            label="Mode"
            value={formData.mode}
            onChange={(e) =>
              setFormData({
                ...formData,
                mode: e.target.value,
              })
            }
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={closeModal}
            >
              Cancel
            </Button>

            <Button type="submit">
              {editingClass
                ? "Update Class"
                : "Add Class"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

