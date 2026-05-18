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
  addCategory,
  updateCategory,
  deleteCategory,
} from "../redux/slices/categoriesSlice";

export default function Categories() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log("Categories:", categories);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    slug: "",
    status: "active",
  });

  const columns = [
    { key: "id", label: "ID", sortable: false },
    {
      key: "name",
      label: "Category Name",
      render: (value) => <span className="font-medium">{value}</span>,
    },
    { key: "slug", label: "Slug" },
    {
      key: "subcategoriesCount",
      label: "Subcategories",
      render: (value) => <Badge variant="purple">{value}</Badge>,
    },
    {
      key: "status",
      label: "Status",
      render: (value) => <Badge variant={value}>{value}</Badge>,
    },
    { key: "order", label: "Order" },
    { key: "createdAt", label: "Created At" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingCategory) {
      dispatch(updateCategory({ ...editingCategory, ...formData }));
      toast.success("Category updated successfully!");
    } else {
      dispatch(
        addCategory({
          id: Date.now(),
          ...formData,
          subcategoriesCount: 0,
          order: categories.length + 1,
          createdAt: new Date().toISOString().split("T")[0],
        }),
      );
      toast.success("Category added successfully!");
    }

    closeModal();
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      icon: category.icon,
      slug: category.slug,
      status: category.status,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      dispatch(deleteCategory(id));
      toast.success("Category deleted successfully!");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({ name: "", icon: "", slug: "", status: "active" });
  };

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Categories</h1>
          <p className="text-gray-400 mt-1">
            Manage your main course categories
          </p>
        </div>
        <Button icon={HiPlus} onClick={() => setIsModalOpen(true)}>
          Add Category
        </Button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={categories}
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
        title={editingCategory ? "Edit Category" : "Add New Category"}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormInput
            label="Category Name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g., Dance, Music, Karate"
            required
          />

          <FormInput
            label="Icon Name"
            name="icon"
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            placeholder="e.g., music-note, guitar"
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
            placeholder="e.g., dance, music"
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
              {editingCategory ? "Update Category" : "Add Category"}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
