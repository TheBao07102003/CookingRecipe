import React from "react";

const News = () => {
  return (
    <div
      className="news-container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FAF0DE",
      }}
    >
      <div
        className="header"
        style={{
          backgroundColor: "#FAF0DE",
          padding: "20px",
          textAlign: "center",
          borderBottom: "2px solid #593329",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "36px",
            color: "#8b4513",
          }}
        >
          CookCook News
        </h1>
      </div>
      <div
        className="date"
        style={{
          textAlign: "center",
          fontSize: "20px",
          margin: "10px 0",
          paddingBottom: "12px",
          color: "#8b4513",
          borderBottom: "2px solid #593329",
        }}
      >
        Daily Cooking News
      </div>
      <div
        className="content-container"
        style={{
          display: "flex",
          height: "100%",
          overflowY: "auto",
        }}
      >
        <div
          className="left-column"
          style={{
            width: "60%",
            borderRight: "2px solid #593329",
            padding: "20px",
          }}
        >
          <div
            className="news-item"
            style={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <img
              alt="A plate of plant-based seafood with various garnishes"
              height="200"
              src="https://s3-alpha-sig.figma.com/img/8c7c/5226/b63c00063525e0ab63d14b3a7519b4a8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cv~KQXEUcbp7SgDZWtxTUxId6bCruE4kTWkiNfW1tEBbrxppxH1n-DXOeVMN5xyO4FcXw9a5DOEecVJPyw7EJHX8yshHUdCuQ52NsKIsTGROQRHjy12YaFO6-Oq51ENuoGYkpB-R46TDDiIHK3m-CAYow6BJkq-NtMdOy9QhhBwbONI6cy-K4AClPpadRsWUcfksPPEudit7ajcyGiE0~WjFSfiYgukJwCnLjpLF4C9xyoZjQ-1z~pE03JdXJsFsHrCqQpQPyxjMjKZqE1FntjUqd7GsGIAVfSSfnvwK9-G8FRctSwa~dL1Yt1q1rYOArvxQZfhIyDMEgP6sw8XqNQ__"
              width="250"
              style={{ marginRight: "10px" }}
            />
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#8b4513",
                  margin: 0,
                }}
              >
                1. Food Trends: Plant-Based Seafood Takes Center Stage
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                As sustainability continues to rise in importance, plant-based
                seafood is gaining momentum. Companies like Good Catch and New
                Wave Foods are innovating with plant-based tuna, shrimp, and
                crab, offering consumers eco-friendly alternatives. Expect to
                see these products appear on more restaurant menus and grocery
                store shelves as culinary chefs experiment with textures and
                flavors that mimic the ocean's bounty.
              </p>
            </div>
          </div>
          <div
            className="news-item"
            style={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <img
              alt="A person preparing sourdough bread at home"
              height="200"
              src="https://s3-alpha-sig.figma.com/img/3db0/da1e/c61c441e049df3c3d5f1b54af85cb2ea?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xcb0P-abxA0X4D-~msEyxUHYbh2tR6b3XC4iba2GZ4ahB8VTXHXJW~yKcXKiKxBQU0qdm9oua1PxSfa7~LFqp9ekbPv2I3iJT-1Sl0cDCEmq9jZHm~VVYLzw7qJCod2bhxAOUmMfmbuMNrwmhg6gRKvg93JXjfjKfch4xjoT8u6-V1QcmwoV9SRDv633n7-bdS~DdO93BXzoUyJlJCu4~A4A6Gu6hS3NxUuO6PG9vy-5HeG3Xq4p0F2FtDUGYBcM1gxsif5-L0q-c0d3ukUDnr6HwZAuyMn4U06j~xlkqR0989f4r6hfmCKvPGZ4AK2QLYY7S-sEP2aEy56HJtblhw__"
              width="250"
              style={{ marginRight: "10px" }}
            />
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#8b4513",
                  margin: 0,
                }}
              >
                2. Mastering the Art of Sourdough at Home
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                Sourdough bread, beloved for its tangy flavor and chewy texture,
                has never been more popular. Today, artisanal bakers are sharing
                their best tips on social media for creating the perfect
                sourdough loaf from scratch. Some key advice includes the
                importance of choosing the right flour and maintaining the
                perfect temperature for fermentation. If you're looking to step
                up your sourdough game, now's the time to dive into the world of
                wild yeast and slow fermentation.
              </p>
            </div>
          </div>
          <div
            className="news-item"
            style={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <img
              alt="Various jars of fermented foods and spices"
              height="200"
              src="https://s3-alpha-sig.figma.com/img/5a66/aba3/24be5a1d87cf2123d2f2f25c5258eb39?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U1AgV-FvgD1A0IvYHkiiCi2HJ~-iHPT8v5R8RQnttwtUR0PGNdBFWA8JR3~Q6sPjSEyU-OAPzOMbg0h0rD2Bzhge9l8KmRRKteIGSA~JzEXPBLRiKGSu0nZ5lEf6zXtpKtXpjJHM94aESqxjeVZCvmA6GYdVZ5d~0AUT1N00L3P34S6lYlJw4YFUgzx5y-hITPv6TdJo8bRXlvUElQUx1AuN-CHQbGiU-Xm4W3xT7sakxFjzZkHoUbmXpaVOzVPFJfI3WDQ~bOIaWn6z2gJiooFYsb92P1BB-y61UvlWXZvgCOsYEKoj9n6xiMyoIYwzfoJZ8pLnK4lvUnpch43ucA__"
              width="250"
              style={{ marginRight: "10px" }}
            />
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#8b4513",
                  margin: 0,
                }}
              >
                3. Why Fermentation is the Secret to Deep, Complex Flavors
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                Fermentation continues to be a key technique in elevating
                flavors, whether you're making kimchi, miso, or homemade
                pickles. Experts believe fermentation not only adds complexity
                and depth to food, but it also helps enhance gut health. The
                trend is making its way into more home kitchens, with even
                novice cooks experimenting with different fermentation
                techniques to create unique and flavorful dishes.
              </p>
            </div>
          </div>
        </div>
        <div
          className="right-column"
          style={{
            width: "40%",
            padding: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              color: "#8b4513",
              margin: "0 0 20px 0",
            }}
          >
            Food Combinations to Avoid: Ingredients That Don't Pair Well and
            Their Effects
          </h2>
          <div
            className="food-combination"
            style={{
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#8b4513",
                margin: 0,
              }}
            >
              1. Milk and Citrus Fruits (Lemon, Orange, Grapefruit)
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Effect:</strong> Combining milk with acidic fruits like
              lemon or orange can cause the milk to curdle, leading to
              indigestion, bloating, and stomach discomfort.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Why:</strong> The acid in citrus fruits lowers the pH of
              milk, causing the protein casein to coagulate and making it harder
              for your body to digest.
            </p>
          </div>
          <div
            className="food-combination"
            style={{
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#8b4513",
                margin: 0,
              }}
            >
              2. Peanuts and Milk
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Effect:</strong> Mixing peanuts with milk can cause
              digestive distress, including bloating and indigestion.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Why:</strong> The proteins in peanuts and milk may
              interact in a way that slows digestion, leading to discomfort in
              the stomach.
            </p>
          </div>
          <div
            className="food-combination"
            style={{
              marginBottom: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                color: "#8b4513",
                margin: 0,
              }}
            >
              3. Meat and Potatoes
            </h3>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Effect:</strong> While this is a classic pairing, eating
              meat and potatoes together can sometimes lead to digestive
              discomfort, especially when consumed in large portions.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#333",
              }}
            >
              <strong>Why:</strong> Meat takes longer to digest due to its
              protein content, while potatoes (starch) digest faster. The body
              may struggle to process both at the same time, leading to feelings
              of heaviness and indigestion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
