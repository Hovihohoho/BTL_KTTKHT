import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

// Import hình ảnh từ thư mục assets của bạn
import bgImage from '../assets/images/login.png'; 
import logoImage from '../assets/images/logochillout.png'; 

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Thay đổi URL nếu API Gateway của bạn chạy port khác
      const response = await axios.post('http://localhost:8000/api/auth/login', credentials);
      const { token, role } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);

      // Điều hướng theo Role
      if (role === 'ADMIN') window.location.href = 'http://localhost:5173';
      else if (role === 'WAITER') navigate('/waiter');
      else if (role === 'CHEF') navigate('/kitchen');
      else navigate('/customer'); 

    } catch (err) {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Cột trái: Hình ảnh nhà hàng */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        {/* Lớp phủ mờ nếu hình ảnh quá sáng (tùy chọn) */}
        <div className="w-full h-full bg-black/10"></div>
      </div>

      {/* Cột phải: Form Đăng nhập */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <img src={logoImage} alt="Chillout Logo" className="h-20 object-contain" />
          </div>

          <h2 className="text-3xl font-extrabold text-center text-black mb-10">Đăng nhập</h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-500 font-bold mb-2">Email / Tên đăng nhập</label>
              <input 
                type="text"
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#9cbab4] outline-none transition"
                placeholder="Nhập email"
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-gray-500 font-bold mb-2">Mật khẩu</label>
              <input 
                type="password"
                className="w-full px-5 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#9cbab4] outline-none transition"
                placeholder="********"
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                required
              />
            </div>

            <div className="flex justify-center pt-4">
              <button 
                type="submit" 
                className="bg-[#9cbab4] hover:bg-[#86a39d] text-white px-12 py-3 rounded-xl font-bold shadow-md transition duration-300"
              >
                Đăng nhập
              </button>
            </div>
          </form>

          {/* Nút chuyển sang Đăng ký */}
          <div className="mt-8 text-center">
            <span className="text-gray-500">Bạn chưa có tài khoản? </span>
            <Link to="/register" className="text-[#9cbab4] font-bold hover:underline">Đăng ký ngay</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;