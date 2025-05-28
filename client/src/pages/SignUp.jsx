import React from 'react';

function SignUp(props) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
            <div className="w-full max-w-lg p-10 space-y-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200">
                <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-tr from-blue-500 to-pink-500 rounded-full p-3 mb-4 shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Create your account</h2>
                    <p className="mt-2 text-sm text-gray-500">Join us and unlock exclusive features!</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block mb-1 text-sm font-semibold text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            placeholder="Create a password"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-1 text-sm font-semibold text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            placeholder="Re-enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 font-bold text-lg text-white bg-gradient-to-r from-blue-600 to-pink-500 rounded-lg shadow-md hover:from-blue-700 hover:to-pink-600 transition transform hover:-translate-y-1 hover:scale-105"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="flex items-center justify-center mt-6">
                    <span className="text-gray-500 text-sm">Already have an account?</span>
                    <a href="/login" className="ml-2 text-blue-600 font-semibold hover:underline">Sign In</a>
                </div>
            </div>
        </div>
    );
}

export default SignUp;