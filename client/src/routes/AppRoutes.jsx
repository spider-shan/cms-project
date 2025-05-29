import React from 'react';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { Route,Routes } from 'react-router-dom';
import Introduction from '../dashboard/Introduction';
import Profile from '../dashboard/Profile';
import Attendance from '../dashboard/Attendance';
import Marksheet from '../dashboard/Marksheet';
import DashboardLayouts from '../layouts/DashboardLayouts';


function AppRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/dashboard" element={<DashboardLayouts/>} >
              <Route index element={<Introduction />} />
             <Route path="intro"   element={<Introduction/>} />
             <Route path="profile" element={<Profile />} />
             <Route path="attendance" element={<Attendance />} />
             <Route path="marksheet" element={<Marksheet/>} />
            </Route>
            <Route path="logout" element={<Home/>} />
        </Routes>

    );
}

export default AppRoutes;