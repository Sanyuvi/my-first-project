import { useEffect, useState } from "react";
import Base from "../BasePage/Base";
import StudentCard from "../Components/StudentCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard({student}){
    const navigate = useNavigate()
    
    return (
        <Base>
        <h1>Welcome to Student App</h1>
        <button className="rounded-full bg-base-200 p-4 m-2"
        onClick={()=>navigate("/student/add")}>Add more students</button>
     
        </Base>
    )
}