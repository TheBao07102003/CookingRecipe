import React from "react";
import "./Opening.css"; // Import CSS
import openingBg from "../../assets/images/opening-bg.png"; // Import hình nền
import logo from "../../assets/images/logo.png"; // Import logo
import Button from "../../Component/Button/Button"; // Import component Button

const Opening = () => {
  return (
    <div className="opening-page">
      {/* Container */}
      <div className="container">
        {/* Phần bên trái */}
        <div className="left-section">
          <h1 className="welcome-text">Welcome to CookCook!</h1>
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" />
            <span className="cookcook-text">CookCook</span>
          </div>
          <div className="buttons">
            <Button label="Log In" style={{ width: 359, height: 44 }} />
            <Button label="Sign Up" style={{ width: 359, height: 44 }} />
          </div>
        </div>

        {/* Phần bên phải */}
        <div className="right-section">
          <img src={openingBg} alt="Background" className="opening-bg" />
        </div>
      </div>
    </div>
  );
};

export default Opening;
