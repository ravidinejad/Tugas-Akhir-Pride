import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: ''
  });
  const [message, setMessage] = useState('');
  
  // Tambahkan state untuk role
  const [role, setRole] = useState('user');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  // Handle perubahan pada input role
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataWithRole = {
      ...formData,
      role: role
    };
    axios.post('http://localhost:2910/users/register', formDataWithRole)
      .then(response => {
        setMessage('User registered successfully!');
        setFormData({
          username: '',
          password: '',
          name: ''
        });
      })
      .catch(error => {
        if (error.response.status === 400) {
          setMessage('Error registering user: Data already exists.'); // Set custom error message
        } else {
          setMessage('Error registering user: ' + error.response.data.error);
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* Input tersembunyi untuk role */}
          <input type="hidden" name="role" value={role} />

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
          {message && <p className="text-center text-red-500">{message}</p>}
          <div className="text-center mt-2">
            <p className="text-sm">
              *Jika Anda sudah memiliki akun,{' '}
              <Link to="/login" className="text-blue-500 underline">
                Login
              </Link>{' '}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
