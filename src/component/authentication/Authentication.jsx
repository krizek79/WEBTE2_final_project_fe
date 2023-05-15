import {useEffect, useState} from "react";
import RegistrationModal from "./RegistrationModal.jsx";
import LoginModal from "./LoginModal.jsx";
import {useNavigate} from "react-router-dom";

export default function Authentication() {

    const navigate = useNavigate()
    const [loginModal, setLoginModal] = useState(false)
    const [registrationModal, setRegistrationModal] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/home")
        }
    }, [])

    function toggleLoginModal() {
        setLoginModal(!loginModal)
    }

    function toggleRegistrationModal() {
        setRegistrationModal(!registrationModal)
    }

    return (
        <main className="w-full py-12">
            <div className="w-full flex justify-center">
                <div className="text-gray-600 text-lg flex flex-col md:flex-row justify-center">
                    <button
                        className="px-24 py-6 border-b md:border-r md:border-b-0"
                        onClick={() => toggleLoginModal()}
                    >
                        Sign in
                    </button>
                    <button
                        className="px-24 py-6"
                        onClick={() => toggleRegistrationModal()}
                    >
                        Sign up
                    </button>
                </div>
            </div>

            {loginModal && (
                <LoginModal action={toggleLoginModal}/>
            )}

            {registrationModal && (
                <RegistrationModal action={toggleRegistrationModal}/>
            )}
        </main>
    )
}