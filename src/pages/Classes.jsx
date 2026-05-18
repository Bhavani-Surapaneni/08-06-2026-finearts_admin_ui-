import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  HiPlus,
  HiPencil,
  HiTrash,
  HiStar,
  HiPause,
  HiPlay,
} from "react-icons/hi";
import DataTable from "../components/ui/DataTable";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import FormInput from "../components/ui/FormInput";
import {
  addClass,
  updateClass,
  deleteClass,
  toggleFeatured,
  updateStatus,
} from "../redux/slices/classesSlice";

export default function Classes() {
  const dispatch = useDispatch();
  const { classes } = useSelector((state) => state.classes);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    subcategory: "",
    trainer: "",
    price: "",
    duration: "",
    maxStudents: "",
    status: "active",
  });

  const columns = [
    {
      key: "title",
      label: "Title",
      render: (value, row) => (
        <div className="flex items-center gap-3">
          {row.featured && <HiStar className="w-4 h-4 text-yellow-400" />}
          <span className="font-medium">{value}</span>
        </div>
      ),
    },
    { key: "category", label: "Category" },
    { key: "trainer", label: "Trainer" },
    {
      key: "price",
      label: "Price",
      render: (value) => (
        <span className="font-semibold text-green-400">${value}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (value) => <Badge variant={value}>{value}</Badge>,
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
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const classData = {
      ...formData,
      price: parseFloat(formData.price),
      maxStudents: parseInt(formData.maxStudents),
      currentStudents: 0,
      rating: 0,
      featured: false,
    };

    if (editingClass) {
      dispatch(updateClass({ ...editingClass, ...classData }));
      toast.success("Class updated successfully!");
    } else {
      dispatch(
        addClass({
          id: Date.now(),
          ...classData,
        }),
      );
      toast.success("Class added successfully!");
    }

    closeModal();
  };

  const handleEdit = (cls) => {
    setEditingClass(cls);
    setFormData({
      title: cls.title,
      category: cls.category,
      subcategory: cls.subcategory,
      trainer: cls.trainer,
      price: cls.price.toString(),
      duration: cls.duration,
      maxStudents: cls.maxStudents.toString(),
      status: cls.status,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this class?")) {
      dispatch(deleteClass(id));
      toast.success("Class deleted successfully!");
    }
  };

  const handleToggleFeatured = (id) => {
    dispatch(toggleFeatured(id));
    toast.success("Featured status toggled!");
  };

  const handleToggleStatus = (id, currentStatus) => {
    const newStatus = currentStatus === "active" ? "paused" : "active";
    dispatch(updateStatus({ id, status: newStatus }));
    toast.success(`Class ${newStatus}!`);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingClass(null);
    setFormData({
      title: "",
      category: "",
      subcategory: "",
      trainer: "",
      price: "",
      duration: "",
      maxStudents: "",
      status: "active",
    });
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Classes</h1>
          <p className="text-gray-400 mt-1">Manage all your course listings</p>
        </div>
        <Button icon={HiPlus} onClick={() => setIsModalOpen(true)}>
          Add Class
        </Button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={classes}
        filterable
        filterOptions={[
          { key: "status", value: "active", label: "Active" },
          { key: "status", value: "paused", label: "Paused" },
        ]}
        actions={(row) => (
          <>
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
              icon={row.status === "active" ? HiPause : HiPlay}
              onClick={() => handleToggleStatus(row.id, row.status)}
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
        title={editingClass ? "Edit Class" : "Add New Class"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Class Title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="e.g., Hip-Hop Beginner"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Category"
              name="category"
              type="select"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              options={[
                { value: "Dance", label: "Dance" },
                { value: "Music", label: "Music" },
                { value: "Karate", label: "Karate" },
                { value: "Yoga", label: "Yoga" },
                { value: "Arts", label: "Arts" },
                { value: "Fitness", label: "Fitness" },
              ]}
              required
            />

            <FormInput
              label="Trainer"
              name="trainer"
              type="select"
              value={formData.trainer}
              onChange={(e) =>
                setFormData({ ...formData, trainer: e.target.value })
              }
              options={[
                { value: "Alex Rivera", label: "Alex Rivera" },
                { value: "Maria Garcia", label: "Maria Garcia" },
                { value: "Kenji Tanaka", label: "Kenji Tanaka" },
                { value: "Priya Sharma", label: "Priya Sharma" },
                { value: "Lisa Chen", label: "Lisa Chen" },
              ]}
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <FormInput
              label="Price ($)"
              name="price"
              type="number"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              placeholder="89"
              required
            />

            <FormInput
              label="Duration"
              name="duration"
              value={formData.duration}
              onChange={(e) =>
                setFormData({ ...formData, duration: e.target.value })
              }
              placeholder="e.g., 8 weeks"
              required
            />

            <FormInput
              label="Max Students"
              name="maxStudents"
              type="number"
              value={formData.maxStudents}
              onChange={(e) =>
                setFormData({ ...formData, maxStudents: e.target.value })
              }
              placeholder="20"
              required
            />
          </div>

          <FormInput
            label="Status"
            name="status"
            type="select"
            value={formData.status}
            onChange={(e) =>
              setFormData({ ...formData, status: e.target.value })
            }
            options={[
              { value: "active", label: "Active" },
              { value: "paused", label: "Paused" },
            ]}
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="secondary" type="button" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit">
              {editingClass ? "Update Class" : "Add Class"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
