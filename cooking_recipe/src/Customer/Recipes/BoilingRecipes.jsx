import React from "react";
import "./BoilingRecipes.css"; // Import styles

const BoilingRecipes = () => {
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
    <div className="boiling-recipes-container">
      <h1
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/22d6/bf0a/b4ff2e8a201d0d38f8f61bb1131df2f1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QWGBfZBKomRlB5iVacdKnIdEO2R2McdTqRjXHaYTIb0c9lWirgsSQ6gJS5byIY8~sAZ6Vf7GVJRUiHmtElSUoGFoWHIawEEpc87vA0rNsmYDolP-aGoDuTvE2F9wANP2PtsIH1AiIFOjYc4jpkqCzh937Rmvp42JUD5g5C7YNWPJUlTvRipTAlZJQ6Xv4gtII09NzWKh5bMNMFseneAqVlwsAu-ANS2VtZuy2ewsBmdZdlqXZM194sMLtl75pqD9WweYy6ZGRuTDOBBIi8K2Lfw0t~kMI1eD86lp6nC4Sx9yTYfiAe9fti1XufKyAx4t-YeoYp9cu4mvHT70yJJcZw__)",
            filter: 'blur(4px)',
          padding: "150px",
        }}
      > 
      </h1>
      <p style={{
        position: 'absolute',
        top: '160px',
        left: '46%',
        fontWeight: '600',
        fontSize: '60px',
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
      }}>Boiling</p>
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

export default BoilingRecipes;
