import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Error decoding token:', error);
        localStorage.removeItem('token');
        navigate('/login');
      }
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gradient-to-r from-rose-100 to-pink-100 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/dashboard" 
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <span className="text-gray-700 font-medium">
                hiii , <span className="text-rose-600">{user.nama} {user.role}</span>
              </span>
            )}

            <Link
              to="/presensi"
              className="px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-lg hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200"
            >
              Presensi
            </Link>

            {user && user.role === 'admin' && (
              <Link
                to="/reports"
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-200"
              >
                Laporan Admin
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-lg hover:from-rose-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
