import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Content from './pages/Content';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Content />} />
      {/* <Route path="" element={} /> */}
    </Routes>
  );
}

export default App;
