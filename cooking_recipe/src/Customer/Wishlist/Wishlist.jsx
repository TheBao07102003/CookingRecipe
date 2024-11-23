import React, { useState } from "react";

function Wishlist() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Bún Bò",
      image:
        "https://s3-alpha-sig.figma.com/img/c380/6af0/1e21d74348f6f19364402f698ccb3da8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bXs~nuF~dmJSXD~hiLfrdahdpCWZIR7ae~b9KTkEQphQqfd5Bn9Uq7hPDS~t8WmiBN~xDqQHN9YRh5NWkMUikMl1DGGHcImGx9a6U0EcqHypzlaT7QHt0kCXOHJVmmelnfF2SLwwF7iMinzk67k0CLQkZPj~jxyrwPYM3QX8s6xLj3f6Egp7dqJShcCiumlekhbShLrDGFEJPg9qfKbI6PmJPLk6yUGPnmYvx1VxsgtV0yt8GlCAjQK9BpO10kol58Geay1DT8OMKLJFCG1OBPqqewQTlhAqn~g4ISio-a-6ocQSGCnEF9L71zb5A2xLla47W9Y7tV1rHZ7X90Jlgg__",
    },
    {
      id: 2,
      title: "Phở",
      image:
        "https://s3-alpha-sig.figma.com/img/29b2/9e76/a35ce27edcbba0902f6b1e1f5afc8604?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=naBaXRipCmPha9asw7GzKxgLR4R6eyTfnQcBq8wkr6TzbZDzTlHHJY~kIRbbU5rkcXlJzlDQaxUIwDzcTJwMtBVDBCl09ak0Q~qfoo0Xd6S-CTXGnf0KQ~tIO~JbjVzTJ3zPCDrsqTghwKmQ1v2OeopcQ75ZQI9ZzStAS0Ss-bpQHtNL-Ysu9kD~se1f35iB1XPEGZk-R5-VG5kf5GpdyyTkzRvJi30XiBECnVBFTG-QvC33BRVp6i92YnQIakE39cE410CN9LFxhkcXqWyVQeKWMMBU-J26I7tMQZbIpwXR5E4MruTnvx0ZAIOF9DGPZ-vYIZKjRpsXDlZg18DoCA__",
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
      image:
        "https://s3-alpha-sig.figma.com/img/c4cf/167c/92570d00300e8c35cdfc657fda9b34da?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XXHRH47ee6p2eKuq8cj0c39Ubecjue8kCq50nA50zZXZs3k0keY6awXcjiq3cmRoAaX-sYzjk4VP6Q5NJ65pkbh2SxIiRtyTo4KaJgoTQ4HYXbOnFht8wKnfLQBKNiKEAvNbPhl3hAIWBVw-oL0kbWyTvtwL77lcfHgZNMC4RhFUwEHIsXoOscgte1lV4HKehLHgWxpJLJfA4L~mQWqwJ4NSEdK3Bu-Et1XWWlaVcj7bWmkiqF0~90ntpP-ikoQ1gv9tJzKRCcLeU0VYpmeZ6-RN22-DhwkRDT1jc9tUxBf5Oq2ScMvVHyJ3vxFX0ODlYrxMM5rcQztvmiMRtxXJdw__",
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
        backgroundImage:
          "url(https://s3-alpha-sig.figma.com/img/a874/bd94/0df7bdab581529ae84a5b1f805f7dfb0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O1m6mPEaQaZUMWZ7WYnXfiUwRhJm4LHtzVPheXjPsytKGP1em7mFk5twIowMVnKQt5cD73lSrrI6BktMbSWC0QoTmhg6JmPvUSMEzmlqwcrRlJOUgQTHp074pGFv-UMvrS~N3N4msc-SBezEo09MveNHKHaDOMkSz1g4ZWXIzGgUvi4zxBgm8hezqvazGqye4nLUIDEkdqxI7aWLTmcvnTbqFwWwPKgR5zWTmhPCuVnWwm0aFJSInLGYGPkjZERQBdC2Wwcj05hFyKb7NWEBCoCXoqqr5i2lJ31RBMvuIlkVY7PM7yxje3bhUrztHriCXze0SOB~BMkcZGSA~ttOmw__)",
        height: "auto",
        width: "1479px",
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
          gap: "10px", // Khoảng cách giữa các card
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
                width: "200px",
                height: "200px",
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