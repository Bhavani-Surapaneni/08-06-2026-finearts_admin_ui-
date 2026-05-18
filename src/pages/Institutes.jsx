import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  HiPlus,
  HiPencil,
  HiTrash,
  HiStar,
  HiCheckCircle,
  HiLocationMarker,
} from "react-icons/hi";
import DataTable from "../components/ui/DataTable";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import FormInput from "../components/ui/FormInput";
import {
  verifyInstitute,
  updateInstitute,
  deleteInstitute,
  toggleFeatured,
} from "../redux/slices/institutesSlice";

export default function Institutes() {
  const dispatch = useDispatch();
  const { institutes } = useSelector((state) => state.institutes);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingInstitute, setEditingInstitute] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    address: "",
    owner: "",
    phone: "",
    email: "",
    established: "",
    description: "",
  });

  const columns = [
    {
      key: "name",
      label: "Institute Name",
      render: (value, row) => (
        <div className="flex items-center gap-3">
          {row.featured && <HiStar className="w-4 h-4 text-yellow-400" />}
          <div>
            <p className="font-medium">{value}</p>
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <HiLocationMarker className="w-3 h-3" />
              {row.city}
            </p>
          </div>
        </div>
      ),
    },
    { key: "city", label: "City" },
    {
      key: "courses",
      label: "Courses",
      render: (value) => <Badge variant="purple">{value} Courses</Badge>,
    },
    {
      key: "rating",
      label: "Rating",
      render: (value) => (
        <div className="flex items-center gap-1">
          <HiStar className="w-4 h-4 star-rating" />
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

    if (editingInstitute) {
      dispatch(updateInstitute({ ...editingInstitute, ...formData }));
      toast.success("Institute updated successfully!");
    } else {
      dispatch(
        updateInstitute({
          id: Date.now(),
          ...formData,
          courses: 0,
          rating: 0,
          status: "pending",
          featured: false,
        }),
      );
      toast.success("Institute added successfully!");
    }

    closeModal();
  };

  const handleEdit = (institute) => {
    setEditingInstitute(institute);
    setFormData({
      name: institute.name,
      city: institute.city,
      address: institute.address,
      owner: institute.owner,
      phone: institute.phone,
      email: institute.email,
      established: institute.established,
      description: institute.description,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this institute?")) {
      dispatch(deleteInstitute(id));
      toast.success("Institute deleted successfully!");
    }
  };

  const handleVerify = (id) => {
    dispatch(verifyInstitute(id));
    toast.success("Institute verified!");
  };

  const handleToggleFeatured = (id) => {
    dispatch(toggleFeatured(id));
    toast.success("Featured status toggled!");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingInstitute(null);
    setFormData({
      name: "",
      city: "",
      address: "",
      owner: "",
      phone: "",
      email: "",
      established: "",
      description: "",
    });
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Institutes</h1>
          <p className="text-gray-400 mt-1">
            Manage studios, academies, and centers
          </p>
        </div>
        <Button icon={HiPlus} onClick={() => setIsModalOpen(true)}>
          Add Institute
        </Button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={institutes}
        filterable
        filterOptions={[
          { key: "status", value: "verified", label: "Verified" },
          { key: "status", value: "pending", label: "Pending" },
          { key: "status", value: "unverified", label: "Unverified" },
        ]}
        actions={(row) => (
          <>
            {row.status !== "verified" && (
              <Button
                variant="success"
                size="sm"
                icon={HiCheckCircle}
                onClick={() => handleVerify(row.id)}
              >
                Verify
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              icon={HiStar}
              onClick={() => handleToggleFeatured(row.id)}
              className={row.featured ? "text-yellow-400" : ""}
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
              icon={HiTrash}
              onClick={() => handleDelete(row.id)}
              className="text-red-400 hover:text-red-300"
            />
          </>
        )}
      />

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingInstitute ? "Edit Institute" : "Add New Institute"}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Institute Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Rhythm Dance Studio"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="City"
              name="city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              placeholder="e.g., New York"
              required
            />
            <FormInput
              label="Established Year"
              name="established"
              value={formData.established}
              onChange={(e) =>
                setFormData({ ...formData, established: e.target.value })
              }
              placeholder="e.g., 2018"
            />
          </div>

          <FormInput
            label="Address"
            name="address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            placeholder="Full address"
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Owner Name"
              name="owner"
              value={formData.owner}
              onChange={(e) =>
                setFormData({ ...formData, owner: e.target.value })
              }
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

          <FormInput
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <FormInput
            label="Description"
            name="description"
            type="textarea"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Brief description about the institute..."
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="secondary" type="button" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit">
              {editingInstitute ? "Update Institute" : "Add Institute"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
