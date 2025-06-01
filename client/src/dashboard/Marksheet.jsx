import React from 'react';
import { useAuth } from "../context/AuthContext";

function Marksheet(props) {
 const { user } = useAuth();
  const defaultProfileImg = "https://www.gravatar.com/avatar/?d=mp";

  if (!user) {
    return <div className="p-8 text-center">Please login to view your marksheet.</div>;
  }

  // Load all marksheets from localStorage
  const allMarksheets = JSON.parse(localStorage.getItem("marksheets")) || [];

  // Find current user's marksheet (assuming one per studentId)
  const marksheet = allMarksheets.find((m) => m.studentId === user.studentId);


    return (
        <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
            <div className="flex flex-col items-center mb-6">
                <img
                    src={user.profileImg || defaultProfileImg}
                    alt="Student"
                    className="w-24 h-24 rounded-full border-4 border-blue-300 mb-2"
                />
                <h2 className="text-2xl font-bold text-center text-blue-700">Semester Marksheet</h2>
            </div>
            <div className="mb-4">
                <div className="flex justify-between mb-2">
                    <span className="font-semibold">Name:</span>
                    <span>{user.fullName}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="font-semibold">Roll No:</span>
                    <span>{user.studentId}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span className="font-semibold">Course:</span>
                    <span>B.E {user.department}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-semibold">Semester:</span>
                    <span>6</span>
                </div>
            </div>
            <table className="min-w-full bg-gray-100 rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 bg-blue-200 text-left">Subject</th>
                        <th className="py-2 px-4 bg-blue-200 text-left">Marks Obtained</th>
                        <th className="py-2 px-4 bg-blue-200 text-left">Max Marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 px-4">Science</td>
                        <td className="py-2 px-4">100</td>
                        <td className="py-2 px-4">100</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4">Mathematics</td>
                        <td className="py-2 px-4">85</td>
                        <td className="py-2 px-4">100</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4">Physics</td>
                        <td className="py-2 px-4">78</td>
                        <td className="py-2 px-4">100</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4">Chemistry</td>
                        <td className="py-2 px-4">82</td>
                        <td className="py-2 px-4">100</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4">Computer Science</td>
                        <td className="py-2 px-4">95</td>
                        <td className="py-2 px-4">100</td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-end mt-6">
                <div className="text-lg font-semibold">
                    Total: 440 / 500
                </div>
            </div>
            <div className="flex justify-end mt-2">
                <div className="text-lg font-semibold text-green-600">
                    Result: Pass
                </div>
            </div>
        </div>
    );
}

export default Marksheet;