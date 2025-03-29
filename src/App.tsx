import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import ExperiencePage from './components/ExperiencePage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/experience/:id" element={<ExperiencePage />} />
      </Routes>
    </div>
  );
}

export default App;