import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError(""); // Clear previous error messages
    try {
      const response = await axios.post("http://localhost:2910/users/login", {
        username,
        password,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);

        navigate("/Beranda");
      } else {
        setError("Access denied. You don't have permission to access this page.");
      }
    } catch (error) {
      console.error("Login error:", error);

      if (error.response) {
        // Server responded with a status other than 200 range
        setError(`Login failed: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        // Request was made but no response was received
        setError("Login failed: No response from server. Please try again later.");
      } else {
        // Something else happened while setting up the request
        setError(`Login failed: ${error.message}`);
      }
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
                to="/RegisterUser"
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
