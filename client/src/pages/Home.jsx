import React from 'react';

function Home(props) {
    return (
        <div className="min-h-screen flex flex-col bg-white relative">
            {/* Top right Login/Sign Up */}
            <div className="absolute top-6 right-10 flex space-x-4 z-10">
                <a
                    href="/login"
                    className="px-5 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
                >
                    Login
                </a>
                <a
                    href="/signup"
                    className="px-5 py-2 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition"
                >
                    Sign Up
                </a>
            </div>
            {/* Centered Content */}
            <div className="flex flex-1 flex-col items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-12 flex flex-col items-center w-full max-w-md">
                    <h1 className="text-4xl font-extrabold mb-8 text-gray-800 text-center">Welcome to CMS Project</h1>
                    <a
                        href="/login"
                        className="mt-4 px-10 py-3 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-lg hover:bg-indigo-700 transition"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;