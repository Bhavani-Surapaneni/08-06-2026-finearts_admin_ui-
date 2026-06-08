// // // import { useSelector } from "react-redux";
// // // import { HiEye, HiCheck } from "react-icons/hi";
// // // import { HiArrowPath, HiXMark } from "react-icons/hi2";
// // // import DataTable from "../components/ui/DataTable";
// // // import Button from "../components/ui/Button";
// // // import Badge from "../components/ui/Badge";
// // // import Modal from "../components/ui/Modal";
// // // import { updateBookingStatus } from "../redux/slices/bookingsSlice";
// // // import { useDispatch } from "react-redux";
// // // import { useState } from "react";
// // // import toast from "react-hot-toast";

// // // export default function Bookings() {
// // //   const dispatch = useDispatch();
// // //   const { bookings } = useSelector((state) => state.bookings);
// // //   const [viewingBooking, setViewingBooking] = useState(null);

// // //   const columns = [
// // //     {
// // //       key: "studentName",
// // //       label: "Student",
// // //       render: (value) => <span className="font-medium">{value}</span>,
// // //     },
// // //     { key: "className", label: "Class" },
// // //     { key: "trainerName", label: "Trainer" },
// // //     {
// // //       key: "date",
// // //       label: "Date & Time",
// // //       render: (value, row) => `${value} • ${row.time}`,
// // //     },
// // //     {
// // //       key: "payment",
// // //       label: "Payment",
// // //       render: (value, row) => (
// // //         <div>
// // //           <span className="font-semibold text-green-400">${value}</span>
// // //           <Badge variant={row.type} className="ml-2">
// // //             {row.type}
// // //           </Badge>
// // //         </div>
// // //       ),
// // //     },
// // //     {
// // //       key: "status",
// // //       label: "Status",
// // //       render: (value) => <Badge variant={value}>{value}</Badge>,
// // //     },
// // //   ];

// // //   const handleStatusChange = (id, newStatus) => {
// // //     dispatch(updateBookingStatus({ id, status: newStatus }));
// // //     toast.success(`Booking ${newStatus}!`);
// // //   };

// // //   return (
// // //     <div className="space-y-6 animate-slide-up">
// // //       {/* Page Header */}
// // //       <div>
// // //         <h1 className="text-3xl font-bold gradient-text">Bookings</h1>
// // //         <p className="text-gray-400 mt-1">Manage all trial and paid bookings</p>
// // //       </div>

// // //       {/* Table */}
// // //       <DataTable
// // //         columns={columns}
// // //         data={bookings}
// // //         filterable
// // //         filterOptions={[
// // //           { key: "status", value: "pending", label: "Pending" },
// // //           { key: "status", value: "confirmed", label: "Confirmed" },
// // //           { key: "status", value: "completed", label: "Completed" },
// // //           { key: "status", value: "cancelled", label: "Cancelled" },
// // //           { key: "status", value: "refunded", label: "Refunded" },
// // //         ]}
// // //         actions={(row) => (
// // //           <div className="flex items-center gap-1">
// // //             <Button
// // //               variant="ghost"
// // //               size="sm"
// // //               icon={HiEye}
// // //               onClick={() => setViewingBooking(row)}
// // //             />
// // //             {row.status === "pending" && (
// // //               <>
// // //                 <Button
// // //                   variant="success"
// // //                   size="sm"
// // //                   icon={HiCheck}
// // //                   onClick={() => handleStatusChange(row.id, "confirmed")}
// // //                 >
// // //                   Confirm
// // //                 </Button>
// // //                 <Button
// // //                   variant="danger"
// // //                   size="sm"
// // //                   icon={HiXMark}
// // //                   onClick={() => handleStatusChange(row.id, "cancelled")}
// // //                 >
// // //                   Cancel
// // //                 </Button>
// // //               </>
// // //             )}
// // //             {row.status === "confirmed" && (
// // //               <>
// // //                 <Button
// // //                   variant="success"
// // //                   size="sm"
// // //                   icon={HiCheck}
// // //                   onClick={() => handleStatusChange(row.id, "completed")}
// // //                 >
// // //                   Complete
// // //                 </Button>
// // //                 <Button
// // //                   variant="danger"
// // //                   size="sm"
// // //                   icon={HiArrowPath}
// // //                   onClick={() => handleStatusChange(row.id, "refunded")}
// // //                 >
// // //                   Refund
// // //                 </Button>
// // //               </>
// // //             )}
// // //           </div>
// // //         )}
// // //       />

// // //       {/* View Booking Modal */}
// // //       <Modal
// // //         isOpen={!!viewingBooking}
// // //         onClose={() => setViewingBooking(null)}
// // //         title="Booking Details"
// // //       >
// // //         {viewingBooking && (
// // //           <div className="space-y-4">
// // //             <div className="grid grid-cols-2 gap-4">
// // //               <div className="glass-effect rounded-xl p-4">
// // //                 <p className="text-sm text-gray-400">Student</p>
// // //                 <p className="font-medium">{viewingBooking.studentName}</p>
// // //               </div>
// // //               <div className="glass-effect rounded-xl p-4">
// // //                 <p className="text-sm text-gray-400">Class</p>
// // //                 <p className="font-medium">{viewingBooking.className}</p>
// // //               </div>
// // //               <div className="glass-effect rounded-xl p-4">
// // //                 <p className="text-sm text-gray-400">Trainer</p>
// // //                 <p className="font-medium">{viewingBooking.trainerName}</p>
// // //               </div>
// // //               <div className="glass-effect rounded-xl p-4">
// // //                 <p className="text-sm text-gray-400">Date & Time</p>
// // //                 <p className="font-medium">
// // //                   {viewingBooking.date} at {viewingBooking.time}
// // //                 </p>
// // //               </div>
// // //               <div className="glass-effect rounded-xl p-4">
// // //                 <p className="text-sm text-gray-400">Payment Amount</p>
// // //                 <p className="font-bold text-green-400">
// // //                   ${viewingBooking.payment}
// // //                 </p>
// // //               </div>
// // //               <div className="glass-effect rounded-xl p-4">
// // //                 <p className="text-sm text-gray-400">Type</p>
// // //                 <Badge variant={viewingBooking.type}>
// // //                   {viewingBooking.type}
// // //                 </Badge>
// // //               </div>
// // //             </div>
// // //             <div className="glass-effect rounded-xl p-4">
// // //               <p className="text-sm text-gray-400">Status</p>
// // //               <Badge variant={viewingBooking.status} className="mt-1">
// // //                 {viewingBooking.status}
// // //               </Badge>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </Modal>
// // //     </div>
// // //   );
// // // } 
// // import { useEffect, useState } from "react";
// // import {
// //   HiEye,
// //   HiCheck,
// // } from "react-icons/hi";

// // import {
// //   HiArrowPath,
// //   HiXMark,
// // } from "react-icons/hi2";

// // import DataTable from "../components/ui/DataTable";
// // import Button from "../components/ui/Button";
// // import Badge from "../components/ui/Badge";
// // import Modal from "../components/ui/Modal";

// // import toast from "react-hot-toast";

// // import {
// //   getMyBookings,
// //   confirmBooking,
// //   cancelBooking,
// //   completeBooking,
// // } from "../services/bookingService";

// // export default function Bookings() {
// //   const [bookings, setBookings] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const [viewingBooking, setViewingBooking] =
// //     useState(null);

// //   /* ───────────────── FETCH BOOKINGS ───────────────── */
// //   const fetchBookings = async () => {
// //     try {
// //       setLoading(true);

// //       const response = await getMyBookings();

// //       setBookings(response.data || []);
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Failed to fetch bookings"
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBookings();
// //   }, []);

// //   /* ───────────────── UPDATE STATUS ───────────────── */
// //   const handleStatusChange = async (
// //     id,
// //     status
// //   ) => {
// //     try {
// //       if (status === "CONFIRMED") {
// //         await confirmBooking(id);
// //       }

// //       if (status === "CANCELLED") {
// //         await cancelBooking(id);
// //       }

// //       if (status === "COMPLETED") {
// //         await completeBooking(id);
// //       }

// //       toast.success(`Booking ${status}`);

// //       fetchBookings();
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Status update failed"
// //       );
// //     }
// //   };

// //   /* ───────────────── TABLE COLUMNS ───────────────── */
// //   const columns = [
// //     {
// //       key: "id",
// //       label: "ID",
// //     },

// //     {
// //       key: "class_title",
// //       label: "Class",
// //     },

// //     {
// //       key: "trainer_name",
// //       label: "Trainer",
// //     },

// //     {
// //       key: "institute_name",
// //       label: "Institute",
// //     },

// //     {
// //       key: "amount",
// //       label: "Amount",
// //       render: (value) => `₹${value}`,
// //     },

// //     {
// //       key: "payment_status",
// //       label: "Payment",
// //       render: (value) => (
// //         <Badge variant={value}>
// //           {value}
// //         </Badge>
// //       ),
// //     },

// //     {
// //       key: "status",
// //       label: "Status",
// //       render: (value) => (
// //         <Badge variant={value}>
// //           {value}
// //         </Badge>
// //       ),
// //     },

// //     {
// //       key: "start_date",
// //       label: "Start Date",
// //       render: (value) =>
// //         value
// //           ? new Date(value).toLocaleDateString()
// //           : "-",
// //     },

// //     {
// //       key: "end_date",
// //       label: "End Date",
// //       render: (value) =>
// //         value
// //           ? new Date(value).toLocaleDateString()
// //           : "-",
// //     },
// //   ];

// //   return (
// //     <div className="space-y-6 animate-slide-up">
// //       {/* HEADER */}
// //       <div>
// //         <h1 className="text-3xl font-bold gradient-text">
// //           Bookings
// //         </h1>

// //         <p className="text-gray-400 mt-1">
// //           Manage all bookings
// //         </p>
// //       </div>

// //       {/* TABLE */}
// //       <DataTable
// //         columns={columns}
// //         data={bookings}
// //         loading={loading}
// //         filterable
// //         actions={(row) => (
// //           <div className="flex items-center gap-2">
// //             {/* VIEW */}
// //             <Button
// //               variant="ghost"
// //               size="sm"
// //               icon={HiEye}
// //               onClick={() =>
// //                 setViewingBooking(row)
// //               }
// //             />

// //             {/* CONFIRM */}
// //             {row.status === "PENDING" && (
// //               <>
// //                 <Button
// //                   variant="success"
// //                   size="sm"
// //                   icon={HiCheck}
// //                   onClick={() =>
// //                     handleStatusChange(
// //                       row.id,
// //                       "CONFIRMED"
// //                     )
// //                   }
// //                 >
// //                   Confirm
// //                 </Button>

// //                 <Button
// //                   variant="danger"
// //                   size="sm"
// //                   icon={HiXMark}
// //                   onClick={() =>
// //                     handleStatusChange(
// //                       row.id,
// //                       "CANCELLED"
// //                     )
// //                   }
// //                 >
// //                   Cancel
// //                 </Button>
// //               </>
// //             )}

// //             {/* COMPLETE */}
// //             {row.status === "CONFIRMED" && (
// //               <Button
// //                 variant="success"
// //                 size="sm"
// //                 icon={HiArrowPath}
// //                 onClick={() =>
// //                   handleStatusChange(
// //                     row.id,
// //                     "COMPLETED"
// //                   )
// //                 }
// //               >
// //                 Complete
// //               </Button>
// //             )}
// //           </div>
// //         )}
// //       />

// //       {/* VIEW MODAL */}
// //       <Modal
// //         isOpen={!!viewingBooking}
// //         onClose={() =>
// //           setViewingBooking(null)
// //         }
// //         title="Booking Details"
// //       >
// //         {viewingBooking && (
// //           <div className="space-y-4">
// //             <div className="grid grid-cols-2 gap-4">
// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">
// //                   Class
// //                 </p>

// //                 <p className="font-medium">
// //                   {viewingBooking.class_title}
// //                 </p>
// //               </div>

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">
// //                   Trainer
// //                 </p>

// //                 <p className="font-medium">
// //                   {viewingBooking.trainer_name}
// //                 </p>
// //               </div>

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">
// //                   Institute
// //                 </p>

// //                 <p className="font-medium">
// //                   {viewingBooking.institute_name}
// //                 </p>
// //               </div>

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">
// //                   Amount
// //                 </p>

// //                 <p className="font-bold text-green-400">
// //                   ₹{viewingBooking.amount}
// //                 </p>
// //               </div>

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">
// //                   Payment Status
// //                 </p>

// //                 <Badge
// //                   variant={
// //                     viewingBooking.payment_status
// //                   }
// //                 >
// //                   {
// //                     viewingBooking.payment_status
// //                   }
// //                 </Badge>
// //               </div>

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">
// //                   Booking Status
// //                 </p>

// //                 <Badge
// //                   variant={viewingBooking.status}
// //                 >
// //                   {viewingBooking.status}
// //                 </Badge>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </Modal>
// //     </div>
// //   );
// // }


// // import { useEffect, useState } from "react";
// // import { HiEye, HiCheck } from "react-icons/hi";
// // import { HiArrowPath, HiXMark } from "react-icons/hi2";

// // import DataTable from "../components/ui/DataTable";
// // import Button from "../components/ui/Button";
// // import Badge from "../components/ui/Badge";
// // import Modal from "../components/ui/Modal";

// // import toast from "react-hot-toast";

// // import {
// //   getMyBookings,
// //   confirmBooking,
// //   cancelBooking,
// //   completeBooking,
// // } from "../services/bookingService";

// // export default function Bookings() {
// //   const [bookings, setBookings] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [viewingBooking, setViewingBooking] = useState(null);

// //   /* ───────────────── FETCH BOOKINGS ───────────────── */
// //   const fetchBookings = async () => {
// //     try {
// //       setLoading(true);

// //       const response = await getMyBookings();

// //       // ✅ FIX: correct mapping
// //       setBookings(response?.data || []);
// //     } catch (error) {
// //       console.log("BOOKINGS ERROR:", error);
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Failed to fetch bookings"
// //       );
// //       setBookings([]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchBookings();
// //   }, []);

// //   /* ───────────────── STATUS UPDATE ───────────────── */
// //   const handleStatusChange = async (id, status) => {
// //     try {
// //       if (status === "CONFIRMED") {
// //         await confirmBooking(id);
// //       } else if (status === "CANCELLED") {
// //         await cancelBooking(id);
// //       } else if (status === "COMPLETED") {
// //         await completeBooking(id);
// //       }

// //       toast.success(`Booking ${status}`);

// //       fetchBookings();
// //     } catch (error) {
// //       console.log("STATUS ERROR:", error);
// //       toast.error(
// //         error.response?.data?.message ||
// //           "Status update failed"
// //       );
// //     }
// //   };

// //   /* ───────────────── TABLE COLUMNS ───────────────── */
// //   const columns = [
// //     { key: "id", label: "ID" },

// //     {
// //       key: "class_title",
// //       label: "Class",
// //     },

// //     {
// //       key: "trainer_name",
// //       label: "Trainer",
// //     },

// //     {
// //       key: "institute_name",
// //       label: "Institute",
// //     },

// //     {
// //       key: "amount",
// //       label: "Amount",
// //       render: (value) => `₹${value}`,
// //     },

// //     {
// //       key: "payment_status",
// //       label: "Payment",
// //       render: (value) => (
// //         <Badge variant={value || "PENDING"}>
// //           {value || "PENDING"}
// //         </Badge>
// //       ),
// //     },

// //     {
// //       key: "status",
// //       label: "Status",
// //       render: (value) => (
// //         <Badge variant={value || "PENDING"}>
// //           {value || "PENDING"}
// //         </Badge>
// //       ),
// //     },

// //     {
// //       key: "start_date",
// //       label: "Start Date",
// //       render: (value) =>
// //         value ? new Date(value).toLocaleDateString() : "-",
// //     },

// //     {
// //       key: "end_date",
// //       label: "End Date",
// //       render: (value) =>
// //         value ? new Date(value).toLocaleDateString() : "-",
// //     },
// //   ];

// //   return (
// //     <div className="space-y-6 animate-slide-up">
// //       {/* HEADER */}
// //       <div>
// //         <h1 className="text-3xl font-bold gradient-text">
// //           Bookings
// //         </h1>
// //         <p className="text-gray-400 mt-1">
// //           Manage all bookings
// //         </p>
// //       </div>

// //       {/* TABLE */}
// //       <DataTable
// //         columns={columns}
// //         data={bookings}
// //         loading={loading}
// //         filterable
// //         actions={(row) => (
// //           <div className="flex items-center gap-2">
// //             {/* VIEW */}
// //             <Button
// //               variant="ghost"
// //               size="sm"
// //               icon={HiEye}
// //               onClick={() => setViewingBooking(row)}
// //             />

// //             {/* PENDING ACTIONS */}
// //             {row.status === "PENDING" && (
// //               <>
// //                 <Button
// //                   variant="success"
// //                   size="sm"
// //                   icon={HiCheck}
// //                   onClick={() =>
// //                     handleStatusChange(row.id, "CONFIRMED")
// //                   }
// //                 >
// //                   Confirm
// //                 </Button>

// //                 <Button
// //                   variant="danger"
// //                   size="sm"
// //                   icon={HiXMark}
// //                   onClick={() =>
// //                     handleStatusChange(row.id, "CANCELLED")
// //                   }
// //                 >
// //                   Cancel
// //                 </Button>
// //               </>
// //             )}

// //             {/* CONFIRMED ACTION */}
// //             {row.status === "CONFIRMED" && (
// //               <Button
// //                 variant="success"
// //                 size="sm"
// //                 icon={HiArrowPath}
// //                 onClick={() =>
// //                   handleStatusChange(row.id, "COMPLETED")
// //                 }
// //               >
// //                 Complete
// //               </Button>
// //             )}
// //           </div>
// //         )}
// //       />

// //       {/* MODAL */}
// //       <Modal
// //         isOpen={!!viewingBooking}
// //         onClose={() => setViewingBooking(null)}
// //         title="Booking Details"
// //       >
// //         {viewingBooking && (
// //           <div className="space-y-4">
// //             <div className="grid grid-cols-2 gap-4">

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">Class</p>
// //                 <p className="font-medium">
// //                   {viewingBooking.class_title}
// //                 </p>
// //               </div>

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">Trainer</p>
// //                 <p className="font-medium">
// //                   {viewingBooking.trainer_name}
// //                 </p>
// //               </div>

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">Institute</p>
// //                 <p className="font-medium">
// //                   {viewingBooking.institute_name}
// //                 </p>
// //               </div>

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">Amount</p>
// //                 <p className="font-bold text-green-400">
// //                   ₹{viewingBooking.amount}
// //                 </p>
// //               </div>

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">
// //                   Payment Status
// //                 </p>
// //                 <Badge variant={viewingBooking.payment_status}>
// //                   {viewingBooking.payment_status}
// //                 </Badge>
// //               </div>

// //               <div className="glass-effect rounded-xl p-4">
// //                 <p className="text-sm text-gray-400">
// //                   Booking Status
// //                 </p>
// //                 <Badge variant={viewingBooking.status}>
// //                   {viewingBooking.status}
// //                 </Badge>
// //               </div>

// //             </div>
// //           </div>
// //         )}
// //       </Modal>
// //     </div>
// //   );
// // }
// import { useEffect, useState } from "react";
// import { HiEye, HiCheck } from "react-icons/hi";
// import { HiArrowPath, HiXMark } from "react-icons/hi2";

// import DataTable from "../components/ui/DataTable";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import Modal from "../components/ui/Modal";

// import toast from "react-hot-toast";

// import {
//   getMyBookings,
//   confirmBooking,
//   cancelBooking,
//   completeBooking,
// } from "../services/bookingService";

// export default function Bookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [viewingBooking, setViewingBooking] = useState(null);

//   /* ───────────────── FETCH BOOKINGS ───────────────── */
//   const fetchBookings = async () => {
//     try {
//       setLoading(true);

//       const response = await getMyBookings();

//       console.log("BOOKINGS API:", response);

//       // ✅ backend: { success: true, data: [] }
//       setBookings(response?.data || []);
//     } catch (error) {
//       console.log("BOOKINGS ERROR:", error);
//       toast.error(
//         error.response?.data?.message ||
//           "Failed to fetch bookings"
//       );
//       setBookings([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   /* ───────────────── STATUS UPDATE ───────────────── */
//   const handleStatusChange = async (id, status) => {
//     try {
//       if (status === "CONFIRMED") {
//         await confirmBooking(id);
//       } else if (status === "CANCELLED") {
//         await cancelBooking(id);
//       } else if (status === "COMPLETED") {
//         await completeBooking(id);
//       }

//       toast.success(`Booking ${status}`);
//       fetchBookings();
//     } catch (error) {
//       console.log("STATUS ERROR:", error);
//       toast.error(
//         error.response?.data?.message ||
//           "Status update failed"
//       );
//     }
//   };

//   /* ───────────────── TABLE COLUMNS ───────────────── */
//   const columns = [
//     { key: "id", label: "ID" },

//     { key: "class_title", label: "Class" },
//     { key: "trainer_name", label: "Trainer" },
//     { key: "institute_name", label: "Institute" },

//     {
//       key: "amount",
//       label: "Amount",
//       render: (value) => `₹${value}`,
//     },

//     {
//       key: "payment_status",
//       label: "Payment",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "start_date",
//       label: "Start Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },

//     {
//       key: "end_date",
//       label: "End Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">
//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Bookings
//         </h1>
//         <p className="text-gray-400 mt-1">
//           Manage all bookings
//         </p>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={bookings}
//         loading={loading}
//         filterable
//         actions={(row) => (
//           <div className="flex items-center gap-2">
//             {/* VIEW */}
//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiEye}
//               onClick={() => setViewingBooking(row)}
//             />

//             {/* PENDING */}
//             {row.status === "PENDING" && (
//               <>
//                 <Button
//                   variant="success"
//                   size="sm"
//                   icon={HiCheck}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CONFIRMED")
//                   }
//                 >
//                   Confirm
//                 </Button>

//                 <Button
//                   variant="danger"
//                   size="sm"
//                   icon={HiXMark}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CANCELLED")
//                   }
//                 >
//                   Cancel
//                 </Button>
//               </>
//             )}

//             {/* CONFIRMED */}
//             {row.status === "CONFIRMED" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiArrowPath}
//                 onClick={() =>
//                   handleStatusChange(row.id, "COMPLETED")
//                 }
//               >
//                 Complete
//               </Button>
//             )}
//           </div>
//         )}
//       />

//       {/* MODAL */}
//       <Modal
//         isOpen={!!viewingBooking}
//         onClose={() => setViewingBooking(null)}
//         title="Booking Details"
//       >
//         {viewingBooking && (
//           <div className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">

//               <div className="glass-effect rounded-xl p-4">
//                 <p className="text-sm text-gray-400">Class</p>
//                 <p className="font-medium">
//                   {viewingBooking.class_title}
//                 </p>
//               </div>

//               <div className="glass-effect rounded-xl p-4">
//                 <p className="text-sm text-gray-400">Trainer</p>
//                 <p className="font-medium">
//                   {viewingBooking.trainer_name}
//                 </p>
//               </div>

//               <div className="glass-effect rounded-xl p-4">
//                 <p className="text-sm text-gray-400">Institute</p>
//                 <p className="font-medium">
//                   {viewingBooking.institute_name}
//                 </p>
//               </div>

//               <div className="glass-effect rounded-xl p-4">
//                 <p className="text-sm text-gray-400">Amount</p>
//                 <p className="font-bold text-green-400">
//                   ₹{viewingBooking.amount}
//                 </p>
//               </div>

//               <div className="glass-effect rounded-xl p-4">
//                 <p className="text-sm text-gray-400">
//                   Payment Status
//                 </p>
//                 <Badge variant={viewingBooking.payment_status}>
//                   {viewingBooking.payment_status}
//                 </Badge>
//               </div>

//               <div className="glass-effect rounded-xl p-4">
//                 <p className="text-sm text-gray-400">
//                   Booking Status
//                 </p>
//                 <Badge variant={viewingBooking.status}>
//                   {viewingBooking.status}
//                 </Badge>
//               </div>

//             </div>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// import { useEffect, useState } from "react";
// import { HiEye, HiCheck } from "react-icons/hi";
// import { HiArrowPath, HiXMark } from "react-icons/hi2";

// import DataTable from "../components/ui/DataTable";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import Modal from "../components/ui/Modal";

// import toast from "react-hot-toast";

// import {
//   getMyBookings,
//   confirmBooking,
//   cancelBooking,
//   completeBooking,
// } from "../services/bookingService";

// export default function Bookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewingBooking, setViewingBooking] = useState(null);

//   /* ───────────────── FETCH BOOKINGS ───────────────── */
//   const fetchBookings = async () => {
//     try {
//       setLoading(true);

//       const response = await getMyBookings();

//       console.log("BOOKINGS API:", response);

//       // ✅ FIXED HERE (IMPORTANT)
//       setBookings(response?.data || []);
//     } catch (error) {
//       console.log("FETCH ERROR:", error);

//       toast.error(
//         error.response?.data?.message || "Failed to fetch bookings"
//       );

//       setBookings([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   /* ───────────────── STATUS UPDATE ───────────────── */
//   const handleStatusChange = async (id, status) => {
//     try {
//       if (status === "CONFIRMED") await confirmBooking(id);
//       else if (status === "CANCELLED") await cancelBooking(id);
//       else if (status === "COMPLETED") await completeBooking(id);

//       toast.success(`Booking ${status}`);

//       fetchBookings();
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message || "Status update failed"
//       );
//     }
//   };

//   /* ───────────────── COLUMNS ───────────────── */
//   const columns = [
//     { key: "id", label: "ID" },

//     { key: "class_title", label: "Class" },

//     { key: "trainer_name", label: "Trainer" },

//     { key: "institute_name", label: "Institute" },

//     {
//       key: "amount",
//       label: "Amount",
//       render: (value) => `₹${value}`,
//     },

//     {
//       key: "payment_status",
//       label: "Payment",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "start_date",
//       label: "Start Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },

//     {
//       key: "end_date",
//       label: "End Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">
//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Bookings
//         </h1>
//         <p className="text-gray-400 mt-1">
//           Manage all bookings
//         </p>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={bookings}
//         loading={loading}
//         filterable
//         actions={(row) => (
//           <div className="flex items-center gap-2">
//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiEye}
//               onClick={() => setViewingBooking(row)}
//             />

//             {row.status === "PENDING" && (
//               <>
//                 <Button
//                   variant="success"
//                   size="sm"
//                   icon={HiCheck}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CONFIRMED")
//                   }
//                 >
//                   Confirm
//                 </Button>

//                 <Button
//                   variant="danger"
//                   size="sm"
//                   icon={HiXMark}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CANCELLED")
//                   }
//                 >
//                   Cancel
//                 </Button>
//               </>
//             )}

//             {row.status === "CONFIRMED" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiArrowPath}
//                 onClick={() =>
//                   handleStatusChange(row.id, "COMPLETED")
//                 }
//               >
//                 Complete
//               </Button>
//             )}
//           </div>
//         )}
//       />

//       {/* MODAL */}
//       <Modal
//         isOpen={!!viewingBooking}
//         onClose={() => setViewingBooking(null)}
//         title="Booking Details"
//       >
//         {viewingBooking && (
//           <div className="grid grid-cols-2 gap-4">

//             <div className="p-4 glass-effect rounded-xl">
//               <p className="text-sm text-gray-400">Class</p>
//               <p>{viewingBooking.class_title}</p>
//             </div>

//             <div className="p-4 glass-effect rounded-xl">
//               <p className="text-sm text-gray-400">Trainer</p>
//               <p>{viewingBooking.trainer_name}</p>
//             </div>

//             <div className="p-4 glass-effect rounded-xl">
//               <p className="text-sm text-gray-400">Institute</p>
//               <p>{viewingBooking.institute_name}</p>
//             </div>

//             <div className="p-4 glass-effect rounded-xl">
//               <p className="text-sm text-gray-400">Amount</p>
//               <p className="font-bold text-green-400">
//                 ₹{viewingBooking.amount}
//               </p>
//             </div>

//             <div className="p-4 glass-effect rounded-xl">
//               <p className="text-sm text-gray-400">Payment</p>
//               <Badge variant={viewingBooking.payment_status}>
//                 {viewingBooking.payment_status}
//               </Badge>
//             </div>

//             <div className="p-4 glass-effect rounded-xl">
//               <p className="text-sm text-gray-400">Status</p>
//               <Badge variant={viewingBooking.status}>
//                 {viewingBooking.status}
//               </Badge>
//             </div>

//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { HiEye, HiCheck } from "react-icons/hi";
// import { HiArrowPath, HiXMark } from "react-icons/hi2";

// import DataTable from "../components/ui/DataTable";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import Modal from "../components/ui/Modal";

// import toast from "react-hot-toast";

// import {
//   getMyBookings,
//   confirmBooking,
//   cancelBooking,
//   completeBooking,
// } from "../services/bookingService";

// export default function Bookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewingBooking, setViewingBooking] = useState(null);

//   /* ───────────────── FETCH BOOKINGS ───────────────── */
//   const fetchBookings = async () => {
//     try {
//       setLoading(true);

//       const response = await getMyBookings();

//       console.log("BOOKINGS FULL RESPONSE:", response);

//       // ✅ SAFE PARSING
//       const data = response?.data?.data;

//       if (!Array.isArray(data)) {
//         console.warn("Invalid bookings response:", data);
//         setBookings([]);
//         return;
//       }

//       setBookings(data);

//     } catch (error) {
//       console.log("FETCH ERROR FULL:", error);

//       toast.error(
//         error?.response?.data?.message || "Failed to fetch bookings"
//       );

//       setBookings([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   /* ───────────────── STATUS UPDATE ───────────────── */
//   const handleStatusChange = async (id, status) => {
//     try {
//       if (status === "CONFIRMED") await confirmBooking(id);
//       else if (status === "CANCELLED") await cancelBooking(id);
//       else if (status === "COMPLETED") await completeBooking(id);

//       toast.success(`Booking ${status}`);
//       fetchBookings();
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message || "Status update failed"
//       );
//     }
//   };

//   /* ───────────────── COLUMNS ───────────────── */
//   const columns = [
//     { key: "id", label: "ID" },
//     { key: "class_title", label: "Class" },
//     { key: "trainer_name", label: "Trainer" },
//     { key: "institute_name", label: "Institute" },

//     {
//       key: "amount",
//       label: "Amount",
//       render: (value) => `₹${value || 0}`,
//     },

//     {
//       key: "payment_status",
//       label: "Payment",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "start_date",
//       label: "Start Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },

//     {
//       key: "end_date",
//       label: "End Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">

//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Bookings
//         </h1>
//         <p className="text-gray-400 mt-1">
//           Manage all bookings
//         </p>
//       </div>

//       <DataTable
//         columns={columns}
//         data={bookings}
//         loading={loading}
//         filterable
//         actions={(row) => (
//           <div className="flex items-center gap-2">

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiEye}
//               onClick={() => setViewingBooking(row)}
//             />

//             {row.status === "PENDING" && (
//               <>
//                 <Button
//                   variant="success"
//                   size="sm"
//                   icon={HiCheck}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CONFIRMED")
//                   }
//                 >
//                   Confirm
//                 </Button>

//                 <Button
//                   variant="danger"
//                   size="sm"
//                   icon={HiXMark}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CANCELLED")
//                   }
//                 >
//                   Cancel
//                 </Button>
//               </>
//             )}

//             {row.status === "CONFIRMED" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiArrowPath}
//                 onClick={() =>
//                   handleStatusChange(row.id, "COMPLETED")
//                 }
//               >
//                 Complete
//               </Button>
//             )}

//           </div>
//         )}
//       />

//       {/* MODAL */}
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { HiEye, HiCheck } from "react-icons/hi";
// import { HiArrowPath, HiXMark } from "react-icons/hi2";

// import DataTable from "../components/ui/DataTable";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";

// import toast from "react-hot-toast";

// import {
//   getMyBookings,
//   confirmBooking,
//   cancelBooking,
//   completeBooking,
// } from "../services/bookingService";

// export default function Bookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewingBooking, setViewingBooking] = useState(null);

//   /* ───────────────── FETCH BOOKINGS ───────────────── */
//   const fetchBookings = async () => {
//     try {
//       setLoading(true);

//       const response = await getMyBookings();

//       console.log("BOOKINGS RESPONSE:", response);

//       // backend format: { success: true, data: [] }
//       const data = response?.data;

//       if (!Array.isArray(data)) {
//         setBookings([]);
//         return;
//       }

//       setBookings(data);

//     } catch (error) {
//       console.log("FETCH ERROR:", error);

//       toast.error(
//         error?.response?.data?.message ||
//         error.message ||
//         "Failed to fetch bookings"
//       );

//       setBookings([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   /* ───────────────── STATUS UPDATE ───────────────── */
//   const handleStatusChange = async (id, status) => {
//     try {
//       if (status === "CONFIRMED") await confirmBooking(id);
//       else if (status === "CANCELLED") await cancelBooking(id);
//       else if (status === "COMPLETED") await completeBooking(id);

//       toast.success(`Booking ${status}`);
//       fetchBookings();
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//         error.message ||
//         "Status update failed"
//       );
//     }
//   };

//   /* ───────────────── TABLE COLUMNS ───────────────── */
//   const columns = [
//     { key: "id", label: "ID" },
//     { key: "class_title", label: "Class" },
//     { key: "trainer_name", label: "Trainer" },
//     { key: "institute_name", label: "Institute" },

//     {
//       key: "amount",
//       label: "Amount",
//       render: (value) => `₹${value || 0}`,
//     },

//     {
//       key: "payment_status",
//       label: "Payment",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "start_date",
//       label: "Start Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },

//     {
//       key: "end_date",
//       label: "End Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Bookings
//         </h1>
//         <p className="text-gray-400 mt-1">
//           Manage all bookings
//         </p>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={bookings}
//         loading={loading}
//         filterable
//         actions={(row) => (
//           <div className="flex items-center gap-2">

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiEye}
//               onClick={() => setViewingBooking(row)}
//             />

//             {row.status === "PENDING" && (
//               <>
//                 <Button
//                   variant="success"
//                   size="sm"
//                   icon={HiCheck}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CONFIRMED")
//                   }
//                 >
//                   Confirm
//                 </Button>

//                 <Button
//                   variant="danger"
//                   size="sm"
//                   icon={HiXMark}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CANCELLED")
//                   }
//                 >
//                   Cancel
//                 </Button>
//               </>
//             )}

//             {row.status === "CONFIRMED" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiArrowPath}
//                 onClick={() =>
//                   handleStatusChange(row.id, "COMPLETED")
//                 }
//               >
//                 Complete
//               </Button>
//             )}

//           </div>
//         )}
//       />
//     </div>
//   );
// }

// import { useEffect, useState } from "react";
// import { HiEye, HiCheck } from "react-icons/hi";
// import { HiArrowPath, HiXMark } from "react-icons/hi2";

// import DataTable from "../components/ui/DataTable";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";

// import toast from "react-hot-toast";

// import {
//   getMyBookings,
//   confirmBooking,
//   cancelBooking,
//   completeBooking,
// } from "../services/bookingService";

// export default function Bookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewingBooking, setViewingBooking] = useState(null);

//   /* ───────────────── FETCH BOOKINGS ───────────────── */
//   const fetchBookings = async () => {
//     try {
//       setLoading(true);

//       const response = await getMyBookings();

//       console.log("BOOKINGS RESPONSE:", response);

//       // ✅ FIXED: correct backend structure { success, data }
//       const data = response?.data?.data;

//       if (!Array.isArray(data)) {
//         setBookings([]);
//         return;
//       }

//       setBookings(data);

//     } catch (error) {
//       console.log("FETCH ERROR:", error);

//       toast.error(
//         error?.response?.data?.message ||
//         error.message ||
//         "Failed to fetch bookings"
//       );

//       setBookings([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   /* ───────────────── STATUS UPDATE ───────────────── */
//   const handleStatusChange = async (id, status) => {
//     try {
//       if (status === "CONFIRMED") await confirmBooking(id);
//       else if (status === "CANCELLED") await cancelBooking(id);
//       else if (status === "COMPLETED") await completeBooking(id);

//       toast.success(`Booking ${status}`);
//       fetchBookings();

//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//         error.message ||
//         "Status update failed"
//       );
//     }
//   };

//   /* ───────────────── TABLE COLUMNS ───────────────── */
//   const columns = [
//     { key: "id", label: "ID" },
//     { key: "class_title", label: "Class" },
//     { key: "trainer_name", label: "Trainer" },
//     { key: "institute_name", label: "Institute" },

//     {
//       key: "amount",
//       label: "Amount",
//       render: (value) => `₹${value || 0}`,
//     },

//     {
//       key: "payment_status",
//       label: "Payment",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "start_date",
//       label: "Start Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },

//     {
//       key: "end_date",
//       label: "End Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Bookings
//         </h1>
//         <p className="text-gray-400 mt-1">
//           Manage all bookings
//         </p>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={bookings}
//         loading={loading}
//         filterable
//         actions={(row) => (
//           <div className="flex items-center gap-2">

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiEye}
//               onClick={() => setViewingBooking(row)}
//             />

//             {row.status === "PENDING" && (
//               <>
//                 <Button
//                   variant="success"
//                   size="sm"
//                   icon={HiCheck}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CONFIRMED")
//                   }
//                 >
//                   Confirm
//                 </Button>

//                 <Button
//                   variant="danger"
//                   size="sm"
//                   icon={HiXMark}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CANCELLED")
//                   }
//                 >
//                   Cancel
//                 </Button>
//               </>
//             )}

//             {row.status === "CONFIRMED" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiArrowPath}
//                 onClick={() =>
//                   handleStatusChange(row.id, "COMPLETED")
//                 }
//               >
//                 Complete
//               </Button>
//             )}

//           </div>
//         )}
//       />
//     </div>
//   );
// } 

// import { useEffect, useState } from "react";
// import { HiEye, HiCheck } from "react-icons/hi";
// import { HiArrowPath, HiXMark } from "react-icons/hi2";

// import DataTable from "../components/ui/DataTable";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";

// import toast from "react-hot-toast";

// import {
//   getMyBookings,
//   confirmBooking,
//   cancelBooking,
//   completeBooking,
// } from "../services/bookingService";

// export default function Bookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewingBooking, setViewingBooking] = useState(null);

//   /* ───────────────── FETCH BOOKINGS ───────────────── */
//   const fetchBookings = async () => {
//     try {
//       setLoading(true);

//       const response = await getMyBookings();

//       console.log("BOOKINGS RESPONSE:", response);

//       // ✅ FIXED: backend format = { success: true, data: [...] }
//       const data = response?.data;

//       if (!Array.isArray(data)) {
//         setBookings([]);
//         return;
//       }

//       setBookings(data);

//     } catch (error) {
//       console.log("FETCH ERROR:", error);

//       toast.error(
//         error?.response?.data?.message ||
//         error.message ||
//         "Failed to fetch bookings"
//       );

//       setBookings([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   /* ───────────────── STATUS UPDATE ───────────────── */
//   const handleStatusChange = async (id, status) => {
//     try {
//       if (status === "CONFIRMED") await confirmBooking(id);
//       else if (status === "CANCELLED") await cancelBooking(id);
//       else if (status === "COMPLETED") await completeBooking(id);

//       toast.success(`Booking ${status}`);
//       fetchBookings();
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//         error.message ||
//         "Status update failed"
//       );
//     }
//   };

//   /* ───────────────── TABLE COLUMNS ───────────────── */
//   const columns = [
//     { key: "id", label: "ID" },
//     { key: "class_title", label: "Class" },
//     { key: "trainer_name", label: "Trainer" },
//     { key: "institute_name", label: "Institute" },

//     {
//       key: "amount",
//       label: "Amount",
//       render: (value) => `₹${value || 0}`,
//     },

//     {
//       key: "payment_status",
//       label: "Payment",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "start_date",
//       label: "Start Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },

//     {
//       key: "end_date",
//       label: "End Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Bookings
//         </h1>
//         <p className="text-gray-400 mt-1">
//           Manage all bookings
//         </p>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={bookings}
//         loading={loading}
//         filterable
//         actions={(row) => (
//           <div className="flex items-center gap-2">

//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiEye}
//               onClick={() => setViewingBooking(row)}
//             />

//             {row.status === "PENDING" && (
//               <>
//                 <Button
//                   variant="success"
//                   size="sm"
//                   icon={HiCheck}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CONFIRMED")
//                   }
//                 >
//                   Confirm
//                 </Button>

//                 <Button
//                   variant="danger"
//                   size="sm"
//                   icon={HiXMark}
//                   onClick={() =>
//                     handleStatusChange(row.id, "CANCELLED")
//                   }
//                 >
//                   Cancel
//                 </Button>
//               </>
//             )}

//             {row.status === "CONFIRMED" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiArrowPath}
//                 onClick={() =>
//                   handleStatusChange(row.id, "COMPLETED")
//                 }
//               >
//                 Complete
//               </Button>
//             )}

//           </div>
//         )}
//       />
//     </div>
//   );
// }


// import { useEffect, useState } from "react";

// import { HiEye, HiCheck } from "react-icons/hi";
// import { HiArrowPath, HiXMark } from "react-icons/hi2";

// import DataTable from "../components/ui/DataTable";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";

// import toast from "react-hot-toast";

// import {
//   getAllBookings,
//   confirmBooking,
//   cancelBooking,
//   completeBooking,
// } from "../services/bookingService";

// export default function Bookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(false);

//   /* ─────────────────────────────────────────────
//      FETCH BOOKINGS
//   ───────────────────────────────────────────── */
//   const fetchBookings = async () => {
//     try {
//       setLoading(true);

//       const response = await getAllBookings();

//       console.log("BOOKINGS RESPONSE:", response);

//       if (response?.success) {
//         setBookings(response.data || []);
//       } else {
//         setBookings([]);
//       }

//     } catch (error) {
//       console.log("BOOKINGS ERROR:", error);

//       toast.error(
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to fetch bookings"
//       );

//       setBookings([]);

//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   /* ─────────────────────────────────────────────
//      HANDLE STATUS
//   ───────────────────────────────────────────── */
//   const handleStatusChange = async (id, status) => {
//     try {

//       if (status === "CONFIRMED") {
//         await confirmBooking(id);
//       }

//       if (status === "CANCELLED") {
//         await cancelBooking(id);
//       }

//       if (status === "COMPLETED") {
//         await completeBooking(id);
//       }

//       toast.success(`Booking ${status}`);

//       fetchBookings();

//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//         error?.message ||
//         "Status update failed"
//       );
//     }
//   };

//   /* ─────────────────────────────────────────────
//      TABLE COLUMNS
//   ───────────────────────────────────────────── */
//   const columns = [
//     {
//       key: "id",
//       label: "ID",
//     },

//     {
//       key: "class_title",
//       label: "Class",
//       render: (value) => value || "-",
//     },

//     {
//       key: "trainer_name",
//       label: "Trainer",
//       render: (value) => value || "-",
//     },

//     {
//       key: "institute_name",
//       label: "Institute",
//       render: (value) => value || "-",
//     },

//     {
//       key: "amount",
//       label: "Amount",
//       render: (value) => `₹${value || 0}`,
//     },

//     {
//       key: "payment_status",
//       label: "Payment",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "start_date",
//       label: "Start Date",
//       render: (value) =>
//         value
//           ? new Date(value).toLocaleDateString()
//           : "-",
//     },

//     {
//       key: "end_date",
//       label: "End Date",
//       render: (value) =>
//         value
//           ? new Date(value).toLocaleDateString()
//           : "-",
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Bookings
//         </h1>

//         <p className="text-gray-400 mt-1">
//           Manage all bookings
//         </p>
//       </div>

//       {/* TABLE */}    
//       <DataTable
//         columns={columns}
//         data={bookings}
//         loading={loading}
//         filterable
//         actions={(row) => (
//           <div className="flex items-center gap-2">

//             {/* VIEW */}
//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiEye}
//               onClick={() => console.log(row)}
//             /
//   >

//             {/* CONFIRM */}
//             {row.status === "PENDING" && (
//               <>
//                 <Button
//                   variant="success"
//                   size="sm"
//                   icon={HiCheck}
//                   onClick={() =>
//                     handleStatusChange(
//                       row.id,
//                       "CONFIRMED"
//                     )
//                   }
//                 >
//                   Confirm
//                 </Button>

//                 <Button
//                   variant="danger"
//                   size="sm"
//                   icon={HiXMark}
//                   onClick={() =>
//                     handleStatusChange(
//                       row.id,
//                       "CANCELLED"
//                     )
//                   }
//                 >
//                   Cancel
//                 </Button>
//               </>
//             )}

//             {/* COMPLETE */}
//             {row.status === "CONFIRMED" && (
//               <Button
//                 variant="success"
//                 size="sm"
//                 icon={HiArrowPath}
//                 onClick={() =>
//                   handleStatusChange(
//                     row.id,
//                     "COMPLETED"
//                   )
//                 }
//               >
//                 Complete
//               </Button>
//             )}

//           </div>
//         )}
//       />

//     </div>
//   );
// }

// import { useEffect, useState } from "react";

// import DataTable from "../components/ui/DataTable";
// import Badge from "../components/ui/Badge";

// import toast from "react-hot-toast";

// import { getAllBookings } from "../services/bookingService";

// export default function Bookings() {
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(false);

//   /* FETCH BOOKINGS */
//   const fetchBookings = async () => {
//     try {
//       setLoading(true);

//       const response = await getAllBookings();

//       if (response?.success) {
//         setBookings(response.data || []);
//       } else {
//         setBookings([]);
//       }
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//           error?.message ||
//           "Failed to fetch bookings"
//       );
//       setBookings([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchBookings();
//   }, []);

//   /* TABLE COLUMNS */
//   const columns = [
//     { key: "id", label: "ID" },

//     {
//       key: "class_title",
//       label: "Class",
//       render: (value) => value || "-",
//     },

//     {
//       key: "trainer_name",
//       label: "Trainer",
//       render: (value) => value || "-",
//     },

//     {
//       key: "institute_name",
//       label: "Institute",
//       render: (value) => value || "-",
//     },

//     {
//       key: "amount",
//       label: "Amount",
//       render: (value) => `₹${value || 0}`,
//     },

//     {
//       key: "payment_status",
//       label: "Payment",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "status",
//       label: "Status",
//       render: (value) => (
//         <Badge variant={value || "PENDING"}>
//           {value || "PENDING"}
//         </Badge>
//       ),
//     },

//     {
//       key: "start_date",
//       label: "Start Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },

//     {
//       key: "end_date",
//       label: "End Date",
//       render: (value) =>
//         value ? new Date(value).toLocaleDateString() : "-",
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">
//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Bookings
//         </h1>
//         <p className="text-gray-400 mt-1">Manage all bookings</p>
//       </div>

//       {/* TABLE (NO ACTIONS) */}
//       <DataTable
//         columns={columns}
//         data={bookings}
//         loading={loading}
//         filterable
//       />
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { HiEye } from "react-icons/hi";

import DataTable from "../components/ui/DataTable";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Modal from "../components/ui/Modal";

import toast from "react-hot-toast";

import { getAllBookings } from "../services/bookingService";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedBooking, setSelectedBooking] = useState(null);

  /* FETCH */
  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await getAllBookings();

      if (response?.success) {
        setBookings(response.data || []);
      } else {
        setBookings([]);
      }
    } catch (error) {
      toast.error("Failed to fetch bookings");
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  /* COLUMNS */
  const columns = [
    { key: "id", label: "ID" },

    {
      key: "class_title",
      label: "Class",
      render: (v) => v || "-",
    },

    {
      key: "trainer_name",
      label: "Trainer",
      render: (v) => v || "-",
    },

    {
      key: "institute_name",
      label: "Institute",
      render: (v) => v || "-",
    },

    {
      key: "amount",
      label: "Amount",
      render: (v) => `₹${v || 0}`,
    },

    {
      key: "payment_status",
      label: "Payment",
      render: (v) => (
        <Badge variant={v || "PENDING"}>{v || "PENDING"}</Badge>
      ),
    },

    {
      key: "status",
      label: "Status",
      render: (v) => (
        <Badge variant={v || "PENDING"}>{v || "PENDING"}</Badge>
      ),
    },

    {
      key: "start_date",
      label: "Start Date",
      render: (v) => (v ? new Date(v).toLocaleDateString() : "-"),
    },

    {
      key: "end_date",
      label: "End Date",
      render: (v) => (v ? new Date(v).toLocaleDateString() : "-"),
    },
  ];

  return (
    <div className="space-y-6 animate-slide-up">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold gradient-text">
          Bookings
        </h1>
        <p className="text-gray-400 mt-1">
          Manage all bookings
        </p>
      </div>

      {/* TABLE */}
      <DataTable
        columns={columns}
        data={bookings}
        loading={loading}
        filterable
        actions={(row) => (
          <div className="flex items-center gap-2">

            {/* 👁 VIEW BUTTON */}
            <Button
              variant="ghost"
              size="sm"
              icon={HiEye}
              onClick={() => setSelectedBooking(row)}
            />
          </div>
        )}
      />

      {/* DETAILS MODAL */}
      <Modal
        isOpen={!!selectedBooking}
        onClose={() => setSelectedBooking(null)}
        title="Booking Details"
      >
        {selectedBooking && (
          <div className="space-y-4">

            <div>
              <p className="text-gray-400 text-sm">Class</p>
              <p className="font-semibold">
                {selectedBooking.class_title}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Trainer</p>
              <p className="font-semibold">
                {selectedBooking.trainer_name}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Institute</p>
              <p className="font-semibold">
                {selectedBooking.institute_name}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Amount</p>
              <p className="font-semibold text-green-400">
                ₹{selectedBooking.amount}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Status</p>
              <Badge variant={selectedBooking.status}>
                {selectedBooking.status}
              </Badge>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Payment</p>
              <Badge variant={selectedBooking.payment_status}>
                {selectedBooking.payment_status}
              </Badge>
            </div>

            <div>
              <p className="text-gray-400 text-sm">Start Date</p>
              <p>
                {selectedBooking.start_date
                  ? new Date(selectedBooking.start_date).toLocaleDateString()
                  : "-"}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">End Date</p>
              <p>
                {selectedBooking.end_date
                  ? new Date(selectedBooking.end_date).toLocaleDateString()
                  : "-"}
              </p>
            </div>

          </div>
        )}
      </Modal>

    </div>
  );
}