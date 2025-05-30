import React from 'react';
import { Link } from "react-router-dom";
import Skyline_bg from '../assets/Skyline_img-removebg.png';

function Home(props) {
    return (
        <div
            className="min-h-screen flex flex-col font-sans relative"
            
        >
            
            {/* Header */}
            <header className="w-full flex justify-between items-center px-8 py-6 z-10">
                <div className="flex items-center space-x-3">
                    <img
                        src={Skyline_bg}
                        alt="Skyline Institute of Technology Logo"
                        className="w-14 h-14 rounded-full"
                    />
                    <span className="text-2xl font-bold text-blue-900 whitespace-nowrap">
                        Skyline Institute of Technology
                    </span>
                </div>
                <div className="flex space-x-4">
                    <Link
                        to="/login"
                        className="px-6 py-2 rounded-md bg-blue-900 text-white font-semibold shadow hover:bg-blue-800 transition"
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        className="px-6 py-2 rounded-md bg-blue-700 text-white font-semibold shadow hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </Link>
                </div>
            </header>

            <main className="flex flex-1 flex-col items-center justify-center">
                <div className="bg-white/0 rounded-3xl shadow-2xl p-12 flex flex-col items-center w-full max-w-lg border border-blue-600 backdrop-blur-md">
                    <h1
                        className="text-3xl font-extrabold mb-6 text-center text-slate-800 tracking-wide font-poppins"
                    >
                        Skyline Institute of Technology
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 text-center">
                        Access your courses, grades, and campus resources all in one place.
                    </p>
                    <Link
                        to="/login"
                        className="mt-2 px-12 py-3 rounded-full bg-blue-900 text-white font-bold text-xl shadow-lg hover:bg-blue-800 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </main>
            <footer className="w-full py text-center text-gray-400 text-sm absolute bottom-0 left-0 bg-white/70">
                © {new Date().getFullYear()} Skyline Institute of Technology. All rights reserved.
            </footer>
        </div>
    );
}

export default Home;