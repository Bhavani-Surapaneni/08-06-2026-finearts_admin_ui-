import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { HiPlus, HiPencil, HiTrash } from "react-icons/hi";
import DataTable from "../components/ui/DataTable";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import FormInput from "../components/ui/FormInput";
import {
  addSubcategory,
  updateSubcategory,
  deleteSubcategory,
} from "../redux/slices/categoriesSlice";

export default function Subcategories() {
  const dispatch = useDispatch();
  const { categories, subcategories } = useSelector(
    (state) => state.categories,
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSub, setEditingSub] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
    slug: "",
    status: "active",
  });

  const getCategoryName = (categoryId) => {
    const category = categories.find((c) => c.id === parseInt(categoryId));
    return category?.name || "Unknown";
  };

  const columns = [
    { key: "id", label: "ID", sortable: false },
    {
      key: "name",
      label: "Subcategory Name",
      render: (value) => <span className="font-medium">{value}</span>,
    },
    {
      key: "categoryId",
      label: "Parent Category",
      render: (value) => (
        <Badge variant="purple">{getCategoryName(value)}</Badge>
      ),
    },
    { key: "slug", label: "Slug" },
    {
      key: "status",
      label: "Status",
      render: (value) => <Badge variant={value}>{value}</Badge>,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingSub) {
      dispatch(updateSubcategory({ ...editingSub, ...formData }));
      toast.success("Subcategory updated successfully!");
    } else {
      dispatch(
        addSubcategory({
          id: Date.now(),
          ...formData,
        }),
      );
      toast.success("Subcategory added successfully!");
    }

    closeModal();
  };

  const handleEdit = (sub) => {
    setEditingSub(sub);
    setFormData({
      name: sub.name,
      categoryId: sub.categoryId.toString(),
      slug: sub.slug,
      status: sub.status,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this subcategory?")) {
      dispatch(deleteSubcategory(id));
      toast.success("Subcategory deleted successfully!");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingSub(null);
    setFormData({ name: "", categoryId: "", slug: "", status: "active" });
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Subcategories</h1>
          <p className="text-gray-400 mt-1">
            Manage child categories under main categories
          </p>
        </div>
        <Button icon={HiPlus} onClick={() => setIsModalOpen(true)}>
          Add Subcategory
        </Button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={subcategories}
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
        title={editingSub ? "Edit Subcategory" : "Add New Subcategory"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Subcategory Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Hip Hop, Guitar, Kids Karate"
            required
          />

          <FormInput
            label="Parent Category"
            name="categoryId"
            type="select"
            value={formData.categoryId}
            onChange={(e) =>
              setFormData({ ...formData, categoryId: e.target.value })
            }
            options={categories.map((cat) => ({
              value: cat.id.toString(),
              label: cat.name,
            }))}
            required
          />

          <FormInput
            label="Slug"
            name="slug"
            value={formData.slug}
            onChange={(e) =>
              setFormData({
                ...formData,
                slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
              })
            }
            placeholder="e.g., hip-hop, guitar"
            required
          />

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
              { value: "inactive", label: "Inactive" },
            ]}
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="secondary" type="button" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit">
              {editingSub ? "Update Subcategory" : "Add Subcategory"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
