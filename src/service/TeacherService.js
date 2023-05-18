import axios from "axios"

const TEACHER_API_BASE_URL = "http://localhost/api/teachers"

export default new class TeacherService {

    getFiles() {
        return axios.get(TEACHER_API_BASE_URL + "/files", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getStatistics() {
        return axios.get(TEACHER_API_BASE_URL + "/tasks/statistics", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    sendCollectionsToStudents(request) {
        return axios.patch(TEACHER_API_BASE_URL + "/files/setting", request, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    getStatisticsByStudentId(id) {
        return axios.get(TEACHER_API_BASE_URL + "/tasks/student/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
}