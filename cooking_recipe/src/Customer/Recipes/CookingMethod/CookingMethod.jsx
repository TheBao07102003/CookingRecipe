import React from "react";
import AddTo from "../../../assets/images/AddToWishlist.jpg";
import Logo from "../../../assets/images/logo.png";

function CookingMethod() {
  return (
    <div>
      <div
        style={{
          width: "97.3%",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/af93/c7a7/6b2da8cb053bbca3ea6f7f389783cc38?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f8ZOh3fVLulv-Mo7X49kvc3uIAMGt3Mb4oAoHeT~lwc9DpCjxikmJ7Nap08gDJ0WfnZuNlXI9r6LtuLOLSaJHfkJCfn3i8nMCUwjPcvDSP6mezVl~NuBAEtOqLLYiNRRw9TZMfx4qWihuhs~x3IjFn9TYBaAMgwAmQawRxWq0SAiDnkiN1wHI-focNg4c~2sANUNr6MmADzfRN4aGL3ZJqcAnH8yQH1x5kCUO5QgxGegjOB5wk-U~YEzql~tKHp7TOfihLoS8Fl~fcm-pW9U9ZsqBrRVxHvEhm6n8r4DUNIANGQbURFBglwZ4GB7BuVjJThg4nhV8MVgOBtKH4UP8Q__)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "30%",
            }}
          >
            <img
              alt="Bowl of Bún Bò Huế"
              height="150"
              src="/images/bun-bo.png"
              width="150"
              style={{ borderRadius: "50%" }}
            />
            <h1 style={{ fontSize: "2em", margin: "10px 0", color: "White" }}>
              Bun Bo
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
                color: "White",
                flexDirection: "column",
                padding: "35px 50px 35px 50px",
                backgroundColor: "#593329",
                borderRadius: "15px",
              }}
            >
              <span>Rating: 59/165 users</span>

              <span style={{ margin: "20px auto 0 auto", fontSize: "1em" }}>
                <strong>4/5 cookies</strong>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <img
                src={AddTo}
                alt="AddTo"
                style={{ borderRadius: "40px", cursor: "pointer" }}
              />
            </div>
          </div>
          <div style={{ width: "65%" }}>
            <div
              style={{
                backgroundColor: "#fdf5e6",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <h2
                style={{ fontSize: "1.5em", marginTop: "0", color: "#593329" }}
              >
                Bún Bò Huế (Vietnamese Spicy Beef Noodle Soup)
              </h2>
              <p
                style={{ fontSize: "1em", lineHeight: "1.5", color: "#593329" }}
              >
                Bún Bò Huế is a flavorful and aromatic Vietnamese dish from Huế
                that's known for its complex broth, spicy kick, and tender beef.
                The soup is typically served with rice noodles, beef shank, and
                sometimes pork. It's rich, fragrant, and a bit spicy—definitely
                a dish to enjoy on a cool day.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#fdf5e6",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "20px",
                color: "#593329",
              }}
            >
              <h2 style={{ fontSize: "1.5em", marginTop: "0" }}>Ingredients</h2>
              <ul style={{ listStyleType: "none", padding: "0" }}>
                <li style={{ fontSize: "1em", lineHeight: "1.5" }}>
                  500g beef (shank or brisket)
                </li>
                <li style={{ fontSize: "1em", lineHeight: "1.5" }}>
                  500g pork bones (optional)
                </li>
                <li style={{ fontSize: "1em", lineHeight: "1.5" }}>
                  1 onion, peeled
                </li>
                <li style={{ fontSize: "1em", lineHeight: "1.5" }}>
                  4-5 lemongrass stalks (bruised)
                </li>
                <li style={{ fontSize: "1em", lineHeight: "1.5" }}>
                  2-3 cloves garlic, smashed
                </li>
                <li style={{ fontSize: "1em", lineHeight: "1.5" }}>
                  1 thumb-sized piece of ginger, sliced
                </li>
                <li style={{ fontSize: "1em", lineHeight: "1.5" }}>
                  Fish sauce, shrimp paste (optional), sugar, chili paste (to
                  taste)
                </li>
                <li style={{ fontSize: "1em", lineHeight: "1.5" }}>
                  1 pack rice noodles (Bún noodles)
                </li>
                <li style={{ fontSize: "1em", lineHeight: "1.5" }}>
                  Fresh herbs, lime, bean sprouts (optional)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#593329",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Logo} alt="LOGO" style={{ marginRight: "5%" }} />
          <div
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            Step-by-step Recipe
          </div>
        </div>

        <div style={{ width: "70%", margin: "auto", color: "white" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            <div style={{ fontSize: "18px", textAlign: "left" }}>
              Make the broth: Blanch beef and pork bones in boiling water for
              5-10 minutes, then discard water. Add meat, water, lemongrass,
              onion, and ginger to a pot. Simmer for 1.5-2 hours.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            <div style={{ fontSize: "18px", textAlign: "left" }}>
              Season the broth: Add fish sauce, shrimp paste (optional), sugar,
              and chili paste/oil. Simmer for another 20-30 minutes. Taste and
              adjust seasoning.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            <div style={{ fontSize: "18px", textAlign: "left" }}>
              Cook noodles: Boil rice noodles according to package instructions.
              Drain and rinse.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            <div style={{ fontSize: "18px", textAlign: "left" }}>
              Assemble the bowl: Slice the cooked beef. Place noodles in a bowl,
              top with sliced beef, and pour broth over it.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "20px",
            }}
          >
            <div style={{ fontSize: "18px", textAlign: "left" }}>
              Garnish: Add fresh herbs, lime, and optional bean sprouts.
            </div>
          </div>
          <div
            style={{ fontSize: "18px", color: "#F4C95D", marginTop: "20px" }}
          >
            Now, you have a full guide to making Bún Bò Huế at home. It’s a dish
            that takes a bit of time and effort, but the result is absolutely
            worth it. Enjoy the rich, spicy, and aromatic flavors of this
            Vietnamese classic!
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookingMethod;
