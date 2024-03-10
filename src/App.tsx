import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import Home from './pages/Home';
import Form01 from './pages/Form01';

function App() {
  return (
    <Router>
      <MainLayout headerTitle="Header Title">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form01" element={<Form01 />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
