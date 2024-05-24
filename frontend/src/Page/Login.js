import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Lakukan permintaan login dengan axios
      const response = await axios.post("http://localhost:2910/users/login", {
        username,
        password,
      });

      console.log("Login response:", response); // Tambahkan log untuk melihat respons

      // Jika berhasil, simpan token dari respons
      const { token } = response.data;

      // Simpan token ke sessionStorage untuk otentikasi di permintaan selanjutnya
      sessionStorage.setItem("token", token);

      console.log("Token saved:", token); // Log token yang disimpan

      // Set header Authorization dengan bearer token untuk semua permintaan selanjutnya
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Redirect pengguna ke halaman setelah login (misalnya, dashboard)
      navigate("/beranda");
    } catch (error) {
      // Tangkap kesalahan dan tampilkan pesan kesalahan
      console.error("Login error:", error); // Log error untuk debugging
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">PRIDE</h1>
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Username
            </label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <div className="text-red-500 text-sm mb-3">{error}</div>}
            <button
              type="button"
              onClick={handleLogin}
              className="transition duration-200 bg-blue-300 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            >
              <span className="inline-block mr-2">Login</span>
            </button>
            <div className="text-center mt-4">
              Apakah kamu tidak memiliki akun?{" "}
              <Link
                to="/forgot-password"
                className="text-sm font-medium text-blue-500"
              >
                Daftar
              </Link>
            </div>
          </div>
          {/* Bagian lain dari tampilan login */}
        </div>
      </div>
    </div>
  );
};

export default Login;
