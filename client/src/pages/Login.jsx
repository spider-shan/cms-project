import React from 'react';

function Login(props) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
            <div className="w-full max-w-md p-10 space-y-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200">
                <div className="flex flex-col items-center">
                    <svg className="w-14 h-14 text-blue-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-1">Welcome Back</h2>
                    <p className="text-gray-500 text-sm">Login to your account</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            autoComplete="current-password"
                            required
                        />
                        <div className="flex justify-end mt-1">
                            <a href="#" className="text-xs text-blue-500 hover:underline">Forgot password?</a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition"
                    >
                        Login
                    </button>
                </form>
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-3 text-gray-400 text-xs">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                <p className="text-sm text-center text-gray-600 mt-6">
                    Don't have an account? <a href="/SignUp" className="text-blue-600 font-semibold hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
