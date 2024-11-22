import React from "react";
import "./GlutenFreeRecipes.css"; // Import styles

const GlutenFreeRecipes = () => {
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

  return (
    <div className="glutenfree-recipes-container">
      <h1
        style={{
          backgroundImage:
            "url(https://post.healthline.com/wp-content/uploads/2019/12/bread-varieties-group-still-life-1296x728-header-1296x728.jpg)",
            filter: 'blur(4px)',
          padding: "150px",
        }}
      > 
      </h1>
      <p style={{
        position: 'absolute',
        top: '160px',
        left: '45%',
        fontWeight: '600',
        fontSize: '60px',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
      }}>Gluten-Free</p>
      <div
      style={{
        marginTop: '100px',
      }}>
        {" "}
        <div className="recipes-list">
          {recipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
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

export default GlutenFreeRecipes;
