import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Login from "./component/Login.jsx";
import Example from "./component/example/example.jsx";
import Navbar from './component/navbar/Navbar.jsx';

export default function App() {

  return (
    <>
        <BrowserRouter>
        <Navbar/>
            
            <Routes>
                <Route index element={<Example/>}/>
            </Routes>
            <Routes>
                <Route index element={<Example/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}
