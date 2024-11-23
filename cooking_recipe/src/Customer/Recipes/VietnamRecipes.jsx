import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import "./VietnamRecipes.css"; // Import styles

const VietnamRecipes = () => {
  const navigate = useNavigate(); // React Router hook to navigate

  const recipes = [
    {
      name: "Bun Bo",
      description:
        "A spicy beef noodle soup from Hue, featuring thick rice noodles, beef, and aromatic herbs, often garnished with lime and fresh vegetables.",
      level: "Medium",
      time: "2-3 hours",
      ingredients: 9,
      image: "/images/bun-bo.png", // Replace with actual path
      icon: "/images/dish-icon.svg", // Replace with the SVG icon path
    },
    {
      name: "Pho",
      description:
        "A fragrant noodle soup made with beef or chicken, herbs, and rice noodles, typically served with lime and fresh herbs.",
      level: "Medium",
      time: "2-3 hours",
      ingredients: 8,
      image: "/images/pho.png", // Replace with actual path
      icon: "/images/dish-icon.svg",
    },
    {
      name: "Spring Rolls",
      description:
        "Fresh spring rolls filled with shrimp, herbs, rice vermicelli, and lettuce, served with a peanut or hoisin dipping sauce.",
      level: "Easy",
      time: "30 minutes",
      ingredients: 6,
      image: "/images/spring-rolls.png", // Replace with actual path
      icon: "/images/dish-icon.svg",
    },
    {
      name: "Banh Canh Cua",
      description:
        "Thick tapioca noodles in a rich broth, typically served with shrimp, crab, or pork.",
      level: "Medium",
      time: "1 hour",
      ingredients: 3,
      image: "/images/banh-canh-cua.png", // Replace with actual path
      icon: "/images/dish-icon.svg",
    },
    {
      name: "Fry Spring Rolls",
      description:
        "Vietnamese fried spring rolls filled with ground pork, mushrooms, and vegetables, often served with lettuce for wrapping.",
      level: "Easy",
      time: "30 minutes",
      ingredients: 5,
      image: "/images/fry-spring-rolls.png", // Replace with actual path
      icon: "/images/dish-icon.svg",
    },
  ];

  const handleRecipeClick = (recipeName) => {
    // Redirect to the CookingMethod page for the clicked recipe
    navigate(`/CookingMethod/${recipeName}`);
  };

  return (
    <div className="vietnam-recipes-container">
      <h1
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/4cf4/c0cc/a74c15f7e69af68fe3f72b9e4a34ff1e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FUYTQppUCAyxitY38UNxKwgb66NqElMGs-H2~DfUM8L8ekpggkQqry3QyL6Lz5ju8pUV1657eQ90QG41yaJLRsE92Cvkp198hI-PXe5~Jc-m7UROSCq4GGodIqOeIt0yGNTWg6o2GT-U9V3650CDPs9F-SlpQshGAIog4bfDXiQaGQs8~Dg9H9DXTxJzT9rDWEU2zUbFgrBhLH7w4g~HERN8zitX2qoJRyWbufoRP81vJr10aaT6BgVq9UTRZZ-XMIU4A8G8wuIYIZ0tCNhP6IGodkyru3aMM-SMGZ8hHXEQQ-gYmHAlWcyglyHOQouWQrqF~vZbQM-qZ9vMHTArWA__)",
          filter: "blur(4px)",
          padding: "150px",
        }}
        aria-label="Vietnam Recipes Background"
      >
        {/* Add accessible fallback text */}
      </h1>
      <p
        style={{
          position: "absolute",
          top: "160px",
          left: "46%",
          fontWeight: "600",
          fontSize: "60px",
          color: "white",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Vietnam
      </p>
      <div
        style={{
          marginTop: "100px",
        }}
      >
        <div className="recipes-list">
          {recipes.map((recipe, index) => (
            <div
              className="recipe-card"
              key={index}
              onClick={() => handleRecipeClick(recipe.name)}
            >
              <div className="recipe-image-container">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="recipe-image"
                />
                <h3 className="recipe-name">{recipe.name}</h3>
              </div>
              <div className="recipe-info">
                <p>{recipe.description}</p>
                <p>
                  <strong>Level:</strong> {recipe.level}
                </p>
                <p>
                  <strong>Time:</strong> {recipe.time}
                </p>
                <p>
                  <strong>Ingredients to Prepare:</strong> {recipe.ingredients}
                </p>
                <img
                  src={recipe.icon}
                  alt="Dish Icon"
                  className="recipe-icon"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VietnamRecipes;
