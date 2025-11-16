import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <Router>
      <div>
        {/* Navigasi dengan tema rose pink */}
        <nav className="p-4 bg-gradient-to-r from-rose-100 to-pink-100 shadow-md">
          <div className="container mx-auto flex gap-4">
            <Link 
              to="/login" 
              className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200"
            >
              Login
            </Link>
            <Link 
              to="/register"
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-200"
            >
              Register
            </Link>
          </div>
        </nav>
        
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<LoginPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}
export default App;
