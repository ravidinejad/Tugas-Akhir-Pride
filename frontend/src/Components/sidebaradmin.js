import React from 'react';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      <ul>
        <li
          className={`cursor-pointer mb-2 ${currentPage === 'home' ? 'font-bold' : ''}`}
          onClick={() => setCurrentPage('home')}
        >
          Daftar Barang
        </li>
        <li
          className={`cursor-pointer mb-2 ${currentPage === 'add' ? 'font-bold' : ''}`}
          onClick={() => setCurrentPage('add')}
        >
          Tambah Barang
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
