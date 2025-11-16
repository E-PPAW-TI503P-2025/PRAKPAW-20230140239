import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError(null); 

    try {
      
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email: email,
        password: password
      });

      const token = response.data.token;
      localStorage.setItem('token', token); 

      navigate('/dashboard');

    } catch (err) {
      // 4. Tangani error dari server
      setError(err.response ? err.response.data.message : 'Login gagal');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Kotak-kotak dekoratif - Layer 1 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200 opacity-20 rounded-3xl rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-rose-300 opacity-25 rounded-2xl -rotate-12"></div>
      <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-pink-200 opacity-20 rounded-3xl rotate-45"></div>
      
      {/* Layer 2 - Elemen tambahan */}
      <div className="absolute top-10 right-1/3 w-36 h-36 bg-rose-100 opacity-30 rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-10 left-10 w-44 h-44 bg-pink-100 opacity-25 rounded-full"></div>
      <div className="absolute top-1/3 left-20 w-20 h-20 bg-rose-400 opacity-15 rounded-xl rotate-12"></div>
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-300 opacity-20 rounded-2xl -rotate-6 animate-pulse" style={{ animationDuration: '5s' }}></div>
      
      {/* Layer 3 - Elemen kecil */}
      <div className="absolute top-1/4 right-10 w-16 h-16 bg-rose-500 opacity-15 rounded-lg -rotate-45 animate-bounce" style={{ animationDuration: '2s' }}></div>
      <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-pink-400 opacity-20 rounded-xl rotate-6"></div>
      <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-rose-300 opacity-25 rounded-full"></div>
      <div className="absolute top-40 left-1/2 w-28 h-28 bg-pink-200 opacity-20 rounded-3xl -rotate-12"></div>
      
      {/* Layer 4 - Garis dekoratif */}
      <div className="absolute top-0 left-1/3 w-1 h-40 bg-gradient-to-b from-rose-300 to-transparent opacity-25"></div>
      <div className="absolute bottom-0 right-1/4 w-1 h-48 bg-gradient-to-t from-pink-300 to-transparent opacity-25"></div>
      <div className="absolute top-1/2 left-0 w-40 h-1 bg-gradient-to-r from-rose-200 to-transparent opacity-25"></div>
      <div className="absolute top-1/4 right-0 w-48 h-1 bg-gradient-to-l from-pink-200 to-transparent opacity-25"></div>
      
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md relative z-10 border-t-4 border-rose-400">
        <div className="text-center mb-6">
          <div className="inline-block p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full mb-4">
            <svg className="w-12 h-12 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
            Login
          </h2>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-100 border border-rose-400 text-rose-700 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border border-rose-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
            />
          </div>
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-3 py-2 border border-rose-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Belum punya akun?{' '}
          <button
            onClick={() => navigate('/register')}
            className="font-medium text-rose-600 hover:text-pink-600"
          >
            Daftar di sini
          </button>
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
