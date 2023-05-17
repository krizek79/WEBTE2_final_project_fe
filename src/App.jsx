import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Navbar from './component/base/Navbar.jsx';
import Authentication from "./component/authentication/Authentication.jsx";
import Home from "./component/base/Home.jsx";
import Task from "./component/task/Task.jsx";
import StudentTasksList from "./component/task/StudentTasksList.jsx";
import StudentTaskGenerator from "./component/task/StudentTaskGenerator.jsx";

import TeacherTable from "./component/base/TeacherTable.jsx";
import StudentDetailsTable from "./component/base/StudentDetailsTable.jsx";
import TeacherHome from "./component/base/TeacherHome.jsx";
import Footer from "./component/base/Footer.jsx";
import BodyLayout from "./component/base/BodyLayout.jsx";
import Manual from "./component/base/Manual.jsx";

export default function App() {

  return (
    <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route index element={<Authentication/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/task" element={<Task/>}/>
                <Route path="/test" element={<BodyLayout/>}/>
                <Route path="/manual" element={<Manual/>}/>
                <Route path="/table" element={<TeacherTable/>}/>
                <Route path="/tHome" element={<TeacherHome/>}/>
                <Route path="/tableStudent" element={<StudentDetailsTable/>}/>
                <Route path="/list" element={<StudentTasksList/>}/>
                <Route path="/gen" element={<StudentTaskGenerator/>}/>
                <Route path="/footer" element={<Footer/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  )
}