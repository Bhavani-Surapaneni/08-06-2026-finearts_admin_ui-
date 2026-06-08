import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
HiPencil,
HiTrash,
HiPlus,
} from "react-icons/hi";

import DataTable from "../components/ui/DataTable";
import Modal from "../components/ui/Modal";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import FormInput from "../components/ui/FormInput";

import {
getInstituteTrainers,
createInstituteTrainer,
updateInstituteTrainer,
deleteInstituteTrainer,
} from "../services/instituteService";

export default function InstituteTrainers() {
const [trainers, setTrainers] =
useState([]);

const [isModalOpen, setIsModalOpen] =
useState(false);

const [editingTrainer, setEditingTrainer] =
useState(null);

const [deleteModalOpen, setDeleteModalOpen] =
useState(false);

const [trainerToDelete, setTrainerToDelete] =
useState(null);

const [formData, setFormData] =
useState({
full_name: "",
email: "",
phone_number: "",
bio: "",
experience_years: "",
specialty: "",
languages: "",
skills: "",
certifications: "",
schedule: "",
upi_id: "",
total_students: "",
max_students: "",
profile_image: null,
certificate: null,
qr_image: null,
});

const token =
localStorage.getItem("token");

const fetchTrainers = async () => {
try {
const res =
await getInstituteTrainers(
token
);


  setTrainers(
    res.data || []
  );
} catch (e) {
  toast.error(
    e.response?.data?.message ||
      "Failed to load trainers"
  );
}


};

useEffect(() => {
fetchTrainers();
}, []);

const columns = [
{
key: "profile_image",
label: "IMAGE",
render: (value) => ( <img
       src={value}
       alt=""
       className="w-14 h-14 rounded-lg object-cover"
     />
),
},
{
key: "full_name",
label: "NAME",
},
{
key: "specialty",
label: "SPECIALTY",
},
{
key: "experience_years",
label: "EXPERIENCE",
},
{
key: "phone_number",
label: "PHONE",
},
{
key: "total_students",
label: "STUDENTS",
},
{
key: "approval_status",
label: "STATUS",
render: (value) => ( <Badge
       variant={value?.toLowerCase()}
     >
{value} </Badge>
),
},
];

const handleCreate = () => {
setEditingTrainer(null);

setFormData({
  full_name: "",
  email: "",
  phone_number: "",
  bio: "",
  experience_years: "",
  specialty: "",
  languages: "",
  skills: "",
  certifications: "",
  schedule: "",
  upi_id: "",
  total_students: "",
  max_students: "",
  profile_image: null,
  certificate: null,
  qr_image: null,
});

setIsModalOpen(true);


};

const handleEdit = (trainer) => {
setEditingTrainer(trainer);


setFormData({
  ...trainer,
  profile_image: null,
  certificate: null,
  qr_image: null,
});

setIsModalOpen(true);


};

const handleDeleteClick = (
id
) => {
setTrainerToDelete(id);
setDeleteModalOpen(true);
};

const confirmDelete =
async () => {
try {
await deleteInstituteTrainer(
trainerToDelete,
token
);


    toast.success(
      "Trainer deleted"
    );

    fetchTrainers();

    setDeleteModalOpen(false);
  } catch (e) {
    toast.error(
      e.response?.data
        ?.message ||
        "Delete failed"
    );
  }
};

const closeModal = () => {
setIsModalOpen(false);
setEditingTrainer(null);
};

const handleSubmit = async (e) => {
e.preventDefault();

```
try {
  const fd = new FormData();

  Object.entries(formData).forEach(
    ([k, v]) => {
      if (
        v !== null &&
        v !== undefined &&
        v !== ""
      ) {
        fd.append(k, v);
      }
    }
  );

  if (editingTrainer) {
    await updateInstituteTrainer(
      editingTrainer.id,
      fd,
      token
    );

    toast.success(
      "Trainer updated successfully"
    );
  } else {
    await createInstituteTrainer(
      fd,
      token
    );

    toast.success(
      "Trainer created successfully"
    );
  }

  closeModal();
  fetchTrainers();

} catch (e) {
  toast.error(
    e.response?.data?.message ||
      "Operation failed"
  );
}
```

};

return ( <div className="space-y-6 animate-slide-up">

```
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold gradient-text">
        Institute Trainers
      </h1>

      <p className="text-gray-400 mt-1">
        Manage institute trainers
      </p>
    </div>

    <Button
      icon={HiPlus}
      onClick={handleCreate}
    >
      Add Trainer
    </Button>
  </div>

  <DataTable
    columns={columns}
    data={trainers}
    filterable
    actions={(row) => (
      <div className="flex gap-2">

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
            handleDeleteClick(
              row.id
            )
          }
        />

      </div>
    )}
  />

  <Modal
    isOpen={isModalOpen}
    onClose={closeModal}
    title={
      editingTrainer
        ? "Edit Trainer"
        : "Add Trainer"
    }
  >
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >

      <FormInput
        label="Full Name"
        value={
          formData.full_name
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            full_name:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({
            ...formData,
            email:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Phone Number"
        value={
          formData.phone_number
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            phone_number:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Experience Years"
        type="number"
        value={
          formData.experience_years
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            experience_years:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Bio"
        type="textarea"
        value={formData.bio}
        onChange={(e) =>
          setFormData({
            ...formData,
            bio:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Specialty"
        value={
          formData.specialty
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            specialty:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Languages"
        value={
          formData.languages
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            languages:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Skills"
        type="textarea"
        value={formData.skills}
        onChange={(e) =>
          setFormData({
            ...formData,
            skills:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Certifications"
        type="textarea"
        value={
          formData.certifications
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            certifications:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Schedule"
        type="textarea"
        value={
          formData.schedule
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            schedule:
              e.target.value,
          })
        }
      />

      <FormInput
        label="UPI ID"
        value={formData.upi_id}
        onChange={(e) =>
          setFormData({
            ...formData,
            upi_id:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Total Students"
        type="number"
        value={
          formData.total_students
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            total_students:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Max Students"
        type="number"
        value={
          formData.max_students
        }
        onChange={(e) =>
          setFormData({
            ...formData,
            max_students:
              e.target.value,
          })
        }
      />

      <FormInput
        label="Profile Image"
        type="file"
        onChange={(e) =>
          setFormData({
            ...formData,
            profile_image:
              e.target.files?.[0],
          })
        }
      />

      <FormInput
        label="Certificate"
        type="file"
        onChange={(e) =>
          setFormData({
            ...formData,
            certificate:
              e.target.files?.[0],
          })
        }
      />

      <FormInput
        label="QR Image"
        type="file"
        onChange={(e) =>
          setFormData({
            ...formData,
            qr_image:
              e.target.files?.[0],
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
          {editingTrainer
            ? "Update Trainer"
            : "Create Trainer"}
        </Button>

      </div>
    </form>
  </Modal>

  <Modal
    isOpen={deleteModalOpen}
    onClose={() =>
      setDeleteModalOpen(false)
    }
    title="Delete Trainer"
  >
    <div className="space-y-4">
      <p className="text-gray-300">
        Are you sure you want to
        delete this trainer?
      </p>

      <div className="flex justify-end gap-3">
        <Button
          variant="secondary"
          onClick={() =>
            setDeleteModalOpen(
              false
            )
          }
        >
          Cancel
        </Button>

        <Button
          variant="danger"
          onClick={
            confirmDelete
          }
        >
          Delete
        </Button>
      </div>
    </div>
  </Modal>

</div>


);
}
