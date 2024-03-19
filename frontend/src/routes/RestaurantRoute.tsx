import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInContainer from '../pages/SignIn/container/SignInContainer';
import RestaurantRegisterContainer from '../pages/RestaurantRegister/container/RestaurantRegisterContainer';

const RestaurantRoute = () => {
    return (
        <Routes>
            <Route path='register' element={<RestaurantRegisterContainer />} />
        </Routes>
    );
};

export default RestaurantRoute;