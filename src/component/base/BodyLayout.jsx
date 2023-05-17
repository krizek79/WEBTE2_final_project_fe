import Task from "../task/Task.jsx";
import Manual from "./Manual.jsx";
import TeacherTable from "./TeacherTable.jsx";
import StudentDetailsTable from "./StudentDetailsTable.jsx";
import StudentTasksList from "../task/StudentTasksList.jsx";
import StudentTaskGenerator from "../task/StudentTaskGenerator.jsx";
import Footer from "./Footer.jsx";
import React from "react";

export default function BodyLayout() {
    
    return (
        <main className="relative min-h-screen flex flex-col justify-between">
        <div className="flex-grow">
            <Task/>
            <Manual/>
            <TeacherTable/>
            <StudentDetailsTable/>
            <StudentTasksList/>
            <StudentTaskGenerator/>
        </div>
        </main>
    )
}