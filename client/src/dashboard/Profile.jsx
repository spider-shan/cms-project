import React from 'react';

function Profile(props) {
    return (
        <div className="max-w-2xl mx-auto mt-12 bg-gradient-to-br from-blue-50 via-white to-purple-100 shadow-2xl rounded-3xl p-10 relative overflow-hidden">
            {/* Decorative background shapes */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-2xl pointer-events-none"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl pointer-events-none"></div>
            <div className="flex items-center space-x-8 mb-8">
                <div className="relative">
                    <img
                        className="h-28 w-28 rounded-full object-cover border-4 border-blue-500 shadow-lg transition-transform duration-300 hover:scale-105"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruPrVkps01HSioNxNvlz-tbABSDpPZJhRIQ&s"
                        alt="Student Avatar"
                    />
                    <span className="absolute bottom-2 right-2 bg-blue-400 border-2 border-white rounded-full w-5 h-5 block shadow-md"></span>
                </div>
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Cristiano Ronaldo </h2>
                    <p className="text-blue-600 font-medium">Roll No: 1</p>
                    <p className="text-gray-700">B.E <span className="font-semibold">Computer Science</span></p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/70 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-blue-700 mb-3 text-lg">Personal Details</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li><span className="font-medium">Email:</span> cristianoronaldo@email.com</li>
                        <li><span className="font-medium">Phone:</span> +91 9876543210</li>
                        <li><span className="font-medium">DOB:</span> 05/02/1985</li>
                        <li><span className="font-medium">Gender:</span> Male</li>
                    </ul>
                </div>
                <div className="bg-white/70 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                    <h3 className="font-semibold text-blue-700 mb-3 text-lg">Academic Details</h3>
                    <ul className="text-gray-700 space-y-2">
                        <li><span className="font-medium">Year:</span> 3rd</li>
                        <li><span className="font-medium">Section:</span> B</li>
                        <li><span className="font-medium">CGPA:</span> 7.0</li>
                        <li><span className="font-medium">Advisor:</span> Dr.Zinedine Zidane</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 flex justify-end">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200">
                    Edit Profile
                </button>
            </div>
        </div>
    );
}

export default Profile;