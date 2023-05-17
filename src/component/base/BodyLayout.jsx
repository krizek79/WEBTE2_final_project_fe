import Task from "../task/Task.jsx";
import Manual from "./Manual.jsx";
import Statistics from "./Statistics.jsx";
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
            <Statistics/>
            <StudentDetailsTable/>
            <StudentTasksList/>
            <StudentTaskGenerator/>
        </div>
        </main>
    )
}