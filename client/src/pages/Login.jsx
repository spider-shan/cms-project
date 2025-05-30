import React from 'react';
import { Link } from 'react-router-dom';
function Login(props) {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen font-sans relative"
        >
            {/* Logo on top left corner, links to home */}
            <Link to="/" className="absolute top-6 left-6 z-10">
                <img
                    src="src/assets/Skyline_img-removebg.png"
                    alt="Skyline Logo"
                    className="w-14 h-14 object-contain"
                />
            </Link>
            <h1 className="text-4xl font-extrabold text-blue-800 drop-shadow-lg bg-white/70 px-8 py-2 rounded-xl mb-8">
                Skyline Institute of Technology
            </h1>
            <div className="w-full max-w-md p-10 space-y-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl font-extrabold text-gray-700 mb-1">Welcome Back</h2>
                    <p className="text-blue-700 text-sm">Login to your account</p>
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-blue-700" htmlFor="email">
                            Email Address
                        </label>
                        <input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-semibold text-blue-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent transition"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="********"
                            autoComplete="current-password"
                            required
                        />
                        <div className="flex justify-end mt-1">
                            <a href="#" className="text-xs text-blue-700 hover:underline">Forgot password?</a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 font-bold text-white bg-blue-700 rounded-lg shadow-lg transition transform hover:scale-105 focus:scale-105"
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
                    Don't have an account? <Link to="/SignUp" className="text-blue-700 font-semibold hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
