import StudentTaskGenerator from "../task/StudentTaskGenerator.jsx";
import StudentTasksList from "../task/StudentTasksList.jsx";

export default function StudentHome() {

    return (
        <div className="flex flex-col gap-y-12">
            <StudentTaskGenerator/>
            <StudentTasksList/>
        </div>
    )
}
