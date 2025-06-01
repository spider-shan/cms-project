import React from 'react';

function Attendance(props) {

    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    const defaultProfileImg = "https://www.gravatar.com/avatar/?d=mp";

    return (
        <div 
            style={{
                backgroundImage: "url('https://wagner.edu/communications/files/2020/03/Pano2-1920.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                backgroundColor: '#1e3a8a',
            }}
            className="bg-fixed py-16 px-4"
        >
            <div className="max-w-4xl mx-auto rounded-lg shadow-md p-6 bg-white/30 backdrop-blur-md">
                <h1 className="text-3xl font-bold mb-6 text-blue-700">Attendance</h1>
                <div className="mb-8">
                    <div className="flex items-center space-x-4">
                        <img
                            src={user.profileImg || defaultProfileImg}
                            alt="Profile"
                            className="w-16 h-16 rounded-full border-2 border-blue-500"
                            onError={e => { e.target.onerror = null; e.target.src = defaultProfileImg; }}
                        />
                        <div>
                            <h2 className="text-xl font-semibold">{user.fullName}</h2>
                            <p className="text-gray-500">{user.studentId}</p>
                            <p className="text-gray-500">{user.email}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-700">Attendance Summary</h3>
                    <div className="rounded-lg bg-white/30 backdrop-blur-md overflow-hidden">
                        <table className="min-w-full border border-gray-200">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 bg-blue-100/60 backdrop-blur-sm text-left">Subject</th>
                                    <th className="py-2 px-4 bg-blue-100/60 backdrop-blur-sm text-left">Total Classes</th>
                                    <th className="py-2 px-4 bg-blue-100/60 backdrop-blur-sm text-left">Attended</th>
                                    <th className="py-2 px-4 bg-blue-100/60 backdrop-blur-sm text-left">Percentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t">
                                    <td className="py-2 px-4">Science</td>
                                    <td className="py-2 px-4">40</td>
                                    <td className="py-2 px-4">40</td>
                                    <td className="py-2 px-4 text-green-600 font-bold">100%</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2 px-4">Mathematics</td>
                                    <td className="py-2 px-4">40</td>
                                    <td className="py-2 px-4">36</td>
                                    <td className="py-2 px-4 text-green-600 font-bold">90%</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2 px-4">Physics</td>
                                    <td className="py-2 px-4">38</td>
                                    <td className="py-2 px-4">34</td>
                                    <td className="py-2 px-4 text-green-600 font-bold">89%</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2 px-4">Chemistry</td>
                                    <td className="py-2 px-4">42</td>
                                    <td className="py-2 px-4">39</td>
                                    <td className="py-2 px-4 text-green-600 font-bold">93%</td>
                                </tr>
                                <tr className="border-t">
                                    <td className="py-2 px-4">Computer Science</td>
                                    <td className="py-2 px-4">40</td>
                                    <td className="py-2 px-4">38</td>
                                    <td className="py-2 px-4 text-green-600 font-bold">95%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        Download Report
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Attendance;