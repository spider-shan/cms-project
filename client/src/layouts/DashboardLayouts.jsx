import React from 'react';
import { Outlet } from 'react-router-dom';
function DashboardLayouts(props) {
    return (
        <div className="min-h-screen flex flex-col">
            <header className="p-4 bg-blue-900 text-white">
                <nav>
                    <ul className="flex gap-6 list-none m-0 p-0 items-center">
                        <li>
                            <a href="/dashboard/intro" className="no-underline text-white hover:text-blue-300">Introduction</a>
                        </li>
                        <li>
                            <a href="/dashboard/profile" className="no-underline text-white hover:text-blue-300">Profile</a>
                        </li>
                        <li>
                            <a href="/dashboard/attendance" className="no-underline text-white hover:text-blue-300">Attendance</a>
                        </li>
                        <li>
                            <a href="/dashboard/marksheet" className="no-underline text-white hover:text-blue-300">Marksheet</a>
                        </li>
                        <li className="ml-auto">
                            <a
                                href="/login"
                                className="bg-red-600 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 "
                            >
                                Logout
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}

export default DashboardLayouts;