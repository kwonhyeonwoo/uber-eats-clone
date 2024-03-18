import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import Home from './pages/Home/Home';
import HomeContainer from './pages/Home/container/HomeContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeContainer />} />
          <Route path='/user/*' element={<UserRoute />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
