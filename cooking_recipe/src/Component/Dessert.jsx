import React from "react";

const Dessert = ({ imageSrc, title }) => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div
        className="image-container"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <img
          alt={title}
          src={imageSrc}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        className="title"
        style={{
          marginTop: "20px",
          fontSize: "20px",
          color: "#6b4f4f",
          fontWeight: "500",
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default Dessert;
