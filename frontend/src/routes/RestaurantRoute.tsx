import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignInContainer from '../pages/SignIn/container/SignInContainer';
import RestaurantRegisterContainer from '../pages/RestaurantRegister/container/RestaurantRegisterContainer';
import RestaurantUploadContainer from '../pages/RestaurantUpload/container/RestaurantUploadContainer';

const RestaurantRoute = () => {
    return (
        <Routes>
            <Route path='upload' element={<RestaurantUploadContainer />} />
        </Routes>
    );
};

export default RestaurantRoute;