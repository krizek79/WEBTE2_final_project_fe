import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Navbar from './component/base/Navbar.jsx';
import Authentication from "./component/authentication/Authentication.jsx";
import Home from "./component/base/Home.jsx";
import Task from "./component/task/Task.jsx";
import TeacherTable from "./component/base/TeacherTable.jsx";

export default function App() {

  return (
    <>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route index element={<Authentication/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/task" element={<Task/>}/>
                <Route path="/table" element={<TeacherTable/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}