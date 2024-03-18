import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInContainer from '../pages/SignIn/container/SignInContainer';
import SignupContainer from '../pages/Signup/container/SignupContainer';
import UserUpdateContainer from '../pages/UserUpdate/container/UserUpdateContainer';

const UserRoute = () => {
    return (
        <Routes>
            <Route path='signin' element={<SignInContainer />} />
            <Route path='singup' element={<SignupContainer />} />
            <Route path='update' element={<UserUpdateContainer />} />
        </Routes>
    );
};

export default UserRoute;