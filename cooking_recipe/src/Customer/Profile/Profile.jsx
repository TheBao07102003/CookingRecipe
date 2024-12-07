import React from "react";
import {
  FaUser,
  FaIdBadge,
  FaEnvelope,
  FaLock,
  FaChevronRight,
} from "react-icons/fa";

const Profile = ({ onClose, onChangePasswordClick }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose} // Đóng modal khi click ra ngoài
    >
      <div
        className="profile-card"
        style={{
          backgroundColor: "#fff4e6",
          borderRadius: "15px",
          padding: "20px",
          width: "300px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
        onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click ra ngoài khi click vào modal
      >
        {/* Avatar */}
        <img
          alt="Profile Avatar"
          src="https://storage.googleapis.com/a1aa/image/rTOHk2aB9JpecytxDeh8yJL6IIJL7CzXRBTfsfIG4evdb0DfE.jpg"
          style={{
            borderRadius: "50%",
            width: "100px",
            height: "100px",
            marginBottom: "15px",
          }}
        />

        {/* User Title */}
        <h3 style={{ fontWeight: "700", color: "#333", marginBottom: "20px" }}>
          USER PROFILE
        </h3>

        {/* User Info */}
        <div
          className="info-item"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>
            <FaUser style={{ marginRight: "8px" }} />
            Name
          </span>
          <span
            style={{
              fontWeight: "500",
              color: "#333",
            }}
          >
            Dinh Hoang Thao Nguyen
          </span>
        </div>
        <div
          className="info-item"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <span>
            <FaIdBadge style={{ marginRight: "8px" }} />
            ID
          </span>
          <span
            style={{
              fontWeight: "500",
              color: "#333",
            }}
          >
            A0001
          </span>
        </div>
        <div
          className="info-item"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span>
            <FaEnvelope style={{ marginRight: "8px" }} />
            Email
          </span>
          <span
            style={{
              fontWeight: "500",
              color: "#333",
            }}
          >
            thaonguyen@gmail.com
          </span>
        </div>

        {/* Privacy Section */}
        <h4
          style={{
            fontWeight: "700",
            color: "#333",
            textAlign: "left",
            marginBottom: "10px",
            fontSize: "14px",
          }}
        >
          PRIVACY
        </h4>

        {/* Change Password Button */}
        <button
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#d87d4a",
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "10px 0",
            marginBottom: "10px",
          }}
          onClick={onChangePasswordClick}
        >
          <span style={{ display: "flex", alignItems: "center" }}>
            <FaLock style={{ marginRight: "8px" }} />
            Change Password
          </span>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Profile;
