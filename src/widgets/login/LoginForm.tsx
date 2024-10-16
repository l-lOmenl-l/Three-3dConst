'use client'
import LoginMethod from "@/features/auth/login";
import { useState } from "react";
import { useRouter } from 'next/navigation'
const LoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    const router = useRouter()
    return (
        <div className='w-auto h-auto bg-white rounded-md border-2 border-slate-100 flex flex-col items-center py-10 px-16 z-50 justify-between gap-20'>
            <p className="text-3xl font-sans">Е1 Веб-конструктор</p>
            <div className="flex flex-col w-full h-auto justify-between">
                <input type="text" name="" id="" className="w-full bg-white placeholder:text-slate-500 text-slate-700 text-xl border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-600 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Логин" />
                <div className="relative w-full container mx-auto mt-20">
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Пароль"
                        className="w-full bg-white placeholder:text-slate-500 text-slate-700 text-xl border border-slate-500 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-600 hover:border-slate-300 shadow-sm focus:shadow"
                    />
                    <button
                        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                        onClick={togglePasswordVisibility}
                    >
                        {isPasswordVisible ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            <button className="w-4/6 text-lg bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded" onClick={()=>LoginMethod(router)}>Войти</button>
        </div>
    )
}

export default LoginForm