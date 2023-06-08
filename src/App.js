import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Search from './Components/Search/Search';
import HomePage from './Components/Home/HomePage';

const App = () => {
  return (
    <>
      {/* TOP LEVEL COMPONENT */}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/search' Component={Search} />
      </Routes>
    </>
  );
};

export default App;