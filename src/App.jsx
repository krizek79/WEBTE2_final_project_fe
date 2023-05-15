import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Navbar from './component/base/Navbar.jsx';
import Authentication from "./component/authentication/Authentication.jsx";
import Home from "./component/base/Home.jsx";
import TeacherHome from "./component/base/TeacherHome.jsx";
import StudentHome from "./component/base/StudentHome.jsx";
import ExampleList from "./component/base/ExampleList.jsx";

export default function App() {

  return (
    <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route index element={<Authentication/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/teacherHome" element={<TeacherHome/>}/>
                <Route path="/studentHome" element={<StudentHome/>}/>
                <Route path="/exampleList" element={<ExampleList/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}