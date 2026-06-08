// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import {
//   HiPlus,
//   HiPencil,
//   HiTrash,
//   HiStar,
//   HiCheckCircle,
//   HiLocationMarker,
// } from "react-icons/hi";
// import DataTable from "../components/ui/DataTable";
// import Modal from "../components/ui/Modal";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import FormInput from "../components/ui/FormInput";
// import {
//   verifyInstitute,
//   updateInstitute,
//   deleteInstitute,
//   toggleFeatured,
// } from "../redux/slices/institutesSlice";

// export default function Institutes() {
//   const dispatch = useDispatch();
//   const { institutes } = useSelector((state) => state.institutes);

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingInstitute, setEditingInstitute] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     city: "",
//     address: "",
//     owner: "",
//     phone: "",
//     email: "",
//     established: "",
//     description: "",
//   });

//   const columns = [
//     {
//       key: "name",
//       label: "Institute Name",
//       render: (value, row) => (
//         <div className="flex items-center gap-3">
//           {row.featured && <HiStar className="w-4 h-4 text-yellow-400" />}
//           <div>
//             <p className="font-medium">{value}</p>
//             <p className="text-xs text-gray-400 flex items-center gap-1">
//               <HiLocationMarker className="w-3 h-3" />
//               {row.city}
//             </p>
//           </div>
//         </div>
//       ),
//     },
//     { key: "city", label: "City" },
//     {
//       key: "courses",
//       label: "Courses",
//       render: (value) => <Badge variant="purple">{value} Courses</Badge>,
//     },
//     {
//       key: "rating",
//       label: "Rating",
//       render: (value) => (
//         <div className="flex items-center gap-1">
//           <HiStar className="w-4 h-4 star-rating" />
//           <span>{value}</span>
//         </div>
//       ),
//     },
//     {
//       key: "status",
//       label: "Status",
//       render: (value) => <Badge variant={value}>{value}</Badge>,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (editingInstitute) {
//       dispatch(updateInstitute({ ...editingInstitute, ...formData }));
//       toast.success("Institute updated successfully!");
//     } else {
//       dispatch(
//         updateInstitute({
//           id: Date.now(),
//           ...formData,
//           courses: 0,
//           rating: 0,
//           status: "pending",
//           featured: false,
//         }),
//       );
//       toast.success("Institute added successfully!");
//     }

//     closeModal();
//   };

//   const handleEdit = (institute) => {
//     setEditingInstitute(institute);
//     setFormData({
//       name: institute.name,
//       city: institute.city,
//       address: institute.address,
//       owner: institute.owner,
//       phone: institute.phone,
//       email: institute.email,
//       established: institute.established,
//       description: institute.description,
//     });
//     setIsModalOpen(true);
//   };

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this institute?")) {
//       dispatch(deleteInstitute(id));
//       toast.success("Institute deleted successfully!");
//     }
//   };

//   const handleVerify = (id) => {
//     dispatch(verifyInstitute(id));
//     toast.success("Institute verified!");
//   };

//   const handleToggleFeatured = (id) => {
//     dispatch(toggleFeatured(id));
//     toast.success("Featured status toggled!");
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setEditingInstitute(null);
//     setFormData({
//       name: "",
//       city: "",
//       address: "",
//       owner: "",
//       phone: "",
//       email: "",
//       established: "",
//       description: "",
//     });
//   };

//   return (
//     <div className="space-y-6 animate-slide-up">
//       {/* Page Header */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold gradient-text">Institutes</h1>
//           <p className="text-gray-400 mt-1">
//             Manage studios, academies, and centers
//           </p>
//         </div>
//         <Button icon={HiPlus} onClick={() => setIsModalOpen(true)}>
//           Add Institute
//         </Button>
//       </div>

//       {/* Table */}
//       <DataTable
//         columns={columns}
//         data={institutes}
//         filterable
//         filterOptions={[
//           { key: "status", value: "verified", label: "Verified" },
//           { key: "status", value: "pending", label: "Pending" },
//           { key: "status", value: "unverified", label: "Unverified" },
//         ]}
//         actions={(row) => (
//           <>
//             {row.status !== "verified" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiCheckCircle}
//                 onClick={() => handleVerify(row.id)}
//               >
//                 Verify
//               </Button>
//             )}
//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiStar}
//               onClick={() => handleToggleFeatured(row.id)}
//               className={row.featured ? "text-yellow-400" : ""}
//             />
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
//               onClick={() => handleDelete(row.id)}
//               className="text-red-400 hover:text-red-300"
//             />
//           </>
//         )}
//       />

//       {/* Add/Edit Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         title={editingInstitute ? "Edit Institute" : "Add New Institute"}
//         size="lg"
//       >
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <FormInput
//             label="Institute Name"
//             name="name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             placeholder="e.g., Rhythm Dance Studio"
//             required
//           />

//           <div className="grid grid-cols-2 gap-4">
//             <FormInput
//               label="City"
//               name="city"
//               value={formData.city}
//               onChange={(e) =>
//                 setFormData({ ...formData, city: e.target.value })
//               }
//               placeholder="e.g., New York"
//               required
//             />
//             <FormInput
//               label="Established Year"
//               name="established"
//               value={formData.established}
//               onChange={(e) =>
//                 setFormData({ ...formData, established: e.target.value })
//               }
//               placeholder="e.g., 2018"
//             />
//           </div>

//           <FormInput
//             label="Address"
//             name="address"
//             value={formData.address}
//             onChange={(e) =>
//               setFormData({ ...formData, address: e.target.value })
//             }
//             placeholder="Full address"
//           />

//           <div className="grid grid-cols-2 gap-4">
//             <FormInput
//               label="Owner Name"
//               name="owner"
//               value={formData.owner}
//               onChange={(e) =>
//                 setFormData({ ...formData, owner: e.target.value })
//               }
//             />
//             <FormInput
//               label="Phone"
//               name="phone"
//               value={formData.phone}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//             />
//           </div>

//           <FormInput
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />

//           <FormInput
//             label="Description"
//             name="description"
//             type="textarea"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//             placeholder="Brief description about the institute..."
//           />

//           <div className="flex justify-end gap-3 pt-4">
//             <Button variant="secondary" type="button" onClick={closeModal}>
//               Cancel
//             </Button>
//             <Button type="submit">
//               {editingInstitute ? "Update Institute" : "Add Institute"}
//             </Button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import {
//   HiPencil,
//   HiTrash,
//   HiCheckCircle,
// } from "react-icons/hi";

// import DataTable from "../components/ui/DataTable";
// import Modal from "../components/ui/Modal";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import FormInput from "../components/ui/FormInput";

// import {
//   getAllInstitutes,
//   updateInstitute,
//   updateInstituteApproval,
//   deleteInstitute,
// } from "../services/instituteService";

// export default function Institutes() {
//   const [institutes, setInstitutes] = useState([]);

//   const [isModalOpen, setIsModalOpen] =
//     useState(false);

//   const [editingInstitute, setEditingInstitute] =
//     useState(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     email: "",
//     phone_number: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const token = localStorage.getItem("token");

//   /* ───────────────── FETCH ───────────────── */
//   const fetchInstitutes = async () => {
//     try {
//       const res = await getAllInstitutes(token);

//       setInstitutes(res.data || []);
//     } catch (e) {
//       toast.error(
//         e.response?.data?.message ||
//           "Failed to load institutes"
//       );
//     }
//   };

//   useEffect(() => {
//     fetchInstitutes();
//   }, []);

//   /* ───────────────── TABLE COLUMNS ───────────────── */
//   const columns = [
//     {
//       key: "name",
//       label: "Institute Name",
//       render: (value, row) => (
//         <div>
//           <p className="font-medium">{value}</p>

//           <p className="text-xs text-gray-400">
//             {row.city || "-"}
//           </p>
//         </div>
//       ),
//     },

//     {
//       key: "email",
//       label: "Email",
//     },

//     {
//       key: "phone_number",
//       label: "Phone",
//     },

//     {
//       key: "city",
//       label: "City",
//     },

//     {
//       key: "trainer_count",
//       label: "Trainers",
//       render: (value) => value || 0,
//     },

//     {
//       key: "class_count",
//       label: "Classes",
//       render: (value) => value || 0,
//     },

//     {
//       key: "approval_status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value?.toLowerCase()}>
//           {value}
//         </Badge>
//       ),
//     },

//     {
//       key: "created_at",
//       label: "Created",
//       render: (value) =>
//         value
//           ? new Date(value).toLocaleDateString()
//           : "-",
//     },
//   ];

//   /* ───────────────── APPROVE ───────────────── */
//   const handleApprove = async (id) => {
//     try {
//       await updateInstituteApproval(
//         id,
//         "APPROVED",
//         token
//       );

//       toast.success(
//         "Institute approved successfully"
//       );

//       fetchInstitutes();
//     } catch (e) {
//       toast.error(
//         e.response?.data?.message ||
//           "Approval failed"
//       );
//     }
//   };

//   /* ───────────────── DELETE ───────────────── */
//   const handleDelete = async (id, name) => {
//     const confirmDelete = window.confirm(
//       `Are you sure you want to delete ${name}?`
//     );

//     if (!confirmDelete) return;

//     try {
//       await deleteInstitute(id, token);

//       toast.success(
//         "Institute deleted successfully"
//       );

//       fetchInstitutes();
//     } catch (e) {
//       toast.error(
//         e.response?.data?.message ||
//           "Delete failed"
//       );
//     }
//   };

//   /* ───────────────── EDIT ───────────────── */
//   const handleEdit = (institute) => {
//     setEditingInstitute(institute);

//     setFormData({
//       name: institute.name || "",
//       description:
//         institute.description || "",
//       email: institute.email || "",
//       phone_number:
//         institute.phone_number || "",
//       address: institute.address || "",
//       city: institute.city || "",
//       state: institute.state || "",
//       pincode: institute.pincode || "",
//     });

//     setIsModalOpen(true);
//   };

//   /* ───────────────── UPDATE ───────────────── */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await updateInstitute(
//         editingInstitute.id,
//         formData,
//         token
//       );

//       toast.success(
//         "Institute updated successfully"
//       );

//       closeModal();

//       fetchInstitutes();
//     } catch (e) {
//       toast.error(
//         e.response?.data?.message ||
//           "Update failed"
//       );
//     }
//   };

//   /* ───────────────── CLOSE MODAL ───────────────── */
//   const closeModal = () => {
//     setIsModalOpen(false);

//     setEditingInstitute(null);

//     setFormData({
//       name: "",
//       description: "",
//       email: "",
//       phone_number: "",
//       address: "",
//       city: "",
//       state: "",
//       pincode: "",
//     });
//   };

//   return (
//     <div className="space-y-6 animate-slide-up">
//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Institutes
//         </h1>

//         <p className="text-gray-400 mt-1">
//           Manage all institutes
//         </p>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={institutes}
//         filterable
//         actions={(row) => (
//           <div className="flex items-center gap-2">
//             {row.approval_status !==
//               "APPROVED" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiCheckCircle}
//                 onClick={() =>
//                   handleApprove(row.id)
//                 }
//               />
//             )}

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiPencil}
//               onClick={() =>
//                 handleEdit(row)
//               }
//             />

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiTrash}
//               onClick={() =>
//                 handleDelete(
//                   row.id,
//                   row.name
//                 )
//               }
//               className="text-red-400 hover:text-red-300"
//             />
//           </div>
//         )}
//       />

//       {/* EDIT MODAL */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         title="Edit Institute"
//       >
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-4"
//         >
//           <FormInput
//             label="Institute Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name: e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Description"
//             type="textarea"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 description:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 email: e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Phone"
//             value={formData.phone_number}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 phone_number:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Address"
//             value={formData.address}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 address: e.target.value,
//               })
//             }
//           />

//           <div className="grid grid-cols-2 gap-4">
//             <FormInput
//               label="City"
//               value={formData.city}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   city: e.target.value,
//                 })
//               }
//             />

//             <FormInput
//               label="State"
//               value={formData.state}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   state: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <FormInput
//             label="Pincode"
//             value={formData.pincode}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 pincode:
//                   e.target.value,
//               })
//             }
//           />

//           <div className="flex justify-end gap-3 pt-4">
//             <Button
//               variant="secondary"
//               type="button"
//               onClick={closeModal}
//             >
//               Cancel
//             </Button>

//             <Button type="submit">
//               Update Institute
//             </Button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// }
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import {
//   HiPencil,
//   HiTrash,
//   HiCheckCircle,
// } from "react-icons/hi";

// import DataTable from "../components/ui/DataTable";
// import Modal from "../components/ui/Modal";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import FormInput from "../components/ui/FormInput";

// import {
//   getAllInstitutes,
//   updateInstitute,
//   updateInstituteApproval,
//   deleteInstitute,
// } from "../services/instituteService";

// export default function Institutes() {
//   const [institutes, setInstitutes] = useState([]);

//   const [isModalOpen, setIsModalOpen] =
//     useState(false);

//   const [deleteModal, setDeleteModal] =
//     useState({
//       open: false,
//       institute: null,
//     });

//   const [editingInstitute, setEditingInstitute] =
//     useState(null);

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     email: "",
//     phone_number: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//   });

//   const token = localStorage.getItem("token");

//   /* ───────────────── FETCH ───────────────── */
//   const fetchInstitutes = async () => {
//     try {
//       const res = await getAllInstitutes(token);

//       setInstitutes(res.data || []);
//     } catch (e) {
//       toast.error(
//         e.response?.data?.message ||
//           "Failed to load institutes"
//       );
//     }
//   };

//   useEffect(() => {
//     fetchInstitutes();
//   }, []);

//   /* ───────────────── TABLE COLUMNS ───────────────── */
//   const columns = [
//     {
//       key: "name",
//       label: "Institute Name",
//       render: (value, row) => (
//         <div>
//           <p className="font-medium">{value}</p>

//           <p className="text-xs text-gray-400">
//             {row.city || "-"}
//           </p>
//         </div>
//       ),
//     },

//     {
//       key: "email",
//       label: "Email",
//     },

//     {
//       key: "phone_number",
//       label: "Phone",
//     },

//     {
//       key: "city",
//       label: "City",
//     },

//     {
//       key: "trainer_count",
//       label: "Trainers",
//       render: (value) => value || 0,
//     },

//     {
//       key: "class_count",
//       label: "Classes",
//       render: (value) => value || 0,
//     },

//     {
//       key: "approval_status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value?.toLowerCase()}>
//           {value}
//         </Badge>
//       ),
//     },

//     {
//       key: "created_at",
//       label: "Created",
//       render: (value) =>
//         value
//           ? new Date(value).toLocaleDateString()
//           : "-",
//     },
//   ];

//   /* ───────────────── APPROVE ───────────────── */
//   const handleApprove = async (id) => {
//     try {
//       await updateInstituteApproval(
//         id,
//         "APPROVED",
//         token
//       );

//       toast.success(
//         "Institute approved successfully"
//       );

//       fetchInstitutes();
//     } catch (e) {
//       toast.error(
//         e.response?.data?.message ||
//           "Approval failed"
//       );
//     }
//   };

//   /* ───────────────── DELETE POPUP ───────────────── */
//   const handleDeleteClick = (institute) => {
//     setDeleteModal({
//       open: true,
//       institute,
//     });
//   };

//   /* ───────────────── DELETE ───────────────── */
//   const handleDelete = async () => {
//     try {
//       await deleteInstitute(
//         deleteModal.institute.id,
//         token
//       );

//       toast.success(
//         "Institute deleted successfully"
//       );

//       setDeleteModal({
//         open: false,
//         institute: null,
//       });

//       fetchInstitutes();
//     } catch (e) {
//       toast.error(
//         e.response?.data?.message ||
//           "Delete failed"
//       );
//     }
//   };

//   /* ───────────────── EDIT ───────────────── */
//   const handleEdit = (institute) => {
//     console.log(institute);

//     setEditingInstitute(institute);

//     setFormData({
//       name: institute.name || "",
//       description:
//         institute.description || "",
//       email: institute.email || "",
//       phone_number:
//         institute.phone_number || "",
//       address: institute.address || "",
//       city: institute.city || "",
//       state: institute.state || "",
//       pincode: institute.pincode || "",
//     });

//     setIsModalOpen(true);
//   };

//   /* ───────────────── UPDATE ───────────────── */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!editingInstitute?.id) {
//       toast.error("Institute ID missing");
//       return;
//     }

//     try {
//       await updateInstitute(
//         editingInstitute.id,
//         formData,
//         token
//       );

//       toast.success(
//         "Institute updated successfully"
//       );

//       closeModal();

//       fetchInstitutes();
//     } catch (e) {
//       console.log(e);

//       toast.error(
//         e.response?.data?.message ||
//           "Update failed"
//       );
//     }
//   };

//   /* ───────────────── CLOSE MODAL ───────────────── */
//   const closeModal = () => {
//     setIsModalOpen(false);

//     setEditingInstitute(null);

//     setFormData({
//       name: "",
//       description: "",
//       email: "",
//       phone_number: "",
//       address: "",
//       city: "",
//       state: "",
//       pincode: "",
//     });
//   };

//   return (
//     <div className="space-y-6 animate-slide-up">
//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Institutes
//         </h1>

//         <p className="text-gray-400 mt-1">
//           Manage all institutes
//         </p>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={institutes}
//         filterable
//         actions={(row) => (
//           <div className="flex items-center gap-2">
//             {row.approval_status !==
//               "APPROVED" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiCheckCircle}
//                 onClick={() =>
//                   handleApprove(row.id)
//                 }
//               />
//             )}

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiPencil}
//               onClick={() =>
//                 handleEdit(row)
//               }
//             />

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiTrash}
//               onClick={() =>
//                 handleDeleteClick(row)
//               }
//               className="text-red-400 hover:text-red-300"
//             />
//           </div>
//         )}
//       />

//       {/* DELETE MODAL */}
//       <Modal
//         isOpen={deleteModal.open}
//         onClose={() =>
//           setDeleteModal({
//             open: false,
//             institute: null,
//           })
//         }
//         title="Delete Institute"
//       >
//         <div className="space-y-4">
//           <p className="text-gray-300">
//             Are you sure you want to delete{" "}
//             <span className="font-bold text-red-400">
//               {deleteModal.institute?.name}
//             </span>
//             ?
//           </p>

//           <div className="flex justify-end gap-3 pt-4">
//             <Button
//               variant="secondary"
//               onClick={() =>
//                 setDeleteModal({
//                   open: false,
//                   institute: null,
//                 })
//               }
//             >
//               Cancel
//             </Button>

//             <Button
//               variant="danger"
//               onClick={handleDelete}
//             >
//               Delete
//             </Button>
//           </div>
//         </div>
//       </Modal>

//       {/* EDIT MODAL */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         title="Edit Institute"
//       >
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-4"
//         >
//           <FormInput
//             label="Institute Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name: e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Description"
//             type="textarea"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 description:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 email: e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Phone"
//             value={formData.phone_number}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 phone_number:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Address"
//             value={formData.address}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 address: e.target.value,
//               })
//             }
//           />

//           <div className="grid grid-cols-2 gap-4">
//             <FormInput
//               label="City"
//               value={formData.city}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   city: e.target.value,
//                 })
//               }
//             />

//             <FormInput
//               label="State"
//               value={formData.state}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   state: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <FormInput
//             label="Pincode"
//             value={formData.pincode}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 pincode:
//                   e.target.value,
//               })
//             }
//           />

//           <div className="flex justify-end gap-3 pt-4">
//             <Button
//               variant="secondary"
//               type="button"
//               onClick={closeModal}
//             >
//               Cancel
//             </Button>

//             <Button type="submit">
//               Update Institute
//             </Button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import {
//   HiPencil,
//   HiTrash,
//   HiCheckCircle,
// } from "react-icons/hi";

// import DataTable from "../components/ui/DataTable";
// import Modal from "../components/ui/Modal";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import FormInput from "../components/ui/FormInput";

// import {
//   getAllInstitutes,
//   updateInstitute,
//   updateInstituteApproval,
//   deleteInstitute,
// } from "../services/instituteService";

// export default function Institutes() {
//   const [institutes, setInstitutes] = useState([]);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [editingInstitute, setEditingInstitute] = useState(null);

//   const [deleteModal, setDeleteModal] = useState({
//     open: false,
//     institute: null,
//   });

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     email: "",
//     phone_number: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     // 🔥 FIX: backend expects plans
//     plans: [
//       { name: "Basic", price: 0 },
//       { name: "Standard", price: 0 },
//       { name: "Premium", price: 0 },
//     ],
//   });

//   const token = localStorage.getItem("token");

//   /* ───────── FETCH ───────── */
//   const fetchInstitutes = async () => {
//     try {
//       const res = await getAllInstitutes(token);
//       setInstitutes(res?.data || []);
//     } catch (e) {
//       toast.error(
//         e?.response?.data?.message || "Failed to load institutes"
//       );
//     }
//   };

//   useEffect(() => {
//     fetchInstitutes();
//   }, []);

//   /* ───────── APPROVE ───────── */
//   const handleApprove = async (id) => {
//     try {
//       await updateInstituteApproval(id, "APPROVED", token);
//       toast.success("Institute approved");
//       fetchInstitutes();
//     } catch (e) {
//       toast.error(e?.response?.data?.message || "Approval failed");
//     }
//   };

//   /* ───────── DELETE ───────── */
//   const handleDelete = async () => {
//     try {
//       await deleteInstitute(deleteModal.institute.id, token);
//       toast.success("Institute deleted");

//       setDeleteModal({ open: false, institute: null });
//       fetchInstitutes();
//     } catch (e) {
//       toast.error(e?.response?.data?.message || "Delete failed");
//     }
//   };

//   /* ───────── EDIT ───────── */
//   const handleEdit = (institute) => {
//     setEditingInstitute(institute);

//     setFormData({
//       name: institute.name || "",
//       description: institute.description || "",
//       email: institute.email || "",
//       phone_number: institute.phone_number || "",
//       address: institute.address || "",
//       city: institute.city || "",
//       state: institute.state || "",
//       pincode: institute.pincode || "",

//       // keep 3 plans ALWAYS
//       plans: institute.plans?.length === 3
//         ? institute.plans
//         : [
//             { name: "Basic", price: 0 },
//             { name: "Standard", price: 0 },
//             { name: "Premium", price: 0 },
//           ],
//     });

//     setIsModalOpen(true);
//   };

//   /* ───────── UPDATE ───────── */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!editingInstitute?.id) {
//       toast.error("Invalid institute ID");
//       return;
//     }

//     // 🔥 HARD FIX: enforce exactly 3 plans
//     if (!formData.plans || formData.plans.length !== 3) {
//       toast.error("Exactly 3 plans required");
//       return;
//     }

//     try {
//       await updateInstitute(editingInstitute.id, formData, token);

//       toast.success("Institute updated successfully");

//       setIsModalOpen(false);
//       setEditingInstitute(null);

//       fetchInstitutes();
//     } catch (e) {
//       toast.error(e?.response?.data?.message || "Update failed");
//     }
//   };

//   /* ───────── COLUMNS ───────── */
//   const columns = [
//     {
//       key: "name",
//       label: "Institute Name",
//       render: (value, row) => (
//         <div>
//           <p className="font-medium">{value}</p>
//           <p className="text-xs text-gray-400">{row.city || "-"}</p>
//         </div>
//       ),
//     },
//     { key: "email", label: "Email" },
//     { key: "phone_number", label: "Phone" },
//     { key: "city", label: "City" },
//     { key: "trainer_count", label: "Trainers" },
//     { key: "class_count", label: "Classes" },
//     {
//       key: "approval_status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value?.toLowerCase()}>
//           {value}
//         </Badge>
//       ),
//     },
//     {
//       key: "created_at",
//       label: "Created",
//       render: (v) => (v ? new Date(v).toLocaleDateString() : "-"),
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Institutes
//         </h1>
//         <p className="text-gray-400 mt-1">
//           Manage all institutes
//         </p>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={institutes}
//         filterable
//         actions={(row) => (
//           <div className="flex items-center gap-2">

//             {row.approval_status !== "APPROVED" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiCheckCircle}
//                 onClick={() => handleApprove(row.id)}
//               />
//             )}

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
//               onClick={() =>
//                 setDeleteModal({ open: true, institute: row })
//               }
//             />
//           </div>
//         )}
//       />

//       {/* DELETE MODAL */}
//       <Modal
//         isOpen={deleteModal.open}
//         onClose={() =>
//           setDeleteModal({ open: false, institute: null })
//         }
//         title="Delete Institute"
//       >
//         <p>
//           Are you sure you want to delete{" "}
//           <b>{deleteModal.institute?.name}</b>?
//         </p>

//         <div className="flex justify-end gap-3 mt-4">
//           <Button
//             variant="secondary"
//             onClick={() =>
//               setDeleteModal({ open: false, institute: null })
//             }
//           >
//             Cancel
//           </Button>

//           <Button variant="danger" onClick={handleDelete}>
//             Delete
//           </Button>
//         </div>
//       </Modal>

//       {/* EDIT MODAL */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         title="Edit Institute"
//       >
//         <form onSubmit={handleSubmit} className="space-y-4">

//           <FormInput
//             label="Institute Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//           />

//           <FormInput
//             label="Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />

//           <FormInput
//             label="Phone"
//             value={formData.phone_number}
//             onChange={(e) =>
//               setFormData({ ...formData, phone_number: e.target.value })
//             }
//           />

//           <FormInput
//             label="City"
//             value={formData.city}
//             onChange={(e) =>
//               setFormData({ ...formData, city: e.target.value })
//             }
//           />

//           <FormInput
//             label="State"
//             value={formData.state}
//             onChange={(e) =>
//               setFormData({ ...formData, state: e.target.value })
//             }
//           />

//           <FormInput
//             label="Pincode"
//             value={formData.pincode}
//             onChange={(e) =>
//               setFormData({ ...formData, pincode: e.target.value })
//             }
//           />

//           <div className="flex justify-end gap-3 pt-4">
//             <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
//               Cancel
//             </Button>

//             <Button type="submit">
//               Update Institute
//             </Button>
//           </div>

//         </form>
//       </Modal>
//     </div>
//   );
// }


// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import {
//   HiPencil,
//   HiTrash,
//   HiCheckCircle,
//   HiPlus,
// } from "react-icons/hi";

// import DataTable from "../components/ui/DataTable";
// import Modal from "../components/ui/Modal";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import FormInput from "../components/ui/FormInput";

// import {
//   getAllInstitutes,
//   adminCreateInstitute,
//   updateInstitute,
//   updateInstituteApproval,
//   deleteInstitute,
// } from "../services/instituteService";

// export default function Institutes() {
//   const [institutes, setInstitutes] = useState([]);

//   const location = useLocation();

//   const [isCreateModalOpen, setIsCreateModalOpen] =
//     useState(false);

//   const [isEditModalOpen, setIsEditModalOpen] =
//     useState(false);

//   const [editingInstitute, setEditingInstitute] =
//     useState(null);

//   const [deleteModal, setDeleteModal] = useState({
//     open: false,
//     institute: null,
//   });

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     email: "",
//     phone_number: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     timing: "",

//     category_id: "",
//   subcategory_id: "",
//     image: null,
//   });



//   const token = localStorage.getItem("token");

//   /* FETCH */

//  const fetchInstitutes = async () => {
//   try {
//     const res = await getAllInstitutes();

//     console.log("API RESPONSE:", res);

//     const instituteData = Array.isArray(res?.data)
//       ? res.data
//       : Array.isArray(res?.data?.data)
//       ? res.data.data
//       : [];

//     console.log("INSTITUTES:", instituteData);

//     setInstitutes(instituteData);
//   } catch (e) {
//     console.error(e);

//     toast.error(
//       e?.response?.data?.message ||
//         "Failed to load institutes"
//     );
//   }
// };

// const filteredInstitutes = institutes.filter(
//   (institute) => {
//     const status =
//       institute?.approval_status?.toUpperCase();

//     if (location.pathname === "/institutes") {
//       return status === "APPROVED";
//     }

//     if (
//       location.pathname ===
//       "/institutes/pending"
//     ) {
//       return status === "PENDING";
//     }

//     if (
//       location.pathname ===
//       "/institutes/rejected"
//     ) {
//       return status === "REJECTED";
//     }

//     return true;
//   }
// );



//   useEffect(() => {
//     fetchInstitutes();
//   }, []);

//   /* APPROVE */


//   /* DELETE */

//   const handleDelete = async () => {
//     try {
//       await deleteInstitute(
//         deleteModal.institute.id,
//         token
//       );

//       toast.success("Institute deleted");

//       setDeleteModal({
//         open: false,
//         institute: null,
//       });

//       fetchInstitutes();
//     } catch (e) {
//       toast.error(
//         e?.response?.data?.message ||
//           "Delete failed"
//       );
//     }
//   };

//   /* CREATE */

//   const handleCreate = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = new FormData();

//       payload.append("name", formData.name);
//       payload.append(
//         "description",
//         formData.description
//       );
//       payload.append("email", formData.email);
//       payload.append(
//         "phone_number",
//         formData.phone_number
//       );
//       payload.append(
//         "address",
//         formData.address
//       );
//       payload.append("city", formData.city);
//       payload.append("state", formData.state);
//       payload.append(
//         "pincode",
//         formData.pincode
//       );
//       payload.append(
//         "timing",
//         formData.timing
//       );

//       payload.append(
//   "category_id",
//   formData.category_id
// );

// payload.append(
//   "subcategory_id",
//   formData.subcategory_id
// );

//       if (formData.image)
//         payload.append(
//           "image",
//           formData.image
//         );

//      await adminCreateInstitute(
//   payload,
//   token
// );

//       toast.success(
//         "Institute created successfully"
//       );

//       setIsCreateModalOpen(false);

//       fetchInstitutes();
//     } catch (e) {
//       toast.error(
//         e?.response?.data?.message ||
//           "Create failed"
//       );
//     }
//   };

//   /* EDIT */

//   const handleEdit = (institute) => {
//     setEditingInstitute(institute);

//     setFormData({
//       name: institute.name || "",
//       description:
//         institute.description || "",
//       email: institute.email || "",
//       phone_number:
//         institute.phone_number || "",
//       address:
//         institute.address || "",
//       city: institute.city || "",
//       state: institute.state || "",
//       pincode:
//         institute.pincode || "",
//       timing:
//         institute.timing || "",

      
      
//       category_id: "",
//   subcategory_id: "",
//       image: null,
//     });

//     setIsEditModalOpen(true);
//   };

//   /* UPDATE */

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = new FormData();

//       Object.keys(formData).forEach((key) => {
//         if (
//           formData[key] !== null &&
//           formData[key] !== ""
//         ) {
//           payload.append(
//             key,
//             formData[key]
//           );
//         }
//       });

//       await updateInstitute(
//         editingInstitute.id,
//         payload,
//         token
//       );

//       toast.success(
//         "Institute updated successfully"
//       );

//       setIsEditModalOpen(false);

//       fetchInstitutes();
//     } catch (e) {
//       toast.error(
//         e?.response?.data?.message ||
//           "Update failed"
//       );
//     }
//   };

//   const columns = [
// {
//   key: "image_url",
//   label: "Image",
//   sortable: false,
//   render: (_, row) => (
//     <img
//       src={
//         row.image_url ||
//         "https://via.placeholder.com/60"
//       }
//       alt={row.name}
//       className="w-14 h-14 rounded-xl object-cover"
//     />
//   ),
// },
//   {
//     key: "name",
//     label: "Name",
//   },

//   {
//     key: "description",
//     label: "Description",
//     render: (value) => (
//       <div className="max-w-[250px] truncate">
//         {value}
//       </div>
//     ),
//   },

//   {
//     key: "email",
//     label: "Email",
//   },

//   {
//     key: "phone_number",
//     label: "Phone Number",
//   },

//   {
//     key: "address",
//     label: "Address",
//     render: (value) => (
//       <div className="max-w-[200px] truncate">
//         {value}
//       </div>
//     ),
//   },

//   {
//     key: "city",
//     label: "City",
//   },

//   {
//     key: "state",
//     label: "State",
//   },

//   {
//     key: "pincode",
//     label: "Pincode",
//   },

//   {
//     key: "timing",
//     label: "Timing",
//   },

// {
//   key: "category",
//   label: "Category",
//   render: (_, row) =>
//     row.categories?.length
//       ? row.categories
//           .map(
//             (c) => c.category_name
//           )
//           .filter(Boolean)
//           .join(", ")
//       : "-",
// },

// {
//   key: "subcategory",
//   label: "Subcategory",
//   render: (_, row) =>
//     row.categories?.length
//       ? row.categories
//           .map(
//             (c) =>
//               c.subcategory_name
//           )
//           .filter(Boolean)
//           .join(", ")
//       : "-",
// },

//  {
//   key: "approval_status",
//   label: "Status",
//   render: (value) => (
//     <Badge
//       variant={
//         value?.toLowerCase() ||
//         "pending"
//       }
//     >
//       {value || "Pending"}
//     </Badge>
//   ),
// },

// ];


// const handleImageChange = (e) => {
//   setFormData({
//     ...formData,
//     image: e.target.files[0],
//   });
// };
//     return (
//     <div className="space-y-6 animate-slide-up">

//       {/* HEADER */}

//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold gradient-text">
//             Institutes
//           </h1>

//           <p className="text-gray-400 mt-1">
//             Manage all institutes
//           </p>
//         </div>

//         <Button
//           icon={HiPlus}
//           onClick={() => {
//             setFormData({
//               name: "",
//               description: "",
//               email: "",
//               phone_number: "",
//               address: "",
//               city: "",
//               state: "",
//               pincode: "",
//               timing: "",

//   category_id: "",
//   subcategory_id: "",
//               image: null,
//             });

//             setIsCreateModalOpen(true);
//           }}
//         >
//           Add Institute
//         </Button>
//       </div>

//       {/* TABLE */}

//  <DataTable
//   columns={columns}
//   data={filteredInstitutes}
//   actions={(row) => (
//     <div className="flex items-center gap-2">
//       <Button
//         variant="ghost"
//         size="sm"
//         icon={HiPencil}
//         onClick={() => handleEdit(row)}
//       />

//       <Button
//         variant="ghost"
//         size="sm"
//         icon={HiTrash}
//         className="text-red-400"
//         onClick={() =>
//           setDeleteModal({
//             open: true,
//             institute: row,
//           })
//         }
//       />
//     </div>
//   )}
// />
           
//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiPencil}
//               onClick={() =>
//                 handleEdit(row)
//               }
//             />

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiTrash}
//               className="text-red-400"
//               onClick={() =>
//                 setDeleteModal({
//                   open: true,
//                   institute: row,
//                 })
//               }
//             />
//           </div>
//         )}
   

//       {/* CREATE MODAL */}

//       <Modal
//         isOpen={isCreateModalOpen}
//         onClose={() =>
//           setIsCreateModalOpen(false)
//         }
//         title="Create Institute"
//       >
//         <form
//           onSubmit={handleCreate}
//           className="space-y-4"
//         >

//           <FormInput
//             label="Institute Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name: e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Description"
//             type="textarea"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 description:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 email:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Phone"
//             value={
//               formData.phone_number
//             }
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 phone_number:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Address"
//             value={formData.address}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 address:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="City"
//             value={formData.city}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 city:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="State"
//             value={formData.state}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 state:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Pincode"
//             value={formData.pincode}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 pincode:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Timing"
//             value={formData.timing}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 timing:
//                   e.target.value,
//               })
//             }
//           />

// <FormInput
//   label="Category ID"
//   value={formData.category_id}
//   onChange={(e) =>
//     setFormData({
//       ...formData,
//       category_id: e.target.value,
//     })
//   }
// />

// <FormInput
//   label="Subcategory ID"
//   value={formData.subcategory_id}
//   onChange={(e) =>
//     setFormData({
//       ...formData,
//       subcategory_id: e.target.value,
//     })
//   }
// />
        

// <div className="space-y-3">
//   <label className="block text-sm font-medium text-white">
//     Institute Image
//   </label>

//   <div className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4">
//     <input
//       type="file"
//       accept="image/*"
//       onChange={(e) =>
//         setFormData({
//           ...formData,
//           image: e.target.files[0],
//         })
//       }
//       className="
//         w-full
//         text-white
//         file:mr-4
//         file:px-4
//         file:py-2
//         file:rounded-lg
//         file:border-0
//         file:bg-primary-purple
//         file:text-white
//         file:cursor-pointer
//       "
//     />
//   </div>

//   {(formData.image || editingInstitute?.image) && (
//     <img
//       src={
//         formData.image
//           ? URL.createObjectURL(formData.image)
//           : editingInstitute?.image
//       }
//       alt="Preview"
//       className="
//         w-full
//         h-64
//         object-cover
//         rounded-xl
//         border
//         border-white/10
//       "
//     />
//   )}
// </div>


//           <div className="flex justify-end gap-3">
//             <Button
//               variant="secondary"
//               type="button"
//               onClick={() =>
//                 setIsCreateModalOpen(
//                   false
//                 )
//               }
//             >
//               Cancel
//             </Button>

//             <Button type="submit">
//               Create Institute
//             </Button>
//           </div>

//         </form>
//       </Modal>

//       {/* EDIT MODAL */}

//       <Modal
//         isOpen={isEditModalOpen}
//         onClose={() =>
//           setIsEditModalOpen(false)
//         }
//         title="Edit Institute"
//       >
//         <form
//           onSubmit={handleUpdate}
//           className="space-y-4"
//         >

//           <FormInput
//             label="Institute Name"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 name: e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Description"
//             type="textarea"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 description:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 email:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Phone"
//             value={
//               formData.phone_number
//             }
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 phone_number:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Address"
//             value={formData.address}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 address:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="City"
//             value={formData.city}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 city:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="State"
//             value={formData.state}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 state:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Pincode"
//             value={formData.pincode}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 pincode:
//                   e.target.value,
//               })
//             }
//           />

//           <FormInput
//             label="Timing"
//             value={formData.timing}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 timing:
//                   e.target.value,
//               })
//             }
//           />


// <FormInput
//   label="Category ID"
//   value={formData.category_id}
//   onChange={(e) =>
//     setFormData({
//       ...formData,
//       category_id: e.target.value,
//     })
//   }
// />

// <FormInput
//   label="Subcategory ID"
//   value={formData.subcategory_id}
//   onChange={(e) =>
//     setFormData({
//       ...formData,
//       subcategory_id: e.target.value,
//     })
//   }
// />

// <div className="space-y-3">
//   <label className="block text-sm font-medium text-white">
//     Institute Image
//   </label>

//   <div className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4">
//     <input
//       type="file"
//       accept="image/*"
//       onChange={(e) =>
//         setFormData({
//           ...formData,
//           image: e.target.files[0],
//         })
//       }
//       className="
//         w-full
//         text-white
//         file:mr-4
//         file:px-4
//         file:py-2
//         file:rounded-lg
//         file:border-0
//         file:bg-primary-purple
//         file:text-white
//         file:cursor-pointer
//       "
//     />
//   </div>

//   {(formData.image || editingInstitute?.image) && (
//     <img
//       src={
//         formData.image
//           ? URL.createObjectURL(formData.image)
//           : editingInstitute?.image
//       }
//       alt="Preview"
//       className="
//         w-full
//         h-64
//         object-cover
//         rounded-xl
//         border
//         border-white/10
//       "
//     />
//   )}
// </div>



//           <div className="flex justify-end gap-3">
//             <Button
//               variant="secondary"
//               type="button"
//               onClick={() =>
//                 setIsEditModalOpen(
//                   false
//                 )
//               }
//             >
//               Cancel
//             </Button>

//             <Button type="submit">
//               Update Institute
//             </Button>
//           </div>

//         </form>
//       </Modal>

//       {/* DELETE MODAL */}

//       <Modal
//         isOpen={deleteModal.open}
//         onClose={() =>
//           setDeleteModal({
//             open: false,
//             institute: null,
//           })
//         }
//         title="Delete Institute"
//       >
//         <p>
//           Are you sure you want to
//           delete{" "}
//           <b>
//             {
//               deleteModal
//                 .institute?.name
//             }
//           </b>
//           ?
//         </p>

//         <div className="flex justify-end gap-3 mt-5">
//           <Button
//             variant="secondary"
//             onClick={() =>
//               setDeleteModal({
//                 open: false,
//                 institute: null,
//               })
//             }
//           >
//             Cancel
//           </Button>

//           <Button
//             variant="danger"
//             onClick={handleDelete}
//           >
//             Delete
//           </Button>
//         </div>
//       </Modal>

//     </div>
//   );
// }



// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import {
//   HiPencil,
//   HiTrash,
//   HiCheckCircle,
//   HiPlus,
// } from "react-icons/hi";

// import DataTable from "../components/ui/DataTable";
// import Modal from "../components/ui/Modal";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import FormInput from "../components/ui/FormInput";

// import {
//   getAllInstitutes,
//   getPendingInstitutes,
//   getApprovedInstitutes,
//   getRejectedInstitutes,
//   adminCreateInstitute,
//   updateInstitute,
//   updateInstituteApproval,
//   deleteInstitute,
// } from "../services/instituteService";

// export default function Institutes() {
//   const [institutes, setInstitutes] = useState([]);

//   const location = useLocation();

//   const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editingInstitute, setEditingInstitute] = useState(null);

//   const [deleteModal, setDeleteModal] = useState({
//     open: false,
//     institute: null,
//   });

//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     email: "",
//     phone_number: "",
//     address: "",
//     city: "",
//     state: "",
//     pincode: "",
//     timing: "",
//     category_id: "",
//     subcategory_id: "",
//     image: null,
//   });

//   const token = localStorage.getItem("token");

//   /* FETCH */
  
// const filteredInstitutes = institutes.filter((institute) => {
//   const status = institute?.approval_status?.toUpperCase();

//   if (location.pathname === "/institutes") {
//     return status === "APPROVED";
//   }

//   if (location.pathname === "/institutes/pending") {
//     return status === "PENDING";
//   }

//   if (location.pathname === "/institutes/rejected") {
//     return status === "REJECTED";
//   }

//   return true;
// });
// useEffect(() => {
//   fetchInstitutes();
// }, [location.pathname]);

//   /* APPROVE */
//   const handleApprove = async (institute) => {
//     try {
//       // Assuming the API takes the ID and a payload/token
//       await updateInstituteApproval(institute.id, { approval_status: "APPROVED" }, token);
      
//       toast.success("Institute approved successfully");
//       fetchInstitutes();
//     } catch (e) {
//       console.error(e);
//       toast.error(e?.response?.data?.message || "Approval failed");
//     }
//   };

//   /* DELETE */
//   const handleDelete = async () => {
//     try {
//       await deleteInstitute(deleteModal.institute.id, token);
//       toast.success("Institute deleted");
//       setDeleteModal({
//         open: false,
//         institute: null,
//       });
//       fetchInstitutes();
//     } catch (e) {
//       toast.error(e?.response?.data?.message || "Delete failed");
//     }
//   };

//   /* CREATE */
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = new FormData();
//       payload.append("name", formData.name);
//       payload.append("description", formData.description);
//       payload.append("email", formData.email);
//       payload.append("phone_number", formData.phone_number);
//       payload.append("address", formData.address);
//       payload.append("city", formData.city);
//       payload.append("state", formData.state);
//       payload.append("pincode", formData.pincode);
//       payload.append("timing", formData.timing);
//       payload.append("category_id", formData.category_id);
//       payload.append("subcategory_id", formData.subcategory_id);

//       if (formData.image) {
//         payload.append("image", formData.image);
//       }

//       await adminCreateInstitute(payload, token);

//       toast.success("Institute created successfully");
//       setIsCreateModalOpen(false);
//       fetchInstitutes();
//     } catch (e) {
//       toast.error(e?.response?.data?.message || "Create failed");
//     }
//   };

//   /* EDIT */
//   const handleEdit = (institute) => {
//     setEditingInstitute(institute);
//     setFormData({
//       name: institute.name || "",
//       description: institute.description || "",
//       email: institute.email || "",
//       phone_number: institute.phone_number || "",
//       address: institute.address || "",
//       city: institute.city || "",
//       state: institute.state || "",
//       pincode: institute.pincode || "",
//       timing: institute.timing || "",
//       // FIX: Preserve existing IDs instead of clearing them
//       category_id: institute.category_id || "", 
//       subcategory_id: institute.subcategory_id || "",
//       image: null,
//     });
//     setIsEditModalOpen(true);
//   };

//   /* UPDATE */
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = new FormData();
//       Object.keys(formData).forEach((key) => {
//         if (formData[key] !== null && formData[key] !== "") {
//           payload.append(key, formData[key]);
//         }
//       });

//       await updateInstitute(editingInstitute.id, payload, token);

//       toast.success("Institute updated successfully");
//       setIsEditModalOpen(false);
//       fetchInstitutes();
//     } catch (e) {
//       toast.error(e?.response?.data?.message || "Update failed");
//     }
//   };

//   const columns = [
//     {
//       key: "image_url",
//       label: "Image",
//       sortable: false,
//       render: (_, row) => (
//         <img
//           src={row.image_url || "https://via.placeholder.com/60"}
//           alt={row.name}
//           className="w-14 h-14 rounded-xl object-cover"
//         />
//       ),
//     },
//     {
//       key: "name",
//       label: "Name",
//     },
//     {
//       key: "description",
//       label: "Description",
//       render: (value) => <div className="max-w-[250px] truncate">{value}</div>,
//     },
//     {
//       key: "email",
//       label: "Email",
//     },
//     {
//       key: "phone_number",
//       label: "Phone Number",
//     },
//     {
//       key: "address",
//       label: "Address",
//       render: (value) => <div className="max-w-[200px] truncate">{value}</div>,
//     },
//     {
//       key: "city",
//       label: "City",
//     },
//     {
//       key: "state",
//       label: "State",
//     },
//     {
//       key: "pincode",
//       label: "Pincode",
//     },
//     {
//       key: "timing",
//       label: "Timing",
//     },
//     {
//       key: "category",
//       label: "Category",
//       render: (_, row) =>
//         row.categories?.length
//           ? row.categories
//               .map((c) => c.category_name)
//               .filter(Boolean)
//               .join(", ")
//           : "-",
//     },
//     {
//       key: "subcategory",
//       label: "Subcategory",
//       render: (_, row) =>
//         row.categories?.length
//           ? row.categories
//               .map((c) => c.subcategory_name)
//               .filter(Boolean)
//               .join(", ")
//           : "-",
//     },
//     {
//       key: "approval_status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value?.toLowerCase() || "pending"}>
//           {value || "Pending"}
//         </Badge>
//       ),
//     },
//   ];







//   return (
//     <div className="space-y-6 animate-slide-up">
//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold gradient-text">Institutes</h1>
//           <p className="text-gray-400 mt-1">Manage all institutes</p>
//         </div>

//         <Button
//           icon={HiPlus}
//           onClick={() => {
//             setFormData({
//               name: "",
//               description: "",
//               email: "",
//               phone_number: "",
//               address: "",
//               city: "",
//               state: "",
//               pincode: "",
//               timing: "",
//               category_id: "",
//               subcategory_id: "",
//               image: null,
//             });
//             setIsCreateModalOpen(true);
//           }}
//         >
//           Add Institute
//         </Button>
//       </div>

    

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={filteredInstitutes}
//         actions={(row) => (
//           <div className="flex items-center gap-2">
//             {row.approval_status === "PENDING" && (
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 icon={HiCheckCircle}
//                 className="text-green-400"
//                 onClick={() => handleApprove(row)}
//               />
//             )}
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
//               onClick={() =>
//                 setDeleteModal({
//                   open: true,
//                   institute: row,
//                 })
//               }
//             />
//           </div>
//         )}
//       />

//       {/* CREATE MODAL */}
//       <Modal
//         isOpen={isCreateModalOpen}
//         onClose={() => setIsCreateModalOpen(false)}
//         title="Create Institute"
//       >
//         <form onSubmit={handleCreate} className="space-y-4">
//           <FormInput
//             label="Institute Name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />

//           <FormInput
//             label="Description"
//             type="textarea"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <FormInput
//               label="Email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             />
//             <FormInput
//               label="Phone"
//               value={formData.phone_number}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone_number: e.target.value })
//               }
//             />
//           </div>

//           <FormInput
//             label="Address"
//             value={formData.address}
//             onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//           />

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             <FormInput
//               label="City"
//               value={formData.city}
//               onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//             />
//             <FormInput
//               label="State"
//               value={formData.state}
//               onChange={(e) => setFormData({ ...formData, state: e.target.value })}
//             />
//             <FormInput
//               label="Pincode"
//               value={formData.pincode}
//               onChange={(e) =>
//                 setFormData({ ...formData, pincode: e.target.value })
//               }
//             />
//             <FormInput
//               label="Timing"
//               value={formData.timing}
//               onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//              <FormInput
//               label="Category ID"
//               value={formData.category_id}
//               onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
//             />
//             <FormInput
//               label="Subcategory ID"
//               value={formData.subcategory_id}
//               onChange={(e) => setFormData({ ...formData, subcategory_id: e.target.value })}
//             />
//           </div>

//           <div className="space-y-3">
//             <label className="block text-sm font-medium text-white">
//               Institute Image
//             </label>
//             <div className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) =>
//                   setFormData({ ...formData, image: e.target.files[0] })
//                 }
//                 className="w-full text-white file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-primary-purple file:text-white file:cursor-pointer"
//               />
//             </div>
//             {formData.image && (
//               <img
//                 src={URL.createObjectURL(formData.image)}
//                 alt="Preview"
//                 className="w-full h-64 object-cover rounded-xl border border-white/10"
//               />
//             )}
//           </div>

//           <div className="flex justify-end gap-3 pt-4">
//             <Button
//               variant="secondary"
//               type="button"
//               onClick={() => setIsCreateModalOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button type="submit">Create Institute</Button>
//           </div>
//         </form>
//       </Modal>

//       {/* EDIT MODAL */}
//       <Modal
//         isOpen={isEditModalOpen}
//         onClose={() => setIsEditModalOpen(false)}
//         title="Edit Institute"
//       >
//         <form onSubmit={handleUpdate} className="space-y-4">
//           <FormInput
//             label="Institute Name"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />

//           <FormInput
//             label="Description"
//             type="textarea"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({ ...formData, description: e.target.value })
//             }
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//              <FormInput
//               label="Email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             />
//             <FormInput
//               label="Phone"
//               value={formData.phone_number}
//               onChange={(e) =>
//                 setFormData({ ...formData, phone_number: e.target.value })
//               }
//             />
//           </div>

//           <FormInput
//             label="Address"
//             value={formData.address}
//             onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//           />

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//              <FormInput
//               label="City"
//               value={formData.city}
//               onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//             />
//             <FormInput
//               label="State"
//               value={formData.state}
//               onChange={(e) => setFormData({ ...formData, state: e.target.value })}
//             />
//             <FormInput
//               label="Pincode"
//               value={formData.pincode}
//               onChange={(e) =>
//                 setFormData({ ...formData, pincode: e.target.value })
//               }
//             />
//             <FormInput
//               label="Timing"
//               value={formData.timing}
//               onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//              <FormInput
//               label="Category ID"
//               value={formData.category_id}
//               onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
//             />
//             <FormInput
//               label="Subcategory ID"
//               value={formData.subcategory_id}
//               onChange={(e) => setFormData({ ...formData, subcategory_id: e.target.value })}
//             />
//           </div>

//           <div className="space-y-3">
//             <label className="block text-sm font-medium text-white">
//               Institute Image
//             </label>
//             <div className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) =>
//                   setFormData({ ...formData, image: e.target.files[0] })
//                 }
//                 className="w-full text-white file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-primary-purple file:text-white file:cursor-pointer"
//               />
//             </div>
//             {(formData.image || editingInstitute?.image_url) && (
//               <img
//                 src={
//                   formData.image
//                     ? URL.createObjectURL(formData.image)
//                     : editingInstitute?.image_url
//                 }
//                 alt="Preview"
//                 className="w-full h-64 object-cover rounded-xl border border-white/10"
//               />
//             )}
//           </div>

//           <div className="flex justify-end gap-3 pt-4">
//             <Button
//               variant="secondary"
//               type="button"
//               onClick={() => setIsEditModalOpen(false)}
//             >
//               Cancel
//             </Button>
//             <Button type="submit">Update Institute</Button>
//           </div>
//         </form>
//       </Modal>

//       {/* DELETE MODAL */}
//       <Modal
//         isOpen={deleteModal.open}
//         onClose={() => setDeleteModal({ open: false, institute: null })}
//         title="Delete Institute"
//       >
//         <p>
//           Are you sure you want to delete{" "}
//           <b>{deleteModal.institute?.name}</b>?
//         </p>
//         <div className="flex justify-end gap-3 mt-5">
//           <Button
//             variant="secondary"
//             onClick={() => setDeleteModal({ open: false, institute: null })}
//           >
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={handleDelete}>
//             Delete
//           </Button>
//         </div>
//       </Modal>
//     </div>
//   );
// }



import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  HiPencil,
  HiTrash,
  HiCheckCircle,
  HiXCircle,
  HiPlus,
} from "react-icons/hi";

import DataTable from "../components/ui/DataTable";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import FormInput from "../components/ui/FormInput";

import {
  getAllInstitutes,
  getPendingInstitutes,
  getApprovedInstitutes,
  getRejectedInstitutes,
  adminCreateInstitute,
  updateInstitute,
  updateInstituteApproval,
  deleteInstitute,
} from "../services/instituteService";

export default function Institutes() {
  const [institutes, setInstitutes] = useState([]);

  const location = useLocation();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingInstitute, setEditingInstitute] = useState(null);

  const [deleteModal, setDeleteModal] = useState({
    open: false,
    institute: null,
  });

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

  const token = localStorage.getItem("token");

  /* FETCH */
  const fetchInstitutes = async () => {
    try {
      let response;

    if (location.pathname === "/institutes/pending") {
  response = await getPendingInstitutes(token);
} else if (location.pathname === "/institutes/rejected") {
  response = await getRejectedInstitutes(token);
} else {
  response = await getAllInstitutes();
}

      // FIX: Handle API response structure to ensure we set an Array
      let data = response;

      // If response is not an array, try to find the data inside it
      if (!Array.isArray(response)) {
        // Case 1: Standard Axios Response: { data: [...] }
        if (response?.data && Array.isArray(response.data)) {
          data = response.data;
        }
        // Case 2: API Wrapper: { institutes: [...] }
        else if (response?.institutes && Array.isArray(response.institutes)) {
          data = response.institutes;
        } else {
          console.warn("API response did not return an array:", response);
          data = []; // Fallback to empty array to prevent crash
        }
      }

      setInstitutes(data);
    } catch (e) {
      console.error(e);
      toast.error(e?.response?.data?.message || "Failed to fetch institutes");
    }
  };

  /* FILTER LOGIC */
  // FIX: Added "|| [] safety check in case institutes is briefly undefined
  const filteredInstitutes = (institutes || []).filter((institute) => {
    const status = institute?.approval_status?.toUpperCase();

if (location.pathname === "/institutes") {
  return true;
}

    if (location.pathname === "/institutes/pending") {
      return status === "PENDING";
    }

    if (location.pathname === "/institutes/rejected") {
      return status === "REJECTED";
    }

    return true;
  });

  useEffect(() => {
    fetchInstitutes();
  }, [location.pathname]);

  /* APPROVE */
  const handleApprove = async (institute) => {
    try {
    await updateInstituteApproval(
  institute.id,
  "APPROVED",
  token
);

      toast.success("Institute approved successfully");
      fetchInstitutes();
    } catch (e) {
      console.error(e);
      toast.error(e?.response?.data?.message || "Approval failed");
    }
  };

  /* DELETE */
  const handleDelete = async () => {
    try {
      await deleteInstitute(deleteModal.institute.id, token);
      toast.success("Institute deleted");
      setDeleteModal({
        open: false,
        institute: null,
      });
      fetchInstitutes();
    } catch (e) {
      toast.error(e?.response?.data?.message || "Delete failed");
    }
  };

  /* CREATE */
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("description", formData.description);
      payload.append("email", formData.email);
      payload.append("phone_number", formData.phone_number);
      payload.append("address", formData.address);
      payload.append("city", formData.city);
      payload.append("state", formData.state);
      payload.append("pincode", formData.pincode);
      payload.append("timing", formData.timing);
      payload.append("category_id", formData.category_id);
      payload.append("subcategory_id", formData.subcategory_id);

      if (formData.image) {
        payload.append("image", formData.image);
      }

      await adminCreateInstitute(payload, token);

      toast.success("Institute created successfully");
      setIsCreateModalOpen(false);
      fetchInstitutes();
    } catch (e) {
      toast.error(e?.response?.data?.message || "Create failed");
    }
  };

  /* EDIT */
  const handleEdit = (institute) => {
    setEditingInstitute(institute);
    setFormData({
      name: institute.name || "",
      description: institute.description || "",
      email: institute.email || "",
      phone_number: institute.phone_number || "",
      address: institute.address || "",
      city: institute.city || "",
      state: institute.state || "",
      pincode: institute.pincode || "",
      timing: institute.timing || "",
      category_id: institute.category_id || "",
      subcategory_id: institute.subcategory_id || "",
      image: null,
    });
    setIsEditModalOpen(true);
  };

  /* UPDATE */
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const payload = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== null && formData[key] !== "") {
          payload.append(key, formData[key]);
        }
      });

      await updateInstitute(editingInstitute.id, payload, token);

      toast.success("Institute updated successfully");
      setIsEditModalOpen(false);
      fetchInstitutes();
    } catch (e) {
      toast.error(e?.response?.data?.message || "Update failed");
    }
  };

  const columns = [
    {
      key: "image_url",
      label: "Image",
      sortable: false,
      render: (_, row) => (
        <img
          src={row.image_url || "https://via.placeholder.com/60"}
          alt={row.name}
          className="w-14 h-14 rounded-xl object-cover"
        />
      ),
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "description",
      label: "Description",
      render: (value) => (
        <div className="max-w-[250px] truncate">{value}</div>
      ),
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "phone_number",
      label: "Phone Number",
    },
    {
      key: "address",
      label: "Address",
      render: (value) => (
        <div className="max-w-[200px] truncate">{value}</div>
      ),
    },
    {
      key: "city",
      label: "City",
    },
    {
      key: "state",
      label: "State",
    },
    {
      key: "pincode",
      label: "Pincode",
    },
    {
      key: "timing",
      label: "Timing",
    },
    {
      key: "category",
      label: "Category",
      render: (_, row) =>
        row.categories?.length
          ? row.categories
              .map((c) => c.category_name)
              .filter(Boolean)
              .join(", ")
          : "-",
    },
    {
      key: "subcategory",
      label: "Subcategory",
      render: (_, row) =>
        row.categories?.length
          ? row.categories
              .map((c) => c.subcategory_name)
              .filter(Boolean)
              .join(", ")
          : "-",
    },
    {
      key: "approval_status",
      label: "Status",
      render: (value) => (
        <Badge variant={value?.toLowerCase() || "pending"}>
          {value || "Pending"}
        </Badge>
      ),
    },
  ];

  const handleReject = async (institute) => {
  try {
    await updateInstituteApproval(
      institute.id,
      "REJECTED",
      token
    );

    toast.success("Institute rejected");
    fetchInstitutes();
  } catch (e) {
    toast.error(
      e?.response?.data?.message ||
      "Reject failed"
    );
  }
};

  return (
    <div className="space-y-6 animate-slide-up">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Institutes</h1>
          <p className="text-gray-400 mt-1">Manage all institutes</p>
        </div>

        <Button
          icon={HiPlus}
          onClick={() => {
            setFormData({
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
            setIsCreateModalOpen(true);
          }}
        >
          Add Institute
        </Button>
      </div>

      {/* TABLE */}
      <DataTable
  columns={columns}
  data={filteredInstitutes}
  actions={(row) => (
    <div className="flex items-center gap-2">

      {/* APPROVE */}
      {row.approval_status === "PENDING" && (
        <Button
          variant="ghost"
          size="sm"
          icon={HiCheckCircle}
          className="text-green-500 hover:text-green-400"
          onClick={() => handleApprove(row)}
        />
      )}

      {/* REJECT */}
      {row.approval_status === "PENDING" && (
        <Button
          variant="ghost"
          size="sm"
          icon={HiXCircle}
          className="text-red-500 hover:text-red-400"
          onClick={() => handleReject(row)}
        />
      )}

      {/* EDIT */}
      <Button
        variant="ghost"
        size="sm"
        icon={HiPencil}
        className="text-blue-400 hover:text-blue-300"
        onClick={() => handleEdit(row)}
      />

      {/* DELETE */}
      <Button
        variant="ghost"
        size="sm"
        icon={HiTrash}
        className="text-red-400 hover:text-red-300"
        onClick={() =>
          setDeleteModal({
            open: true,
            institute: row,
          })
        }
      />
    </div>
  )}
/>

      {/* CREATE MODAL */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create Institute"
      >
        <form onSubmit={handleCreate} className="space-y-4">
          <FormInput
            label="Institute Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <FormInput
            label="Description"
            type="textarea"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <FormInput
              label="Phone"
              value={formData.phone_number}
              onChange={(e) =>
                setFormData({ ...formData, phone_number: e.target.value })
              }
            />
          </div>

          <FormInput
            label="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FormInput
              label="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            <FormInput
              label="State"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
            <FormInput
              label="Pincode"
              value={formData.pincode}
              onChange={(e) =>
                setFormData({ ...formData, pincode: e.target.value })
              }
            />
            <FormInput
              label="Timing"
              value={formData.timing}
              onChange={(e) =>
                setFormData({ ...formData, timing: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Category ID"
              value={formData.category_id}
              onChange={(e) =>
                setFormData({ ...formData, category_id: e.target.value })
              }
            />
            <FormInput
              label="Subcategory ID"
              value={formData.subcategory_id}
              onChange={(e) =>
                setFormData({ ...formData, subcategory_id: e.target.value })
              }
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-white">
              Institute Image
            </label>
            <div className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files[0] })
                }
                className="w-full text-white file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-primary-purple file:text-white file:cursor-pointer"
              />
            </div>
            {formData.image && (
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Preview"
                className="w-full h-64 object-cover rounded-xl border border-white/10"
              />
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="secondary"
              type="button"
              onClick={() => setIsCreateModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Create Institute</Button>
          </div>
        </form>
      </Modal>

      {/* EDIT MODAL */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Institute"
      >
        <form onSubmit={handleUpdate} className="space-y-4">
          <FormInput
            label="Institute Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <FormInput
            label="Description"
            type="textarea"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <FormInput
              label="Phone"
              value={formData.phone_number}
              onChange={(e) =>
                setFormData({ ...formData, phone_number: e.target.value })
              }
            />
          </div>

          <FormInput
            label="Address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FormInput
              label="City"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            <FormInput
              label="State"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
            <FormInput
              label="Pincode"
              value={formData.pincode}
              onChange={(e) =>
                setFormData({ ...formData, pincode: e.target.value })
              }
            />
            <FormInput
              label="Timing"
              value={formData.timing}
              onChange={(e) =>
                setFormData({ ...formData, timing: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput
              label="Category ID"
              value={formData.category_id}
              onChange={(e) =>
                setFormData({ ...formData, category_id: e.target.value })
              }
            />
            <FormInput
              label="Subcategory ID"
              value={formData.subcategory_id}
              onChange={(e) =>
                setFormData({ ...formData, subcategory_id: e.target.value })
              }
            />
          </div>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-white">
              Institute Image
            </label>
            <div className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-4">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.files[0] })
                }
                className="w-full text-white file:mr-4 file:px-4 file:py-2 file:rounded-lg file:border-0 file:bg-primary-purple file:text-white file:cursor-pointer"
              />
            </div>
            {(formData.image || editingInstitute?.image_url) && (
              <img
                src={
                  formData.image
                    ? URL.createObjectURL(formData.image)
                    : editingInstitute?.image_url
                }
                alt="Preview"
                className="w-full h-64 object-cover rounded-xl border border-white/10"
              />
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="secondary"
              type="button"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Update Institute</Button>
          </div>
        </form>
      </Modal>

      {/* DELETE MODAL */}
      <Modal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, institute: null })}
        title="Delete Institute"
      >
        <p>
          Are you sure you want to delete{" "}
          <b>{deleteModal.institute?.name}</b>?
        </p>
        <div className="flex justify-end gap-3 mt-5">
          <Button
            variant="secondary"
            onClick={() => setDeleteModal({ open: false, institute: null })}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
}