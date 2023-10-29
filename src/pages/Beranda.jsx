import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import "../index.css"; // Import file CSS kustom


function Beranda() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://images.wallpaperscraft.com/image/single/mercedesbenz_sclass_w222_112850_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/nissan_auto_black_87159_1280x720.jpg",
    "https://images.wallpaperscraft.com/image/single/bmw_i8_white_105881_1280x720.jpg",
    "https://libertywalk.co.jp/wp-content/uploads/2023/09/370485971_18380075542006105_5982892675257902614_n.jpg",
    "https://libertywalk.co.jp/wp-content/uploads/2023/03/Liberty-walk-world-gallery-2023-300010.jpg",
    "https://libertywalk.co.jp/wp-content/uploads/2023/03/Liberty-walk-world-gallery-2023-300012.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Ganti slide setiap 3 detik
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => {
      // Membersihkan interval setelah komponen tidak lagi digunakan
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="slider-container form-layout">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
        <div
          className="arrow left"
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === 0 ? slides.length - 1 : prevSlide - 1
            )
          }
        >
          <span>&#9664;</span>
        </div>
        <div
          className="arrow right"
          onClick={() =>
            setCurrentSlide((prevSlide) =>
              prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            )
          }
        >
          <span>&#9654;</span>
        </div>
      </div>
      <div className="centered-content">
        <h1>LibertyWalk</h1>
      </div>
      {/* <!-- Header--> */}
      <header className="bg-dark bg-gradient  py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">
              Shop Cars Hotwheels LibertyWalk in style
            </h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompeage Cars Hotwheels LibertyWalk
            </p>
          </div>
        </div>
      </header>
      <Content />
      <Footer />
    </>
  );
}

export default Beranda;
