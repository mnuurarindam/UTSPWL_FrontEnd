import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";

function Produk() {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/get/products");
        console.log("Response data:", response.data); 
        setProduk(response.data.produk);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

const handleEdit = (id) => {
    const productToEdit = produk.find((product) => product.id === id);
    console.log(`Editing product with id ${id}:`, productToEdit);
};

const handleDelete = async (id) => {
    try {
        const newProduk = produk.filter((product) => product.id !== id);
        setProduk(newProduk);
        await axios.delete(`/delete/product/${id}`);
        console.log(`Product with id ${id} has been deleted.`);
    } catch (error) {
        console.error("Error deleting product:", error);
    }
};


  return (
    <>
      <table className="user-login-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Gambar</th>
            <th>Nama Produk</th>
            <th>Harga</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {produk.map((produk, index) => (
            <tr key={index}>
              <td>{produk[0]}</td>
              <td>{produk[1]}</td>
              <td>{produk[2]}</td>
              <td>{produk[3]}</td>
              <td className="actions-column">
                <button className="edit" onClick={() => handleEdit(produk.id)}>
                  Edit
                </button>
                <button
                  className="delete"
                  onClick={() => handleDelete(produk.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Produk;
