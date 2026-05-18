import { useSelector, useDispatch } from "react-redux";
import { HiEye, HiBan, HiCheck, HiTrash, HiMail } from "react-icons/hi";
import DataTable from "../components/ui/DataTable";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Modal from "../components/ui/Modal";
import {
  blockStudent,
  unblockStudent,
  deleteStudent,
} from "../redux/slices/studentsSlice";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Students() {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.students);
  const [viewingStudent, setViewingStudent] = useState(null);

  const columns = [
    {
      key: "name",
      label: "Name",
      render: (value, row) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              {value
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <span className="font-medium">{value}</span>
        </div>
      ),
    },
    { key: "email", label: "Email" },
    {
      key: "joinedDate",
      label: "Joined",
      render: (value) => <span className="text-gray-400">{value}</span>,
    },
    {
      key: "totalBookings",
      label: "Bookings",
      render: (value) => <Badge variant="purple">{value}</Badge>,
    },
    {
      key: "totalSpent",
      label: "Total Spent",
      render: (value) => (
        <span className="font-semibold text-green-400">
          ${value.toLocaleString()}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (value) => <Badge variant={value}>{value}</Badge>,
    },
  ];

  const handleBlock = (id) => {
    dispatch(blockStudent(id));
    toast.success("Student blocked!");
  };

  const handleUnblock = (id) => {
    dispatch(unblockStudent(id));
    toast.success("Student unblocked!");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch(deleteStudent(id));
      toast.success("Student deleted successfully!");
    }
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold gradient-text">Students</h1>
        <p className="text-gray-400 mt-1">
          Manage registered users and customers
        </p>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={students}
        filterable
        filterOptions={[
          { key: "status", value: "active", label: "Active" },
          { key: "status", value: "blocked", label: "Blocked" },
        ]}
        actions={(row) => (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              icon={HiEye}
              onClick={() => setViewingStudent(row)}
            />
            <Button
              variant="ghost"
              size="sm"
              icon={HiMail}
              onClick={() => toast.success(`Message sent to ${row.name}`)}
            />
            {row.status === "active" ? (
              <Button
                variant="danger"
                size="sm"
                icon={HiBan}
                onClick={() => handleBlock(row.id)}
              >
                Block
              </Button>
            ) : (
              <Button
                variant="success"
                size="sm"
                icon={HiCheck}
                onClick={() => handleUnblock(row.id)}
              >
                Unblock
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              icon={HiTrash}
              onClick={() => handleDelete(row.id)}
              className="text-red-400 hover:text-red-300"
            />
          </div>
        )}
      />

      {/* View Student Modal */}
      <Modal
        isOpen={!!viewingStudent}
        onClose={() => setViewingStudent(null)}
        title="Student Details"
      >
        {viewingStudent && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  {viewingStudent.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{viewingStudent.name}</h3>
                <Badge variant={viewingStudent.status} className="mt-2">
                  {viewingStudent.status}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">{viewingStudent.email}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">{viewingStudent.phone}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Joined Date</p>
                <p className="font-medium">{viewingStudent.joinedDate}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Last Active</p>
                <p className="font-medium">{viewingStudent.lastActive}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Total Bookings</p>
                <p className="font-bold text-lg">
                  {viewingStudent.totalBookings}
                </p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Total Spent</p>
                <p className="font-bold text-lg text-green-400">
                  ${viewingStudent.totalSpent.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
