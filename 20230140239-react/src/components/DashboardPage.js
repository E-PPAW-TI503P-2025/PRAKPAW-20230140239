import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token dari local storage
    navigate('/login'); // Arahkan kembali ke halaman login
  };

  const handlePresensi = () => {
    navigate('/presensi'); // Arahkan ke halaman presensi
  };

  return (
    <>
      <Navbar />     
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Kotak-kotak dekoratif background - Layer 1 */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-rose-200 opacity-20 rounded-3xl rotate-12 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-pink-300 opacity-30 rounded-2xl -rotate-12"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-rose-300 opacity-20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-200 opacity-25 rounded-3xl rotate-45"></div>
      <div className="absolute top-1/3 left-1/2 w-20 h-20 bg-rose-400 opacity-15 rounded-xl -rotate-6"></div>
      
      {/* Layer 2 - Elemen tambahan */}
      <div className="absolute top-20 right-1/4 w-16 h-16 bg-pink-400 opacity-20 rounded-lg rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-rose-200 opacity-25 rounded-3xl -rotate-6 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-1/4 left-1/3 w-44 h-44 bg-pink-100 opacity-30 rounded-full"></div>
      <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-rose-300 opacity-15 rounded-2xl rotate-45 animate-pulse" style={{ animationDuration: '5s' }}></div>
      
      {/* Layer 3 - Elemen kecil */}
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-pink-500 opacity-10 rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
      <div className="absolute top-3/4 left-1/4 w-20 h-20 bg-rose-400 opacity-20 rounded-xl -rotate-12"></div>
      <div className="absolute top-10 left-1/2 w-24 h-24 bg-pink-200 opacity-25 rounded-2xl rotate-6"></div>
      <div className="absolute bottom-1/4 right-20 w-16 h-16 bg-rose-500 opacity-15 rounded-lg -rotate-45"></div>
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-pink-300 opacity-20 rounded-3xl rotate-12 animate-pulse" style={{ animationDuration: '6s' }}></div>
      
      {/* Layer 4 - Garis dekoratif */}
      <div className="absolute top-0 left-1/4 w-1 h-32 bg-gradient-to-b from-rose-200 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 right-1/3 w-1 h-40 bg-gradient-to-t from-pink-200 to-transparent opacity-30"></div>
      <div className="absolute top-1/2 left-0 w-32 h-1 bg-gradient-to-r from-rose-200 to-transparent opacity-30"></div>
      <div className="absolute top-1/3 right-0 w-40 h-1 bg-gradient-to-l from-pink-200 to-transparent opacity-30"></div>
      
      {/* Container utama */}
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center relative z-10 border-t-4 border-rose-400">        
        <div className="mb-6">
          <div className="inline-block p-4 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full mb-4">
            <svg className="w-16 h-16 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600 mb-4">
          Login Sukses!
        </h1>
       
        <p className="text-lg text-gray-600 mb-8">
          Selamat Datang di Halaman Dashboard Anda 
        </p>

        {/* Grid Cards Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
            <div className="text-3xl font-bold text-rose-600 mb-2">24</div>
            <div className="text-sm text-gray-600">Total Presensi</div>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-200">
            <div className="text-3xl font-bold text-pink-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Hadir Bulan Ini</div>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-xl border border-rose-200">
            <div className="text-3xl font-bold text-rose-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Kehadiran</div>
          </div>
        </div>
      </div>

      {/* Kotak-kotak dekoratif tambahan */}
      <div className="absolute top-20 right-1/4 w-16 h-16 bg-pink-400 opacity-20 rounded-lg rotate-12"></div>
      <div className="absolute bottom-10 right-10 w-36 h-36 bg-rose-200 opacity-25 rounded-3xl -rotate-6 animate-pulse" style={{ animationDuration: '4s' }}></div>

    </div>
    </>
  );
}

export default DashboardPage;
