import StudentHome from "./StudentHome.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import TeacherHome from "./TeacherHome.jsx";

export default function Home() {

    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            navigate("/")
        }
    }, [])

    return (
        <main className="w-full flex justify-center p-12">
            {localStorage.getItem("role") === "student" && (
                <StudentHome/>
            )}
            {localStorage.getItem("role") === "teacher" && (
                <TeacherHome/>
            )}
        </main>
    )
}