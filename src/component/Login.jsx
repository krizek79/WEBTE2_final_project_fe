import {useState} from "react";
import authenticationService from "../service/AuthenticationService.js";

export default function Login() {

    const [loginRequest, setLoginRequest] = useState({
        email: "",
        password: ""
    })

    function validateEmail(email) {
        const emailError = document.getElementById("loginEmailError")
        if (email.length === 0) {
            emailError.innerHTML = "Please enter your email"
            return false
        } else {
            emailError.innerHTML = ""
            return true
        }
    }

    function validatePassword(password) {
        const passwordError = document.getElementById("loginPasswordError")
        if (password.length === 0) {
            passwordError.innerHTML = "Please enter your password"
            return false
        } else {
            passwordError.innerHTML = ""
            return true
        }
    }

    function handleChange(e) {
        if (e.target.name === "email") {
            validateEmail(e.target.value)
        }
        if (e.target.name === "password") {
            validatePassword(e.target.value)
        }
        setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value })
    }

    function authenticate() {
        if (!validateEmail(loginRequest.email) || !validatePassword(loginRequest.password)) {
            return
        }

        authenticationService.authenticate(loginRequest)
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("email", response.data.email)
                    localStorage.setItem("role", response.data.role)
                }
            })
            .catch(e => {
                if (e.response.status === 401) {
                } else {
                    console.log(e.response.status + ": " + e.response.data.message)
                }
            })
    }

    return (
        <div className="w-full flex flex-col justify-center">
            <div className="sm:px-6 w-full p-6 pt-3 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <div className="mt-3">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            name={"email"}
                            value={loginRequest.email}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border
                            rounded-md focus:border-blue-700 focus:ring-blue-300 focus:outline-none
                            focus:ring focus:ring-opacity-40"
                        />
                        <span id="loginEmailError" className="text-red-500 text-sm"></span>
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name={"password"}
                            value={loginRequest.password}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-black bg-white border
                            rounded-md focus:border-blue-700 focus:ring-blue-300 focus:outline-none
                            focus:ring focus:ring-opacity-40"
                        />
                        <span id="loginPasswordError" className="text-red-500 text-sm"></span>
                    </div>
                    <div className="mt-3 border-t">

                    </div>
                    <div className="mt-6">
                        <button
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors
                            duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600
                            focus:outline-none focus:bg-blue-600"
                            onClick={authenticate}
                        >
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}