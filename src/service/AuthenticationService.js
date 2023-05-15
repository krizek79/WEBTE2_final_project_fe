import axios from "axios"

const AUTH_API_BASE_URL = "http://localhost/api"

export default new class AuthenticationService {

    register(request) {
        return axios.post(AUTH_API_BASE_URL + "/register", request)
    }

    authenticate(request) {
        return axios.post(AUTH_API_BASE_URL + "/authenticate", request)
    }
}