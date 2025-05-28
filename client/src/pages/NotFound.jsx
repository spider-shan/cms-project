import React from 'react';

function NotFound(props) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-12 flex flex-col items-center">
                <h1 className="text-9xl font-extrabold text-red-600 drop-shadow-lg mb-2">
                    404
                </h1>
                <h2 className="text-3xl font-semibold text-gray-800 mb-4 tracking-wide">
                    Oops! Page Not Found
                </h2>
                <p className="text-lg text-gray-500 mb-8 text-center max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <a
                    href="/"
                    className="inline-block px-8 py-3 bg-gray-600 text-white rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all duration-200"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
}

export default NotFound;