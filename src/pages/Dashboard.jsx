import React from "react";
import "../index.css"; 
import UserRegis from "../components/UserRegis";
import UserLogin from "../components/UserLogin";
import Produk from "../components/Produk";

function Dashboard() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            {/* Sidebar */}
            <nav
              id="sidebar"
              className="col-md-3 col-lg-2 d-md-block bg-ight sidebar"
            >
              <div className="position-sticky">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="/userlogin">
                      User
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="produk">
                      Produk
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Main Content */}
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <h1>Table User Registrasi</h1>
              <UserRegis />
              <h1>Table User Login</h1>
              <UserLogin />
              <h1>Table Produk</h1>
              <Produk />
            </main>
          </div>
        </div>
      </>
    );
}


export default Dashboard;