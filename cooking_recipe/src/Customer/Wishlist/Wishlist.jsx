import React, { useState, useEffect } from "react";
import axios from "axios";

function Wishlist() {
  const [cards, setCards] = useState([]); // Start with an empty list of cards
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch wishlist for fake userId (1)
    const fetchWishlist = async () => {
      try {
        const response = await axios.get("/api/wishlist/1"); // Replace with actual API URL
        setCards(response.data); // Assuming the API returns an array of food items
      } catch (err) {
        setError("Failed to load wishlist");
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, []);

  // Handle deleting the food item
  const handleDelete = (foodId) => {
    setCards((prevCards) => prevCards.filter((card) => card.foodId !== foodId)); // Filter out the card by foodId
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        backgroundImage: "url(/images/backgroundWishlist.png)",
        width: "100%",
        height: "auto",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 38,
          border: "1px solid #593329",
          width: "50%",
          margin: "20px auto 20px auto",
          textAlign: "center",
          marginBottom: "20px",
          background: "#593329",
          borderRadius: "25px",
          fontWeight: "800",
        }}
      >
        Your Loved-list Cooking
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
          gap: "15px", // Space between cards
          justifyItems: "center",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.foodId} // Use foodId as unique identifier
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
              width: "200px",
            }}
          >
            <div
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(45deg, #F06292, #FFAB40)",
                padding: "1px",
              }}
            >
              <img
                src={card.image} // Assuming 'image' is a property from your API
                alt={card.name} // Assuming 'name' is a property from your API
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "700",
                color: "white",
                marginTop: "10px",
              }}
            >
              {card.name} {/* Display food name */}
            </p>
            <button
              onClick={() => handleDelete(card.foodId)} // Pass the correct foodId to handleDelete
              style={{
                position: "absolute",
                top: "5px",
                right: "5px",
                background: "rgba(0, 0, 0, 0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
