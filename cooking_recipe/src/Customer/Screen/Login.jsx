import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css"; // Import CSS
import openingBg from "../../assets/images/opening-bg.png"; // Import hình nền
import logo from "../../assets/images/logo.png"; // Import logo
import Button from "../../Component/Button/Button"; // Import component Button

const Login = () => {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleSignUp = () => {
    navigate("/Signup"); // Chuyển hướng tới trang Sign Up
  };

  return (
    <div className="login-page">
      {/* Container */}
      <div className="container">
        {/* Phần bên trái */}
        <div className="left-section">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" />
            <span className="login-text">Log In</span>
          </div>

          {/* Email Field */}
          <div className="input-container">
            <label className="input-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />
          </div>

          {/* Password Field */}
          <div className="input-container">
            <label className="input-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
            />
            {/* Icon show/hide password */}
          </div>

          {/* Forgot Password */}
          <div className="forgot-password">
            <span>Forgot password?</span>
          </div>

          {/* Log In Button */}
          <div className="buttons">
            <Button label="Log In" style={{ width: 359, height: 44 }} />
          </div>

          {/* Sign Up Link */}
          <div className="sign-up-prompt" style={{ margin: "10px 0 0 10px" }}>
            <span>Don't have an account? </span>
            <span
              className="sign-up-link"
              onClick={handleSignUp} // Thêm onClick để chuyển hướng
              style={{ color: "#FFC86E", cursor: "pointer" }}
            >
              Sign Up
            </span>
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

export default Login;
