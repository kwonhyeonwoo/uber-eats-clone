import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import HomeContainer from './pages/Home/container/HomeContainer';
import RestaurantRoute from './routes/RestaurantRoute';
import "./config/core.css"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/user/*' element={<UserRoute />} />
          <Route path='/restaurant/*' element={<RestaurantRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
