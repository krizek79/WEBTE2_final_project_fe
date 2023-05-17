import {useState} from "react";
import authenticationService from "../../service/AuthenticationService.js";

export default function RegistrationModal(props) {

    const toggleModal = props.action
    const [registrationRequest, setRegistrationRequest] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        matchingPassword: "",
        role: "student"
    })

    function validateEmail(email) {
        const emailError = document.getElementById("registrationEmailError")
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            emailError.innerHTML = "Please enter a valid email"
            return false
        }
        emailError.innerHTML = ""
        return true
    }

    function validatePassword(password) {
        const passwordError = document.getElementById("registrationPasswordError")
        if (password.length === 0) {
            passwordError.innerHTML = "Please enter the password"
            return false
        }
        passwordError.innerHTML = ""
        return true
    }

    function validateMatchingPassword(matchingPassword, password) {
        const matchingPasswordError = document.getElementById("registrationMatchingPasswordError")

        if (matchingPassword.length === 0) {
            matchingPasswordError.innerHTML = "Please enter the matching password"
            return false
        }

        if (matchingPassword !== password) {
            matchingPasswordError.innerHTML = "Passwords do not match"
            return false
        }

        matchingPasswordError.innerHTML = ""
        return true
    }

    function validateFirstName(firstName) {
        const firstNameError = document.getElementById("registrationFirstNameError")
        if (firstName.length === 0) {
            firstNameError.innerHTML = "Please enter your first name"
            return false
        }
        firstNameError.innerHTML = ""
        return true
    }

    function validateLastName(lastName) {
        const lastNameError = document.getElementById("registrationLastNameError")
        if (lastName.length === 0) {
            lastNameError.innerHTML = "Please enter your last name"
            return false
        }
        lastNameError.innerHTML = ""
        return true
    }

    function handleChange(e) {
        if (e.target.name === "email") {
            validateEmail(e.target.value)
        }
        if (e.target.name === "firstName") {
            validateFirstName(e.target.value)
        }
        if (e.target.name === "lastName") {
            validateLastName(e.target.value)
        }
        if (e.target.name === "password") {
            validatePassword(e.target.value)
            validateMatchingPassword(registrationRequest.matchingPassword, e.target.value)
        }
        if (e.target.name === "matchingPassword") {
            validateMatchingPassword(e.target.value, registrationRequest.password)
        }
        setRegistrationRequest({...registrationRequest, [e.target.name]: e.target.value})
    }

    function register() {
        let registrationError = document.getElementById("registrationError")
        let emailValid = validateEmail(registrationRequest.email)
        let firstNameValid = validateFirstName(registrationRequest.firstName)
        let lastNameValid = validateFirstName(registrationRequest.lastName)
        let passwordValid = validatePassword(registrationRequest.password)
        let matchingPasswordValid = validateMatchingPassword(
            registrationRequest.matchingPassword,
            registrationRequest.password
        )

        if (!emailValid || !passwordValid || !matchingPasswordValid || !firstNameValid || !lastNameValid) {
            return
        }

        return authenticationService.register(registrationRequest)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    registrationError.classList.remove("text-red-500")
                    registrationError.classList.add("text-green-500")
                    registrationError.innerHTML = response.data.message
                    alert(response.data.message)
                    toggleModal()
                }
            })
            .catch(e => {
                console.log(e.response.status + ": " + e.response.data.message)
                registrationError.classList.add("text-red-500")
                registrationError.innerHTML = e.response.data.message
            })
    }

    return (
        <>
            <div
                className="justify-center items-center flex flex-col fixed inset-0 z-50 outline-none
                focus:outline-none w-full rounded-md"
            >
                <div
                    className="sm:px-6 w-11/12 md:max-w-xl md:w-full p-6 pt-3 m-auto bg-white rounded-md shadow-md
                    overflow-y-auto"
                >
                    <div className={"flex width-full justify-between border-b pb-3"}>
                        <div className="text-lg font-medium self-end">
                            Create new account
                        </div>
                        <button
                            className="text-2xl text-center cursor-pointer"
                            onClick={toggleModal}
                        >
                            &times;
                        </button>
                    </div>
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
                                type="email"
                                name={"email"}
                                value={registrationRequest.email}
                                onChange={handleChange}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border
                                rounded-md focus:border-blue-700 focus:ring-blue-300 focus:outline-none
                                focus:ring focus:ring-opacity-40"
                            />
                            <span id="registrationEmailError" className="text-red-500 text-sm"></span>
                        </div>
                        <div className="mb-2 w-full flex gap-x-3">
                            <div className="w-full">
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    First name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    name={"firstName"}
                                    value={registrationRequest.firstName}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border
                                    rounded-md focus:border-blue-700 focus:ring-blue-300 focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                />
                                <span id="registrationFirstNameError" className="text-red-500 text-sm"></span>
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-semibold text-gray-800"
                                >
                                    Last name
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    name={"lastName"}
                                    value={registrationRequest.lastName}
                                    onChange={handleChange}
                                    className="block w-full px-4 py-2 mt-2 text-black bg-white border
                                    rounded-md focus:border-blue-700 focus:ring-blue-300 focus:outline-none
                                    focus:ring focus:ring-opacity-40"
                                />
                                <span id="registrationLastNameError" className="text-red-500 text-sm"></span>
                            </div>
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
                                value={registrationRequest.password}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border
                                rounded-md focus:border-blue-700 focus:ring-blue-300 focus:outline-none
                                focus:ring focus:ring-opacity-40"
                                onChange={handleChange}
                            />
                            <span id="registrationPasswordError" className="text-red-500 text-sm"></span>
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="matchingPassword"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Repeat password
                            </label>
                            <input
                                id="matchingPassword"
                                type="password"
                                name={"matchingPassword"}
                                value={registrationRequest.matchingPassword}
                                className="block w-full px-4 py-2 mt-2 text-black bg-white border
                                rounded-md focus:border-blue-700 focus:ring-blue-300 focus:outline-none
                                focus:ring focus:ring-opacity-40"
                                onChange={handleChange}
                            />
                            <span id="registrationMatchingPasswordError" className="text-red-500 text-sm"></span>
                        </div>
                        <div className="mb-2">
                            <div className="block text-sm font-semibold text-gray-800">
                                Account type
                            </div>
                            <div className="mt-2 flex items-center">
                                <input
                                    id="student"
                                    type="radio"
                                    name="role"
                                    value="student"
                                    checked={registrationRequest.role === "student"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="student" className="mr-4">
                                    Student
                                </label>
                                <input
                                    id="teacher"
                                    type="radio"
                                    name="role"
                                    value="teacher"
                                    checked={registrationRequest.role === "teacher"}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="teacher" className="mr-4">
                                    Teacher
                                </label>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors
                                duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600
                                focus:outline-none focus:bg-blue-600"
                                onClick={register}
                            >
                                Sign up
                            </button>
                        </div>
                        <span
                            id="registrationError"
                            className="text-sm text-red-500 w-full flex justify-center mt-3"
                        ></span>
                    </div>
                </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}