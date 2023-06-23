import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import TopBar from "./Components/TopBar";
import Base from "./BasePage/Base";
import SideBar from "./Components/SideBar";
import Dashboard from "./Pages/Dashboard";
import StudentList from "./Components/StudentList";
import { Routes, Route } from "react-router-dom";
import Profile from "./Pages/Profile";
import AddStudents from "./Components/AddStudents";
import InterviewNotes from "./Components/InterviewNotes";
import EditStudent from "./Components/EditStudent";
import EditStudents from "./Components/EditStudent";

function App() {
  const studentData = [
    {
      id: 1,
      name: "Kaushik",
      batch: "b47wd",
      email: "abc@gmail.com",
      phone: 9596770831,
      qualification: "B.E",
    },
    {
      id: 2,
      name: "Kathir",
      batch: "b47wd",
      email: "bcd@gmail.com",
      phone: 9596780831,
      qualification: "B.E",
    },
    {
      id: 3,
      name: "Karmegam",
      batch: "b47wd",
      email: "abc@gmail.com",
      phone: 9595770831,
      qualification: "B.E",
    },
  ];
  const [data, setData] = useState(studentData);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route
          path="/student/add"
          element={<AddStudents studentData={data} setData={setData} />}
        />

        <Route
          path="/student/all"
          element={<StudentList studentData={data} setData={setData} />}
        />

        <Route
          path="/edit/:id"
          element={<EditStudent studentData={data} setData={setData} />}
        />

        <Route path="/interview/notes" element={<InterviewNotes />} />
      </Routes>
    </div>
  );
}

export default App;
