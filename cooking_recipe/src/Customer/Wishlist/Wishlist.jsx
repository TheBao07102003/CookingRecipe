import React, { useState } from "react";

function Wishlist() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Bún Bò",
      image: "/images/bun-bo.png",
    },
    {
      id: 2,
      title: "Phở",
      image: "/images/pho.png",
    },
    {
      id: 3,
      title: "Mì Quảng",
      image:
        "https://afamilycdn.com/150157425591193600/2022/10/7/anh-kaitulsa-16651052232491763466659-1665131308404-16651313085701494418891.jpg",
    },
    {
      id: 4,
      title: "Bánh Canh",
      image: "/images/banh-canh-cua.png",
    },
    {
      id: 5,
      title: "Hủ Tiếu",
      image:
        "https://cdn.tgdd.vn/2020/07/CookProductThumb/Untitled-1-620x620-181.jpg",
    },
    {
      id: 6,
      title: "Bánh Xèo",
      image:
        "https://ik.imagekit.io/tvlk/blog/2022/08/banh-xeo-dac-san-o-dau-3.jpeg?tr=c-at_max?tr=c-at_max",
    },
    {
      id: 7,
      title: "Bánh Cuốn",
      image:
        "https://cdn.buffetposeidon.com/app/media/Kham-pha-am-thuc/11.2023/241123-banh-cuon-buffet-poseidon-4.jpg",
    },
    {
      id: 8,
      title: "Bánh Mì",
      image: "https://cdn.tgdd.vn/2020/10/CookProduct/0.-1200x674.jpg",
    },
    {
      id: 9,
      title: "Bún Thịt Nướng",
      image:
        "https://static.vinwonders.com/production/bun-thit-nuong-ha-noi-1.jpg",
    },
  ]);

  // Hàm xóa card
  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id)); // Lọc và loại bỏ card theo id
  };

  return (
    <div
      style={{
        backgroundImage: "url(/images/backgroundWishlist.png)",
        height: "auto",
        width: "97.35%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: 38,
          border: "1px solid #593329",
          width: "50%",
          margin: "auto",
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
          gridTemplateColumns: "repeat(4, 1fr)", // 4 cột cố định
          gap: "15px", // Khoảng cách giữa các card
          justifyItems: "center",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
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
                alt={card.title}
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
              {card.title}
            </p>
            <button
              onClick={() => handleDelete(card.id)}
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
