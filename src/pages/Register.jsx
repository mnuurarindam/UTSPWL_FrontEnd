import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css"; // Import file CSS kustom

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // Tambahkan logika pendaftaran di sini
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Navbar />
      <div className="slider-container form-layout">
        <div className="login-wrapper">
          <div className="login-card">
            <div className="centered-content">
              <h1>Register</h1>
            </div>
            <form>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button onClick={handleRegister}>Register</button>
            </form>
            <p className="form-register">
              Sudah punya akun? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
