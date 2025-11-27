import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Navbar from './Navbar';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function AttendancePage() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [coords, setCoords] = useState(null);
  const navigate = useNavigate();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          setError("Gagal mendapatkan lokasi: " + error.message);
        }
      );
    } else {
      setError("Geolocation tidak didukung oleh browser ini.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleCheckIn = async () => {
    setError('');
    setMessage('');

    if (!coords) {
      setError("Lokasi belum didapatkan. Mohon izinkan akses lokasi.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3001/api/presensi/check-in', {
        latitude: coords.lat,
        longitude: coords.lng
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setMessage(response.data.message);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Check-in gagal');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckOut = async () => {
    setError('');
    setMessage('');

    if (!coords) {
      setError("Lokasi belum didapatkan. Mohon izinkan akses lokasi.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3001/api/presensi/check-out', {
        latitude: coords.lat,
        longitude: coords.lng
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setMessage(response.data.message);
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Check-out gagal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {coords && (
          <div className="mb-8 border rounded-lg overflow-hidden shadow-lg">
            <MapContainer center={[coords.lat, coords.lng]} zoom={15} style={{ height: '300px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[coords.lat, coords.lng]}>
                <Popup>Lokasi Presensi Anda</Popup>
              </Marker>
            </MapContainer>
          </div>
        )}

        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Lakukan Presensi
            </h2>

            {message && <p className="text-green-600 mb-4 font-medium">{message}</p>}
            {error && <p className="text-red-600 mb-4 font-medium">{error}</p>}

            <div className="flex space-x-4">
              <button
                onClick={handleCheckIn}
                disabled={loading}
                className={`w-full py-3 px-4 text-white font-semibold rounded-md shadow-sm transition-colors ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                  }`}
              >
                {loading ? 'Loading...' : 'Check-In'}
              </button>
              <button
                onClick={handleCheckOut}
                disabled={loading}
                className={`w-full py-3 px-4 text-white font-semibold rounded-md shadow-sm transition-colors ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'
                  }`}
              >
                {loading ? 'Loading...' : 'Check-Out'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendancePage;