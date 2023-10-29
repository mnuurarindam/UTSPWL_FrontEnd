import axios from "axios";
import React, { useEffect, useState } from "react";
import "../index.css";

function UserLogin() {
  const [user_login, setUserLogin] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/get/user_login");
        console.log("User data:", response.data);
        setUsers(response.data.users);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCreateUser = async () => {
    try {
      const response = await axios.post("/add/user_login", newUser);
      console.log("User has been created:", response.data);
      setUsers([...users, response.data.user]);
      setNewUser({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleEditUser = (id) => {
    const userToEdit = users.find((user) => user.id === id);
    console.log(`Editing user with id ${id}:`, userToEdit);
  };

  const handleDeleteUser = async (id) => {
    try {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
      await axios.delete(`/delete/user_login/${id}`);
      console.log(`User with id ${id} has been deleted.`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <table className="user-login-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
            <th className="actions-column">Actions</th>
          </tr>
        </thead>
        <tbody>
          {user_login.map((produk, index) => (
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

export default UserLogin;
