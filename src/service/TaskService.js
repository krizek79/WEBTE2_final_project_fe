import axios from "axios"

const TASK_API_BASE_URL = "http://localhost/api/task"

export default new class TaskService {

    getTaskById(id) {
        return axios.get(TASK_API_BASE_URL + "/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }

    submitTask(request) {
        return axios.post(TASK_API_BASE_URL + "/", request, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
    }
}