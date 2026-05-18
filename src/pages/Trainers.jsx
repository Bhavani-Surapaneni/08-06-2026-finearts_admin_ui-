import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  HiCheck,
  HiX,
  HiBan,
  HiPencil,
  HiEye,
  HiStar,
  HiUsers,
} from "react-icons/hi";
import DataTable from "../components/ui/DataTable";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import FormInput from "../components/ui/FormInput";
import {
  approveTrainer,
  rejectTrainer,
  suspendTrainer,
  updateTrainer,
  deleteTrainer,
} from "../redux/slices/trainersSlice";

export default function Trainers() {
  const dispatch = useDispatch();
  const { trainers } = useSelector((state) => state.trainers);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewingTrainer, setViewingTrainer] = useState(null);
  const [editingTrainer, setEditingTrainer] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skill: "",
    specialty: "",
    experience: "",
    bio: "",
  });

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
          <div>
            <p className="font-medium">{value}</p>
            {row.verified && (
              <span className="text-xs text-green-400">✓ Verified</span>
            )}
          </div>
        </div>
      ),
    },
    { key: "skill", label: "Skill" },
    {
      key: "rating",
      label: "Rating",
      render: (value) => (
        <div className="flex items-center gap-1">
          <HiStar className="w-4 h-4 star-rating" />
          <span className="font-medium">{value}</span>
        </div>
      ),
    },
    {
      key: "students",
      label: "Students",
      render: (value) => (
        <div className="flex items-center gap-1">
          <HiUsers className="w-4 h-4 text-gray-400" />
          <span>{value}</span>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (value) => <Badge variant={value}>{value}</Badge>,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTrainer) {
      dispatch(updateTrainer({ ...editingTrainer, ...formData }));
      toast.success("Trainer updated successfully!");
    }

    closeModal();
  };

  const handleApprove = (id) => {
    dispatch(approveTrainer(id));
    toast.success("Trainer approved!");
  };

  const handleReject = (id) => {
    if (window.confirm("Are you sure you want to reject this trainer?")) {
      dispatch(rejectTrainer(id));
      toast.success("Trainer rejected!");
    }
  };

  const handleSuspend = (id) => {
    dispatch(suspendTrainer(id));
    toast.success("Trainer suspended!");
  };

  const handleView = (trainer) => {
    setViewingTrainer(trainer);
  };

  const handleEdit = (trainer) => {
    setEditingTrainer(trainer);
    setFormData({
      name: trainer.name,
      email: trainer.email,
      phone: trainer.phone,
      skill: trainer.skill,
      specialty: trainer.specialty,
      experience: trainer.experience,
      bio: trainer.bio,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this trainer?")) {
      dispatch(deleteTrainer(id));
      toast.success("Trainer deleted successfully!");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTrainer(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      skill: "",
      specialty: "",
      experience: "",
      bio: "",
    });
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Trainers</h1>
          <p className="text-gray-400 mt-1">
            Manage instructors and their profiles
          </p>
        </div>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={trainers}
        filterable
        filterOptions={[
          { key: "status", value: "approved", label: "Approved" },
          { key: "status", value: "pending", label: "Pending" },
          { key: "status", value: "suspended", label: "Suspended" },
        ]}
        actions={(row) => (
          <div className="flex items-center gap-1">
            {row.status === "pending" && (
              <>
                <Button
                  variant="success"
                  size="sm"
                  icon={HiCheck}
                  onClick={() => handleApprove(row.id)}
                >
                  Approve
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  icon={HiX}
                  onClick={() => handleReject(row.id)}
                >
                  Reject
                </Button>
              </>
            )}
            {row.status === "approved" && (
              <Button
                variant="danger"
                size="sm"
                icon={HiBan}
                onClick={() => handleSuspend(row.id)}
              >
                Suspend
              </Button>
            )}
            {row.status === "suspended" && (
              <Button
                variant="success"
                size="sm"
                icon={HiCheck}
                onClick={() => handleApprove(row.id)}
              >
                Reinstate
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              icon={HiEye}
              onClick={() => handleView(row)}
            />
            <Button
              variant="ghost"
              size="sm"
              icon={HiPencil}
              onClick={() => handleEdit(row)}
            />
            <Button
              variant="ghost"
              size="sm"
              icon={HiX}
              onClick={() => handleDelete(row.id)}
              className="text-red-400 hover:text-red-300"
            />
          </div>
        )}
      />

      {/* View Trainer Modal */}
      <Modal
        isOpen={!!viewingTrainer}
        onClose={() => setViewingTrainer(null)}
        title="Trainer Details"
        size="lg"
      >
        {viewingTrainer && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-white/10">
              <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  {viewingTrainer.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{viewingTrainer.name}</h3>
                <p className="text-gray-400">
                  {viewingTrainer.skill} • {viewingTrainer.specialty}
                </p>
                <Badge variant={viewingTrainer.status} className="mt-2">
                  {viewingTrainer.status}
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">{viewingTrainer.email}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">{viewingTrainer.phone}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Experience</p>
                <p className="font-medium">{viewingTrainer.experience}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Rating</p>
                <div className="flex items-center gap-1">
                  <HiStar className="w-5 h-5 star-rating" />
                  <span className="font-bold text-lg">
                    {viewingTrainer.rating}
                  </span>
                </div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Total Students</p>
                <p className="font-bold text-lg">{viewingTrainer.students}</p>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <p className="text-sm text-gray-400">Joined Date</p>
                <p className="font-medium">{viewingTrainer.joinDate}</p>
              </div>
            </div>

            <div className="glass-effect rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-2">Bio</p>
              <p className="text-sm leading-relaxed">{viewingTrainer.bio}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Edit Trainer Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Edit Trainer">
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <FormInput
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Skill"
              name="skill"
              value={formData.skill}
              onChange={(e) =>
                setFormData({ ...formData, skill: e.target.value })
              }
              required
            />
            <FormInput
              label="Specialty"
              name="specialty"
              value={formData.specialty}
              onChange={(e) =>
                setFormData({ ...formData, specialty: e.target.value })
              }
            />
          </div>

          <FormInput
            label="Experience"
            name="experience"
            value={formData.experience}
            onChange={(e) =>
              setFormData({ ...formData, experience: e.target.value })
            }
            placeholder="e.g., 8 years"
          />

          <FormInput
            label="Bio"
            name="bio"
            type="textarea"
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            placeholder="Tell us about yourself..."
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="secondary" type="button" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit">Update Trainer</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
