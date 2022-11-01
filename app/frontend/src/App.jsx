import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginOrCreate from './pages/LoginOrCreate';
import Content from './pages/Content';
import Details from './pages/Details';
import CreateOrUpdate from './pages/CreateOrUpdate';
import Header from './components/Header';
import Footer from './components/Footer';
import './style/main.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<LoginOrCreate />} />
        <Route path="/signup" element={<LoginOrCreate />} />
        <Route path="/home" element={<Content />} />
        <Route path="/content/:id" element={<Details />} />
        <Route path="/create" element={<CreateOrUpdate />} />
        <Route path="/update/:id" element={<CreateOrUpdate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
