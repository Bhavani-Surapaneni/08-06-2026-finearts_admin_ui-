// import { useEffect, useState } from "react";

// import {
//   HiEye,
//   HiMail,
// } from "react-icons/hi";

// import DataTable from "../components/ui/DataTable";
// import Button from "../components/ui/Button";
// import Badge from "../components/ui/Badge";
// import Modal from "../components/ui/Modal";

// import toast from "react-hot-toast";

// import { getAllUsers } from "../services/userService";

// export default function Users() {

//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [viewingUser, setViewingUser] = useState(null);

//   /* ───────── FETCH USERS ───────── */
//   const fetchUsers = async () => {
//     try {
//       setLoading(true);

//       const response = await getAllUsers();

//       console.log("USERS RESPONSE:", response);

//       setUsers(response?.data || []);

//     } catch (error) {

//       console.log("FETCH USERS ERROR:", error);

//       toast.error(
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to fetch users"
//       );

//       setUsers([]);

//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ───────── LOAD USERS ───────── */
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   /* ───────── TABLE COLUMNS ───────── */
//   const columns = [
//     {
//       key: "full_name",
//       label: "Name",

//       render: (value) => (
//         <div className="flex items-center gap-3">

//           <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
//             <span className="text-white font-bold text-sm">
//               {value?.charAt(0)?.toUpperCase() || "U"}
//             </span>
//           </div>

//           <span className="font-medium">
//             {value || "N/A"}
//           </span>

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

//       render: (value) => value || "-",
//     },

//     {
//       key: "role",
//       label: "Role",

//       render: (value) => (
//         <Badge variant="purple">
//           {value || "USER"}
//         </Badge>
//       ),
//     },

//     {
//       key: "is_active",
//       label: "Status",

//       render: (value) => (
//         <Badge variant={value ? "active" : "blocked"}>
//           {value ? "Active" : "Blocked"}
//         </Badge>
//       ),
//     },
//   ];

//   return (
//     <div className="space-y-6 animate-slide-up">

//       {/* HEADER */}
//       <div>
//         <h1 className="text-3xl font-bold gradient-text">
//           Users
//         </h1>

//         <p className="text-gray-400 mt-1">
//           Manage all registered users
//         </p>
//       </div>

//       {/* TABLE */}
//       <DataTable
//         columns={columns}
//         data={users}
//         loading={loading}
//         filterable
//         actions={(row) => (
//           <div className="flex gap-2">

//             {/* VIEW */}
//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiEye}
//               onClick={() => setViewingUser(row)}
//             />

//             {/* MAIL */}
//             <Button
//               variant="ghost"
//               size="sm"
//               icon={HiMail}
//               onClick={() =>
//                 toast.success(
//                   `Mail sent to ${row.email}`
//                 )
//               }
//             />

//           </div>
//         )}
//       />

//       {/* MODAL */}
//       <Modal
//         isOpen={!!viewingUser}
//         onClose={() => setViewingUser(null)}
//         title="User Details"
//       >
//         {viewingUser && (
//           <div className="space-y-4">

//             <div className="glass-effect rounded-xl p-4">
//               <p className="text-sm text-gray-400">
//                 Name
//               </p>

//               <p className="font-medium">
//                 {viewingUser.full_name || "N/A"}
//               </p>
//             </div>

//             <div className="glass-effect rounded-xl p-4">
//               <p className="text-sm text-gray-400">
//                 Email
//               </p>

//               <p className="font-medium">
//                 {viewingUser.email}
//               </p>
//             </div>

//             <div className="glass-effect rounded-xl p-4">
//               <p className="text-sm text-gray-400">
//                 Phone
//               </p>

//               <p className="font-medium">
//                 {viewingUser.phone_number || "-"}
//               </p>
//             </div>

//             <div className="glass-effect rounded-xl p-4">
//               <p className="text-sm text-gray-400">
//                 Role
//               </p>

//               <Badge variant="purple">
//                 {viewingUser.role}
//               </Badge>
//             </div>

//             <div className="glass-effect rounded-xl p-4">
//               <p className="text-sm text-gray-400">
//                 Status
//               </p>

//               <Badge
//                 variant={
//                   viewingUser.is_active
//                     ? "active"
//                     : "blocked"
//                 }
//               >
//                 {viewingUser.is_active
//                   ? "Active"
//                   : "Blocked"}
//               </Badge>
//             </div>

//           </div>
//         )}
//       </Modal>

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

import { getAllUsers } from "../services/userService";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [viewingUser, setViewingUser] = useState(null);

  /* FETCH USERS */
  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await getAllUsers();

      setUsers(response?.data || []);
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to fetch users"
      );

      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  /* TABLE COLUMNS */
  const columns = [
    {
      key: "full_name",
      label: "Name",
      render: (value) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {value?.charAt(0)?.toUpperCase() || "U"}
            </span>
          </div>

          <span className="font-medium">{value || "N/A"}</span>
        </div>
      ),
    },

    {
      key: "email",
      label: "Email",
    },

    {
      key: "phone_number",
      label: "Phone",
      render: (value) => value || "-",
    },

    {
      key: "role",
      label: "Role",
      render: (value) => <Badge variant="purple">{value || "USER"}</Badge>,
    },

    {
      key: "is_active",
      label: "Status",
      render: (value) => (
        <Badge variant={value ? "active" : "blocked"}>
          {value ? "Active" : "Blocked"}
        </Badge>
      ),
    },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold gradient-text">Users</h1>
        <p className="text-gray-400 mt-1">
          Manage all registered users
        </p>
      </div>

      {/* TABLE (ONLY PROFILE ACTION) */}
      <DataTable
        columns={columns}
        data={users}
        loading={loading}
        filterable
        actions={(row) => (
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              icon={HiEye}
              onClick={() => setViewingUser(row)}
            />
          </div>
        )}
      />

      {/* MODAL */}
      <Modal
        isOpen={!!viewingUser}
        onClose={() => setViewingUser(null)}
        title="User Details"
      >
        {viewingUser && (
          <div className="space-y-4">
            <div className="glass-effect rounded-xl p-4">
              <p className="text-sm text-gray-400">Name</p>
              <p className="font-medium">
                {viewingUser.full_name || "N/A"}
              </p>
            </div>

            <div className="glass-effect rounded-xl p-4">
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">{viewingUser.email}</p>
            </div>

            <div className="glass-effect rounded-xl p-4">
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium">
                {viewingUser.phone_number || "-"}
              </p>
            </div>

            <div className="glass-effect rounded-xl p-4">
              <p className="text-sm text-gray-400">Role</p>
              <Badge variant="purple">{viewingUser.role}</Badge>
            </div>

            <div className="glass-effect rounded-xl p-4">
              <p className="text-sm text-gray-400">Status</p>
              <Badge variant={viewingUser.is_active ? "active" : "blocked"}>
                {viewingUser.is_active ? "Active" : "Blocked"}
              </Badge>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}