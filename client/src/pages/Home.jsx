import React from 'react';

function Home(props) {
    return (
        <div
            className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-900 font-sans relative"
            style={{
                backgroundImage: "url('https://wallpaperaccess.com/full/207489.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Header */}
            <header className="w-full flex justify-between items-center px-8 py-6 z-10">
                <div className="flex items-center space-x-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Rajiv_Gandhi_University_logo.png"
                        alt="Skyline Institute of Technology Logo"
                        className="w-14 h-14 rounded-full shadow"
                    />
                    <span className="text-2xl font-bold text-blue-900 whitespace-nowrap">
                        Skyline Institute of Technology
                    </span>
                </div>
                <div className="flex space-x-4">
                    <a
                        href="/login"
                        className="px-6 py-2 rounded-md bg-blue-900 text-white font-semibold shadow hover:bg-blue-900 transition"
                    >
                        Login
                    </a>
                    <a
                        href="/signup"
                        className="px-6 py-2 rounded-md bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition"
                    >
                        Sign Up
                    </a>
                </div>
            </header>

            <main className="flex flex-1 flex-col items-center justify-center">
                <div className="bg-transparent rounded-3xl shadow-2xl p-12 flex flex-col items-center w-full max-w-lg border border-blue-900 backdrop-blur-md">
                    <h1
                        className="text-3xl font-extrabold mb-6 text-center text-slate-800 tracking-wide"
                        style={{
                            fontFamily: "'Poppins', 'Montserrat', Arial, sans-serif",
                        }}
                    >
                        Skyline Institute of Technology
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 text-center">
                        Access your courses, grades, and campus resources all in one place.
                    </p>
                    <a
                        href="/login"
                        className="mt-2 px-12 py-3 rounded-full bg-blue-900 text-white font-bold text-xl shadow-lg hover:bg-blue-900 transition"
                    >
                        Get Started
                    </a>
                </div>
            </main>
            /* Footer */
            <footer className="w-full py text-center text-gray-400 text-sm absolute bottom-0 left-0 bg-white/70">
                © {new Date().getFullYear()} Skyline Institute of Technology. All rights reserved.
            </footer>
        </div>
    );
}

export default Home;