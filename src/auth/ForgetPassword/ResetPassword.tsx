import React, { useState } from 'react'
import AuthScreen from '../helper/AuthScreen'
import circleRing from "../../Assets/Images/circleRingReverse.png"
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router'

const ResetPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>("");

    const resetAction = async () => {
        if (email.trim().length) {
            await fetch(process.env.REACT_APP_BASE_URL + "auth/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({ email })
            }).then((res) => res.json()).then((response) => {
                if (response.success) {
                    toast.success("Password reset link has been sent, please check email", {
                        position: 'bottom-center',
                        autoClose: 3000
                    })

                    navigate("/login")
                } else {
                    toast.error(response.message ?? "Failed to login", {
                        position: 'bottom-center',
                        autoClose: 3000
                    })
                }
            })
        } else {
            toast.error("Invalid or wrong email", {
                position: 'bottom-center',
                autoClose: 3000
            })
        }
    }
    return (
        <div className='flex flex-row w-full min-h-screen flex-wrap'>
            <div className="w-[100%] sm:w-[60%] bg-custom-gradient">
                <AuthScreen content="Login Here" path="login" />
            </div>
            <div className="flex flex-row w-[100%] sm:w-[40%] items-center justify-center mx-auto">
                <img src={circleRing} className='top-[-80px] sm:top-[-140px] right-0 absolute w-[227px] sm:w-[427px] h-auto' alt='circle-ring' />
                <div className='w-[90%] sm:w-[60%]'>
                    <h2 className='font-[700] text-[26px]'>Hello Again!</h2>
                    <p>Please enter your registered email</p>

                    <div className='mx-auto flex flex-col w-full mt-6'>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.3">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.5 5.25L2.25 4.5H21.75L22.5 5.25V18.75L21.75 19.5H2.25L1.5 18.75V5.25ZM3 6.8025V18H21V6.804L12.465 13.35H11.55L3 6.8025ZM19.545 6H4.455L12 11.8035L19.545 6Z" fill="#333333" />
                                    </g>
                                </svg>

                            </div>
                            <input type="email" id="input-group-1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-300 focus:border-red-300 block w-full ps-12 p-2.5" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>

                        <button className='text-white bg-[#0575E6] hover:bg-custom-gradient px-[26px] py-[18px] rounded-[30px]' onClick={resetAction}>Send Email</button>

                    </div>
                </div>

            </div>
            < ToastContainer />
        </div>
    )
}

export default ResetPassword