import { useEffect } from "react";
import Base from "../BasePage/Base";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import CrumBar from "./CrumBar";

export default function EditStudent({
  studentData,
  setData,
  crumState,
  setCrumState,
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [idx, setIdx] = useState("");
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");

  useEffect(() => {
    console.log(studentData);
    console.log("id : ", id);
    const selectedStudent = studentData.find((stud, index) => stud.id === +id);
    console.log(selectedStudent);
    setName(selectedStudent.name);
    setBatch(selectedStudent.batch);
    setQualification(selectedStudent.qualification);
    setPhone(selectedStudent.phone);
    setEmail(selectedStudent.email);
  }, [id, studentData]);

  function editStudent() {
    const editStudentDataObject = {
      id: idx,
      name,
      batch,
      email,
      phone,
      qualification,
    };
    const editIndex = studentData.findIndex((stud, index) => stud.id === +id);
    console.log(editIndex);
    studentData[editIndex] = editStudentDataObject;
    setData([...studentData]);
    navigate("/student/all");
  }

  return (
    <Base>
      <CrumBar crumState={crumState} setCrumState={setCrumState} />
      <div className="p-5">Please Fill the form to add new Student</div>
      <div className="form-control">
        <label className="input-group input-group-md m-2">
          <span>Id</span>
          <input
            type="text"
            placeholder="Enter Student Name"
            className="input input-bordered input-md w-96"
            value={idx}
            onChange={(e) => setIdx(e.target.value)}
          />
        </label>
        <label className="input-group input-group-md m-2">
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter Student Name"
            className="input input-bordered input-md w-96"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input-group input-group-md  m-2">
          <span>Batch</span>
          <input
            type="text"
            placeholder="Enter Student Batch"
            className="input input-bordered input-md w-96"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </label>
        <label className="input-group input-group-md  m-2">
          <span>Email</span>
          <input
            type="text"
            placeholder="Enter Student Email"
            className="input input-bordered input-md w-96"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input-group input-group-md m-2">
          <span>Phone</span>
          <input
            type="text"
            placeholder="Enter Student Phone"
            className="input input-bordered input-md w-96"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label className="input-group input-group-md  m-2">
          <span>Education</span>
          <input
            type="text"
            placeholder="Enter Student Education"
            className="input input-bordered input-md w-96"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </label>

        <button
          className="rounded-full bg-base-200 p-2 m-5"
          onClick={editStudent}
        >
          Edit Student
        </button>
      </div>
    </Base>
  );
}
