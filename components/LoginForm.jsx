'use client';

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="font-[sans-serif] text-gray-800 bg-white max-w-4xl flex items-center mx-auto md:h-screen p-4">
            <div className="grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden">
                <div className="max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-slate-800 to-orange-900 lg:px-8 px-4 py-4">
                    <div>
                        <h4 className="text-white text-lg font-semibold">Log In To Your Account</h4>
                        <p className="text-[13px] text-white mt-2">Welcome to our log in page! We are happy to see you.</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="md:col-span-2 w-full py-6 px-6 sm:px-16">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold">Log in</h3>
                    </div>
                    {
                        error && (
                            <div className="bg-red-100 text-red-800 pl-4 pr-10 py-4 rounded relative" role="alert">
                                <div className="inline-block max-sm:mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 inline mr-4" viewBox="0 0 32 32">
                                        <path
                                            d="M16 1a15 15 0 1 0 15 15A15 15 0 0 0 16 1zm6.36 20L21 22.36l-5-4.95-4.95 4.95L9.64 21l4.95-5-4.95-4.95 1.41-1.41L16 14.59l5-4.95 1.41 1.41-5 4.95z"
                                            data-original="#ea2d3f" />
                                    </svg>
                                    <strong className="font-bold text-base">Error!</strong>
                                </div>
                                <span className="block sm:inline text-sm mx-4 max-sm:ml-0 max-sm:mt-1">{error}</span>
                            </div>
                        )
                    }
                    <div className="space-y-5">
                        <div>
                            <label className="text-sm mb-2 block">Email Id</label>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                                    <defs>
                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                        </clipPath>
                                    </defs>
                                    <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                        <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                        <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm mb-2 block">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type="password" required className="bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="!mt-10">
                        <button className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-orange-900 hover:bg-orange-800 focus:outline-none">
                            Log in
                        </button>
                    </div>
                    <p className="text-sm mt-6 text-center">
                        Do not have an account?
                        <Link
                            href="/register"
                            className="text-blue-600 font-semibold hover:underline ml-1"
                        >
                            Register here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
