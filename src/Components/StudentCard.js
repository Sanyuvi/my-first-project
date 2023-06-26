import { useNavigate } from "react-router-dom";

export default function StudentCard({
  student,
  studentData,
  setData,
  crumState,
  setCrumState,
}) {
  const navigate = useNavigate();

  const removeStudent = (id) => {
    let response = window.confirm("Are you sure?");
    if (response) {
      const newStudentData = studentData.filter((stud, idx) => stud.id !== id);
      setData(newStudentData);
    }
  };

  const handleEdit = (id) => {
    const newCrum = {
      name: "edit",
      path: `/edit/${id}`,
    };
    setCrumState([...crumState, newCrum]);
    navigate(`/edit/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-x1 m-2">
      <div className="card-body">
        <h2 className="card-title">{student.name}</h2>
        <p>Batch: {student.batch}</p>
        <p>Email: {student.email}</p>
        <p>Phone: {student.phone}</p>
        <p>EDU: {student.qualification}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-danger"
            onClick={() => removeStudent(student.id)}
          >
            Delete
          </button>

          <button
            className="btn btn-primary"
            onClick={() => handleEdit(student.id)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
