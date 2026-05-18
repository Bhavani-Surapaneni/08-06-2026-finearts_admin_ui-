import { useSelector } from "react-redux";
import { HiEye, HiCheck } from "react-icons/hi";
import { HiArrowPath, HiXMark } from "react-icons/hi2";
import DataTable from "../components/ui/DataTable";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Modal from "../components/ui/Modal";
import { updateBookingStatus } from "../redux/slices/bookingsSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Bookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookings);
  const [viewingBooking, setViewingBooking] = useState(null);

  const columns = [
    {
      key: "studentName",
      label: "Student",
      render: (value) => <span className="font-medium">{value}</span>,
    },
    { key: "className", label: "Class" },
    { key: "trainerName", label: "Trainer" },
    {
      key: "date",
      label: "Date & Time",
      render: (value, row) => `${value} • ${row.time}`,
    },
    {
      key: "payment",
      label: "Payment",
      render: (value, row) => (
        <div>
          <span className="font-semibold text-green-400">${value}</span>
          <Badge variant={row.type} className="ml-2">
            {row.type}
          </Badge>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (value) => <Badge variant={value}>{value}</Badge>,
    },
  ];

  const handleStatusChange = (id, newStatus) => {
    dispatch(updateBookingStatus({ id, status: newStatus }));
    toast.success(`Booking ${newStatus}!`);
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold gradient-text">Bookings</h1>
        <p className="text-gray-400 mt-1">Manage all trial and paid bookings</p>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={bookings}
        filterable
        filterOptions={[
          { key: "status", value: "pending", label: "Pending" },
          { key: "status", value: "confirmed", label: "Confirmed" },
          { key: "status", value: "completed", label: "Completed" },
          { key: "status", value: "cancelled", label: "Cancelled" },
          { key: "status", value: "refunded", label: "Refunded" },
        ]}
        actions={(row) => (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              icon={HiEye}
              onClick={() => setViewingBooking(row)}
            />
            {row.status === "pending" && (
              <>
                <Button
                  variant="success"
                  size="sm"
                  icon={HiCheck}
                  onClick={() => handleStatusChange(row.id, "confirmed")}
                >
                  Confirm
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  icon={HiXMark}
                  onClick={() => handleStatusChange(row.id, "cancelled")}
                >
                  Cancel
                </Button>
              </>
            )}
            {row.status === "confirmed" && (
              <>
                <Button
                  variant="success"
                  size="sm"
                  icon={HiCheck}
                  onClick={() => handleStatusChange(row.id, "completed")}
                >
                  Complete
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  icon={HiArrowPath}
                  onClick={() => handleStatusChange(row.id, "refunded")}
                >
                  Refund
                </Button>
              </>
            )}
          </div>
        )}
      />

      {/* View Booking Modal */}
      <Modal
        isOpen={!!viewingBooking}
        onClose={() => setViewingBooking(null)}
        title="Booking Details"
      >
        {viewingBooking && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Student</p>
                <p className="font-medium">{viewingBooking.studentName}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Class</p>
                <p className="font-medium">{viewingBooking.className}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Trainer</p>
                <p className="font-medium">{viewingBooking.trainerName}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Date & Time</p>
                <p className="font-medium">
                  {viewingBooking.date} at {viewingBooking.time}
                </p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Payment Amount</p>
                <p className="font-bold text-green-400">
                  ${viewingBooking.payment}
                </p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Type</p>
                <Badge variant={viewingBooking.type}>
                  {viewingBooking.type}
                </Badge>
              </div>
            </div>
            <div className="glass-effect rounded-xl p-4">
              <p className="text-sm text-gray-400">Status</p>
              <Badge variant={viewingBooking.status} className="mt-1">
                {viewingBooking.status}
              </Badge>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
