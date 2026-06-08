// InstituteClasses.jsx

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
HiPlus,
HiPencil,
HiTrash,
} from "react-icons/hi";

import API from "../services/api";

import DataTable from "../components/ui/DataTable";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import FormInput from "../components/ui/FormInput";

export default function InstituteClasses() {
const [classes, setClasses] = useState([]);

const [isModalOpen, setIsModalOpen] =
useState(false);

const [editingClass, setEditingClass] =
useState(null);

const [deleteId, setDeleteId] =
useState(null);

const [openDelete, setOpenDelete] =
useState(false);

const defaultForm = {
title: "",
description: "",
category_id: "",
subcategory_id: "",
trainer_id: "",
price: "",
duration: "",
level: "BEGINNER",
mode: "ONLINE",
};

const [formData, setFormData] =
useState(defaultForm);

const getConfig = () => ({
headers: {
Authorization: `Bearer ${localStorage.getItem(
        "token"
      )}`,
},
});

const fetchClasses = async () => {
try {
const res = await API.get(
"/classes",
getConfig()
);

  setClasses(
    Array.isArray(res.data)
      ? res.data
      : res?.data?.data || []
  );
} catch (err) {
  console.error(err);

  toast.error(
    "Failed to fetch classes"
  );
}

};

useEffect(() => {
fetchClasses();
}, []);

const handleDelete = (id) => {
setDeleteId(id);
setOpenDelete(true);
};

const confirmDelete = async () => {
try {
await API.delete(
`/classes/${deleteId}`,
getConfig()
);

  toast.success(
    "Class deleted successfully"
  );

  fetchClasses();
} catch (err) {
  toast.error(
    err?.response?.data?.message ||
      "Delete failed"
  );
} finally {
  setOpenDelete(false);
  setDeleteId(null);
}


};

const handleEdit = (cls) => {
setEditingClass(cls);

setFormData({
  title: cls.title || "",
  description:
    cls.description || "",
  category_id:
    cls.category_id || "",
  subcategory_id:
    cls.subcategory_id || "",
  trainer_id:
    cls.trainer_id || "",
  price: cls.price || "",
  duration:
    cls.duration || "",
  level:
    cls.level || "BEGINNER",
  mode:
    cls.mode || "ONLINE",
});

setIsModalOpen(true);


};

const handleSubmit = async (e) => {
e.preventDefault();

try {
  const payload = {
    title:
      formData.title?.trim(),

    description:
      formData.description?.trim(),

    category_id: Number(
      formData.category_id
    ),

    subcategory_id:
      formData.subcategory_id
        ? Number(
            formData.subcategory_id
          )
        : null,

    trainer_id:
      Number(
        formData.trainer_id
      ) || null,

    price: Number(
      formData.price || 0
    ),

    duration: Number(
      formData.duration || 60
    ),

    level:
      formData.level ||
      "BEGINNER",

    mode:
      formData.mode ||
      "ONLINE",
  };

  if (editingClass?.id) {
    await API.put(
      `/classes/${editingClass.id}`,
      payload,
      getConfig()
    );

    toast.success(
      "Class updated successfully"
    );
  } else {
    await API.post(
      "/classes/institute/create",
      payload,
      getConfig()
    );

    toast.success(
      "Class created successfully"
    );
  }

  fetchClasses();
  closeModal();
} catch (err) {
  console.error(err);

  toast.error(
    err?.response?.data?.message ||
      "Something went wrong"
  );
}


};

const closeModal = () => {
setIsModalOpen(false);
setEditingClass(null);
setFormData(defaultForm);
};

const columns = [
{
key: "title",
label: "Class Name",
},
{
key: "trainer_name",
label: "Trainer",
},
{
key: "category_name",
label: "Category",
},
{
key: "subcategory_name",
label: "Subcategory",
},
{
key: "level",
label: "Level",
render: (v) => ( <Badge variant="verified">
{v} </Badge>
),
},
{
key: "price",
label: "Price",
render: (v) => ( <span className="text-green-400 font-semibold">
₹{v ?? 0} </span>
),
},
];

return ( <div className="space-y-6 animate-slide-up"> <div className="flex items-center justify-between"> <div> <h1 className="text-3xl font-bold gradient-text">
Classes </h1>

      <p className="text-gray-400 mt-1">
        Manage institute classes
      </p>
    </div>

    <Button
      icon={HiPlus}
      onClick={() =>
        setIsModalOpen(true)
      }
    >
      Add Class
    </Button>
  </div>

  <DataTable
    columns={columns}
    data={classes}
    actions={(row) => (
      <>
        <Button
          variant="ghost"
          size="sm"
          icon={HiPencil}
          onClick={() =>
            handleEdit(row)
          }
        />

        <Button
          variant="ghost"
          size="sm"
          icon={HiTrash}
          className="text-red-400"
          onClick={() =>
            handleDelete(row.id)
          }
        />
      </>
    )}
  />

  <Modal
    isOpen={openDelete}
    onClose={() =>
      setOpenDelete(false)
    }
    title="Delete Class"
  >
    <p className="text-gray-300">
      Are you sure you want to
      delete this class?
    </p>

    <div className="flex justify-end gap-3 mt-6">
      <Button
        variant="secondary"
        onClick={() =>
          setOpenDelete(false)
        }
      >
        Cancel
      </Button>

      <Button
        variant="danger"
        onClick={confirmDelete}
      >
        Delete
      </Button>
    </div>
  </Modal>

  <Modal
    isOpen={isModalOpen}
    onClose={closeModal}
    title={
      editingClass
        ? "Edit Class"
        : "Add Class"
    }
  >
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <FormInput
        label="Class Name"
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Description"
        value={
          formData.description
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            description:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Category ID"
        value={
          formData.category_id
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            category_id:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Subcategory ID"
        value={
          formData.subcategory_id
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            subcategory_id:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Trainer ID"
        value={
          formData.trainer_id
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            trainer_id:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Price"
        value={formData.price}
        onChange={(e) =>
          setFormData({
            ...formData,
            price:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Duration"
        value={
          formData.duration
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            duration:
              e.target.value,
          })
        }
      />

      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button"
          variant="secondary"
          onClick={closeModal}
        >
          Cancel
        </Button>

        <Button type="submit">
          {editingClass
            ? "Update Class"
            : "Create Class"}
        </Button>
      </div>
    </form>
  </Modal>
</div>


);
}
