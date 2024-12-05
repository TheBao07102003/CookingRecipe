import React, { useState, useEffect } from "react";
import AddTo from "../../../assets/images/AddToWishlist.jpg";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function CookingMethod() {
  const { recipeId } = useParams(); // Lấy ID từ URL
  const [methodData, setMethodData] = useState(null);
  const navigate = useNavigate();
  const [steps, setSteps] = useState([]); // New state for steps
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cooking method data
  useEffect(() => {
    const fetchMethodData = async () => {
      try {
        const response = await axios.get(`/api/cookingmethod/${recipeId}`);
        setMethodData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMethodData();
  }, [recipeId]); // Only fetch when recipeId changes

  // Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/api/comment/food/${recipeId}`);
        if (response.data && response.data.length > 0) {
          setComments(response.data);
        } else {
          setComments([]);
        }
      } catch (err) {
        console.error("Error fetching comments:", err);
        setComments([]);
      }
    };

    fetchComments();
  }, [recipeId]);

  // Fetch step-by-step instructions
  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await axios.get(`/api/step/${recipeId}`);
        if (response.data && response.data.length > 0) {
          setSteps(response.data);
        } else {
          setSteps([]);
        }
      } catch (err) {
        console.error("Error fetching steps:", err);
        setSteps([]);
      }
    };

    fetchSteps();
  }, [recipeId]);

  const handleAddToWishlist = async () => {
    if (methodData) {
      try {
        const response = await axios.post(
          "/api/wishlist",
          {
            userId: 1, // Example: Hardcoded userId
            foodId: methodData.foodId,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          alert("Added to wishlist!");
          navigate("/Wishlist");
        }
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        alert("Failed to add to wishlist.");
      }
    }
  };

  const handleAddComment = async () => {
    if (newComment.trim()) {
      const newCommentData = {
        description: newComment,
        date: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD
        foodId: recipeId,
        userId: 1, // Ví dụ: Hardcoded userId cho bây giờ
      };

      setComments((prevComments) => [...prevComments, newCommentData]);
      setNewComment("");

      try {
        const response = await axios.post("/api/comment", newCommentData);
        if (response.status === 201) {
          const savedComment = response.data;
          setComments((prevComments) =>
            prevComments.map((comment) =>
              comment.description === newCommentData.description
                ? { ...comment, id: savedComment.id } // Giả sử API trả về `id`
                : comment
            )
          );
        }
      } catch (error) {
        console.error("Error adding comment:", error);
        alert("Failed to add comment.");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading cooking method: {error.message}</div>;
  }

  return (
    <div
      style={{
        overflowY: "scroll",
        height: "90vh",
        scrollSnapType: "y mandatory",
      }}
    >
      <div
        style={{
          scrollSnapAlign: "start",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backgroundImage: "url(/images/backgroundImgCookingMethod.png)",
          height: "90vh",
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
              alt={methodData.name}
              height="400px"
              src={methodData.image}
              width="400px"
              style={{ borderRadius: "50%" }}
            />
            <h1
              style={{
                fontSize: "2em",
                margin: "10px 0",
                color: "White",
                textAlign: "center",
              }}
            >
              {methodData.name}
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
                color: "White",
                flexDirection: "column",
                padding: "35px 50px",
                backgroundColor: "#593329",
                borderRadius: "15px",
              }}
            >
              <span>Rating: {methodData.rating}/5</span>
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
                onClick={handleAddToWishlist}
              />
            </div>
          </div>
          <div style={{ width: "65%" }}>
            <div
              style={{
                backgroundColor: "#fdf5e6",
                padding: "20px",
                borderRadius: "10px",
                height: "200px",
              }}
            >
              <h2
                style={{
                  fontSize: "1.5em",
                  marginTop: "0",
                  color: "#593329",
                }}
              >
                {methodData.name} ({methodData.country} Cuisine)
              </h2>
              <p
                style={{
                  fontSize: "1.3em",
                  lineHeight: "1.5",
                  color: "#593329",
                }}
              >
                {methodData.description}
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#fdf5e6",
                padding: "20px",
                borderRadius: "10px",
                marginTop: "20px",
                color: "#593329",
                height: "auto",
              }}
            >
              <h2 style={{ fontSize: "1.5em", marginTop: "0" }}>Ingredients</h2>
              <ul style={{ listStyleType: "none", padding: "0" }}>
                {methodData.ingredient.split(",").map((ingredient, index) => (
                  <li
                    key={index}
                    style={{ fontSize: "1.3em", lineHeight: "1.3" }}
                  >
                    {ingredient.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          scrollSnapAlign: "start",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#593329",
          height: "86vh",
        }}
      >
        <div style={{ width: "70%", margin: "auto", color: "white" }}>
          <div
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Step-by-step Recipe
          </div>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <div style={{ fontSize: "20px", textAlign: "left" }}>
                {step.description}
              </div>
            </div>
          ))}
          <div
            style={{
              fontSize: "25px",
              color: "#F4C95D",
              textAlign: "center",
            }}
          >
            Now, you have a full guide to making {methodData.name} at home.
            Enjoy the process!
          </div>
        </div>
      </div>

      <div
        style={{
          scrollSnapAlign: "start",
          display: "flex",
          justifyContent: "space-around",
          height: "90vh",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "white",
            color: "#593329",
            fontWeight: "400",
            width: "60%",
          }}
        >
          <div
            style={{
              fontSize: "2em",
              marginBottom: "20px",
              fontWeight: "800",
            }}
          >
            Comments:
          </div>
          <div
            style={{
              backgroundColor: "#FFC86E",
              padding: "20px",
              borderRadius: "10px",
              color: "#593329",
              maxWidth: "800px",
              margin: "0 auto",
              maxHeight: "400px",
              overflowY: "auto",
            }}
          >
            {comments.map((comment, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "15px",
                  borderBottom: "1.5px solid black",
                  paddingBottom: "15px",
                  textAlign: "left",
                }}
              >
                <strong>
                  User {comment.userId} ({comment.date}):
                </strong>
                <p style={{ margin: "15px 0", textAlign: "left" }}>
                  {comment.description}
                </p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "30px", color: "#593329" }}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Type your comment here..."
              style={{
                width: "60%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #593329",
                fontSize: "1.1em",
                marginBottom: "10px",
                fontFamily: "Arial, sans-serif",
                color: "#333",
              }}
            />
            <br />
            <button
              onClick={handleAddComment}
              style={{
                backgroundColor: "#593329",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontSize: "1em",
              }}
            >
              Add Comment
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "20px",
            paddingTop: "30px",
            marginRight: "30px",
            width: "25%",
            height: "59vh",
            backgroundColor: "#593329",
            padding: "20px",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <h2
            style={{
              fontSize: "2.5em",
              marginBottom: "100px",
              textAlign: "center",
            }}
          >
            We love cooking !
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "40px",
            }}
          >
            <img style={{ width: "20%" }} src="/images/logo.png" alt="logo" />
          </div>
          <p
            style={{
              fontSize: "1.5em",
              lineHeight: "1.5",
              textAlign: "center",
              paddingTop: "0px",
              paddingBottom: "150px",
            }}
          >
            CookCook can Cook You can Cook
          </p>
          <p
            style={{
              fontSize: "1em",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            If you have any idea about this recipe, just leave your comments
            here. We would love to hear from our beloved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CookingMethod;
