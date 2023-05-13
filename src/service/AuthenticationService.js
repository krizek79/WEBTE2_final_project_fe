import axios from "axios"

const AUTH_API_BASE_URL = "https://site138.webte.fei.stuba.sk"

export default new class AuthService {

    register(request) {
        return axios.post(AUTH_API_BASE_URL + "/register", request)
    }

    authenticate(request) {
        return axios.post(AUTH_API_BASE_URL + "/login", request)
    }
}