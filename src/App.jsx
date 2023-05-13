import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./component/Login.jsx";

export default function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}