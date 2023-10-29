import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../index.css"; // Import file CSS kustom

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Tambahkan logika autentikasi di sini
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <Navbar />
      <div className="slider-container form-layout">
        <div className="login-wrapper">
          <div className="login-card ">
            <div className="centered-content">
              <h1>LibertyWalk Login</h1>
            </div>
            <form>
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
              <button onClick={handleLogin}>Login</button>
              <p className="form-register">
                Belum punya akun? <a href="/register">Register</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
