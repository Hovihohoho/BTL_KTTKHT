import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import bgImage from '../assets/images/login.png'; 
import logoImage from '../assets/images/logochillout.png'; 

const RegisterPage = () => {
  const [data, setData] = useState({ fullName: '', username: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/auth/register', data);
      alert("Đăng ký thành công! Vui lòng đăng nhập.");
      navigate('/login');
    } catch (err) {
      alert("Đăng ký thất bại, vui lòng thử lại!");
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Cột trái: Hình ảnh nhà hàng */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="w-full h-full bg-black/10"></div>
      </div>

      {/* Cột phải: Form Đăng ký */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logoImage} alt="Chillout Logo" className="h-16 object-contain" />
          </div>

          <h2 className="text-3xl font-extrabold text-center text-black mb-8">Đăng ký</h2>
          
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-gray-500 font-bold mb-2">Họ và tên</label>
              <input 
                type="text"
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#9cbab4] outline-none transition"
                placeholder="Nhập họ và tên"
                onChange={(e) => setData({...data, fullName: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-gray-500 font-bold mb-2">Email / Tên đăng nhập</label>
              <input 
                type="text"
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#9cbab4] outline-none transition"
                placeholder="Nhập email"
                onChange={(e) => setData({...data, username: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-gray-500 font-bold mb-2">Mật khẩu</label>
              <input 
                type="password"
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#9cbab4] outline-none transition"
                placeholder="********"
                onChange={(e) => setData({...data, password: e.target.value})}
                required
              />
            </div>

            <div className="flex justify-center pt-4">
              <button 
                type="submit" 
                className="bg-[#9cbab4] hover:bg-[#86a39d] text-white px-12 py-3 rounded-xl font-bold shadow-md transition duration-300"
              >
                Đăng ký
              </button>
            </div>
          </form>

          {/* Nút chuyển về Đăng nhập */}
          <div className="mt-8 text-center">
            <span className="text-gray-500">Đã có tài khoản? </span>
            <Link to="/login" className="text-[#9cbab4] font-bold hover:underline">Đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;