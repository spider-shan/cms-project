import React from 'react';
import Skyline_bg from '../assets/photos/SkyLine_img-removebg.png';
import { Link } from 'react-router-dom';
function SignUp(props) {
    return (
        <div
            className="min-h-screen flex items-center justify-center"
        >
            {/* Logo at top left corner */}
                        <div className="absolute top-0 left-0 m-6 z-20 flex flex-col items-start">
                            <Link to="/">
                                <img
                                    src={Skyline_bg}
                                    alt="Skyline Institute Logo"
                                    className="h-14 w-14 object-contain drop-shadow-lg mb-4"
                                />
                            </Link>
                        </div>
                        <div className="absolute top-0 left-0 w-full flex justify-center mt-8 z-10">
                            <h1 className="text-4xl font-extrabold text-blue-800 drop-shadow-lg bg-white/70 px-8 py-2 rounded-xl">
                                Skyline Institute of Technology
                            </h1>
                        </div>
                        <div className="w-full max-w-lg p-10 space-y-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-blue-200 relative z-20 mt-28">
                            <form className="space-y-6">
                                <div className="flex flex-col items-center">
                                    {/* Boy and Girl Icon sized to a circle, no extra circle background */}
                        <svg className="w-16 h-16 mb-4" viewBox="0 0 48 48" fill="none">
                            {/* Boy */}
                            <circle cx="16" cy="18" r="8" fill="#60a5fa" fillOpacity="0.9"/>
                            <rect x="12" y="26" width="8" height="12" rx="4" fill="#60a5fa" fillOpacity="0.9"/>
                            {/* Girl */}
                            <circle cx="32" cy="18" r="8" fill="#fbb6ce" fillOpacity="0.8"/>
                            <rect x="28" y="26" width="8" height="12" rx="4" fill="#fbb6ce" fillOpacity="0.8"/>
                            {/* Girl's hair */}
                            <ellipse cx="32" cy="15" rx="7" ry="4" fill="#f472b6" fillOpacity="0.7"/>
                        </svg>
                        <p className="mt-2 text-sm text-blue-500">Register to access your college portal and resources!</p>
                    </div>
                    <div>
                        <label htmlFor="fullName" className="block mb-1 text-sm font-semibold text-blue-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            required
                            className="w-full px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div>
                        <label htmlFor="studentId" className="block mb-1 text-sm font-semibold text-blue-700">
                            Student ID
                        </label>
                        <input
                            type="text"
                            id="studentId"
                            name="studentId"
                            required
                            className="w-full px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            placeholder="Enter your student ID"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-semibold text-blue-700">
                            College Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            placeholder="Enter your college email"
                        />
                    </div>
                    <div>
                        <label htmlFor="department" className="block mb-1 text-sm font-semibold text-blue-700">
                            Department
                        </label>
                        <input
                            type="text"
                            id="department"
                            name="department"
                            required
                            className="w-full px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            placeholder="e.g. Computer Science"
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" className="block mb-1 text-sm font-semibold text-blue-700">
                            Gender
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            required
                            className="w-full px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-white/0"
                            defaultValue=""
                        >
                            <option value="" disabled>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                            <option value="preferNotToSay">Prefer not to say</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-semibold text-blue-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            placeholder="Create a password"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-1 text-sm font-semibold text-blue-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                            className="w-full px-4 py-3 border border-blue-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            placeholder="Re-enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 font-bold text-lg text-white bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg shadow-md hover:from-blue-700 hover:to-blue-600 transition transform hover:-translate-y-1 hover:scale-105"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="flex items-center justify-center mt-6">
                    <span className="text-blue-500 text-sm">Already have an account?</span>
                    <a href="/login" className="ml-2 text-blue-700 font-semibold hover:underline">Sign In</a>
                </div>
            </div>
        </div>
    );
}

export default SignUp;