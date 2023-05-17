import axios from "axios"

const STUDENT_API_BASE_URL = "http://localhost/api/students"

export default new class StudentService {

    getAccessibleFiles() {
        return axios.get(STUDENT_API_BASE_URL + "/files/accessible", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getTaskById(id) {
        return axios.get(STUDENT_API_BASE_URL + "/tasks/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getTaskListByStudent() {
        return axios.get(STUDENT_API_BASE_URL + "/tasks", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    generateTasks(request) {
        return axios.post(STUDENT_API_BASE_URL + "/tasks/generate", request, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    updateStudentAnswer(id, request) {
        return axios.patch(STUDENT_API_BASE_URL + "/tasks/" + id + "/submit", request, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
}