import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authentication from "./component/authentication/Authentication.jsx";

export default function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Authentication/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}