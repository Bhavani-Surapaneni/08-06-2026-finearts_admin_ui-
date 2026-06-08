import { useEffect, useState } from "react";
import { getStudents } from "../services/instituteService";

export default function Students() {
  const [students, setStudents] =
    useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  return (
    <table className="w-full">

      <thead>
        <tr>
          <th>Name</th>
          <th>Mobile</th>
          <th>Class</th>
        </tr>
      </thead>

      <tbody>

        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.mobile}</td>
            <td>{student.class_name}</td>
          </tr>
        ))}

      </tbody>

    </table>
  );
}