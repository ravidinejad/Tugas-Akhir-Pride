import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Sidebar from "../Components/sidebaradmin";

const App = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [token, setToken] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [selectedImage, setSelectedImage] = useState(null);


  const fetchItems = useCallback(async () => {
    if (!token) return;
    try {
      const response = await axios.get("http://localhost:2910/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  }, [token]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      fetchItems();
    }
  }, [fetchItems]);

  const addItem = async () => {
    if (!name || !description || !price || !stock || !selectedImage) return;
    try {
      const response = await axios.post(
        "http://localhost:2910/products",
        {
          name,
          description,
          price: parseFloat(price),
          stock: parseInt(stock),
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setItems([...items, response.data]);
      resetForm();
    } catch (error) {
      console.error("Error adding item", error);
    }
  };

  const editItem = (id) => {
    console.log("Editing item with ID:", id);
    const itemToEdit = items.find((item) => item.id === id);
    if (!itemToEdit) {
      console.warn("Item not found for editing.");
      return;
    }
    console.log("Item to edit:", itemToEdit);
    setId(itemToEdit.id);
    setName(itemToEdit.name);
    setDescription(itemToEdit.description);
    setPrice(itemToEdit.price.toString());
    setStock(itemToEdit.stock.toString());
    setImage(""); // Clear the image field
    setEditingItem(itemToEdit.id);
  };

  const updateItem = async () => {
    if (!name || !description || !price || !stock ) return; // Remove the condition for the image
    try {
      console.log("Updating item with ID:", editingItem);
      const data = {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock),
      };
      if (image) {
        // Only include image if it's updated
        data.image = image;
      }
      const response = await axios.patch(
        `http://localhost:2910/products/${editingItem}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Server response:", response.data);
      const updatedItems = items.map((item) =>
        item.id === editingItem ? response.data : item
      );
      setItems(updatedItems);
      resetForm();
    } catch (error) {
      console.error("Error updating item", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:2910/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  const resetForm = () => {
    setId("");
    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setImage("");
    setEditingItem(null);
  };

  const filteredItems = items.filter((item) => {
    const query = searchQuery.toLowerCase();
    return (
      item.id.toString().toLowerCase().includes(query) ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <Sidebar />
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
            {editingItem && (
              <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="px-4 py-2 mr-2 rounded border"
                disabled
              />
            )}
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
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  }}
  className="px-4 py-2 mr-2 border"
/>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {editingItem ? "Perbarui Barang" : "Tambah Barang"}
            </button>
          </form>

          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 mb-4 rounded border"
          />

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
                {filteredItems.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className="border px-4 py-2">{item.name}</td>
                    <td className="border px-4 py-2">{item.description}</td>
                    <td className="border px-4 py-2">{item.price}</td>
                    <td className="border px-4 py-2">{item.stock}</td>
                    <td className="border px-4 py-2">
                      <img src={item.image} alt={item.name} className="h-10" />
                      <p>{item.imageName}</p>{" "}
                      {/* Tambahkan ini untuk menampilkan nama gambar */}
                    </td>

                    <td className="border px-4 py-2">
                      <button
                        onClick={() => editItem(item.id)}
                        className="mr-2 text-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="text-red-500"
                      >
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
};

export default App;
