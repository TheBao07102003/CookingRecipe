import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Wishlist() {
  const userId = 2; // Giả lập userId
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch wishlist data from API
  useEffect(() => {
    const fetchWishlist = async () => {
      if (!userId) {
        setError("User ID is required");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`/api/wishlist/${userId}`);
        setCards(response.data); // Giả sử API trả về dữ liệu gồm wishlistId, foodId, name, và image
      } catch (err) {
        setError("Failed to load wishlist");
      } finally {
        setLoading(false);
      }
    };

    fetchWishlist();
  }, [userId]);

  // Handle item deletion by wishlistId
  const handleDelete = async (wishlistId) => {
    try {
      // Gửi yêu cầu xóa món ăn theo wishlistId và userId
      const response = await axios.delete(
        `/api/wishlist/${userId}/${wishlistId}`
      );

      if (response.status === 200) {
        // Cập nhật lại danh sách món ăn trong state sau khi xóa
        setCards((prevCards) =>
          prevCards.filter((card) => card.wishlistId !== wishlistId)
        );
      } else {
        setError("Failed to delete item from wishlist");
      }
    } catch (err) {
      // Kiểm tra lỗi chi tiết từ phản hồi API
      if (err.response) {
        setError(
          `Error: ${err.response.data.message || err.response.statusText}`
        );
      } else if (err.request) {
        setError("Error: No response from server");
      } else {
        setError(`Error: ${err.message}`);
      }
    }
  };

  // Nếu đang tải dữ liệu
  if (loading) {
    return <div>Loading...</div>;
  }

  // Nếu có lỗi khi tải dữ liệu
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        backgroundImage: "url(/images/backgroundWishlist.png)",
        width: "100%",
        height: "600vh",
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
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
          justifyItems: "center",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.wishlistId} // Dùng wishlistId làm key
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
                src={card.image}
                alt={card.name}
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
              {card.name}
            </p>
            <button
              onClick={() => handleDelete(card.wishlistId)} // Chỉ truyền wishlistId khi xóa
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
            {/* Tạo liên kết đến trang CookingMethod với foodId */}
            <Link
              to={`/cookingmethod/${card.foodId}`}
              style={{
                color: "#FFAB40",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              View Cooking Method
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
