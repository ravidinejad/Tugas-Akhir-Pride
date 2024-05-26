import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [image, setImage] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const addItem = () => {
    if (!name || !description || !price || !stock || !image) return;
    setItems([
      ...items,
      {
        id: id || Math.random().toString(36).substr(2, 9),
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
        image
      }
    ]);
    setId('');
    setName('');
    setDescription('');
    setPrice('');
    setStock('');
    setImage('');
  };

  const editItem = (id) => {
    const itemToEdit = items.find((item) => item.id === id);
    if (!itemToEdit) return;
    setId(itemToEdit.id);
    setName(itemToEdit.name);
    setDescription(itemToEdit.description);
    setPrice(itemToEdit.price.toString());
    setStock(itemToEdit.stock.toString());
    setImage(itemToEdit.image);
    setEditingItem(itemToEdit.id);
  };

  const updateItem = () => {
    if (!name || !description || !price || !stock || !image) return;
    const updatedItems = items.map((item) => {
      if (item.id === editingItem) {
        return {
          id: item.id,
          name,
          description,
          price: parseFloat(price),
          stock: parseInt(stock),
          image
        };
      }
      return item;
    });
    setItems(updatedItems);
    setId('');
    setName('');
    setDescription('');
    setPrice('');
    setStock('');
    setImage('');
    setEditingItem(null);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Manajemen Barang</h1>
      <div className="flex">
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <ul>
            <li
              className="cursor-pointer mb-2"
              onClick={() => {
                setId('');
                setName('');
                setDescription('');
                setPrice('');
                setStock('');
                setImage('');
                setEditingItem(null);
              }}
            >
              Tambah Barang
            </li>
          </ul>
        </div>
        <div className="w-3/4 p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (editingItem) {
                updateItem();
              } else {
                addItem();
              }
            }}
            className="mb-4"
          >
            <input
              type="text"
              placeholder="ID (Opsional)"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="px-4 py-2 mr-2 rounded border"
            />
            <input
              type="text"
              placeholder="Nama Barang"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 mr-2 rounded border"
            />
            <input
              type="text"
              placeholder="Deskripsi"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 mr-2 rounded border"
            />
            <input
              type="number"
              placeholder="Harga"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="px-4 py-2 mr-2 rounded border"
            />
            <input
              type="number"
              placeholder="Stok"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="px-4 py-2 mr-2 rounded border"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    setImage(event.target.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              className="px-4 py-2 mr-2 border"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              {editingItem ? 'Perbarui Barang' : 'Tambah Barang'}
            </button>
          </form>
          <div>
            <h2 className="text-lg font-semibold mb-4">Daftar Barang</h2>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Nama Barang</th>
                  <th className="px-4 py-2">Deskripsi</th>
                  <th className="px-4 py-2">Harga</th>
                  <th className="px-4 py-2">Stok</th>
                  <th className="px-4 py-2">Gambar</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.description}</td>
                    <td className="border px-4 py-2">{item.price}</td>
                    <td className="border px-4 py-2">{item.stock}</td>
                    <td className="border px-4 py-2">
                      <img src={item.image} alt={item.name} className="h-10" />
                    </td>
                    <td className="border px-4 py-2">
                      <button onClick={() => editItem(item.id)} className="mr-2 text-blue-500">
                        Edit
                      </button>
                      <button onClick={() => deleteItem(item.id)} className="text-red-500">
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
