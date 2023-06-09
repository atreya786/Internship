import React from "react";
function Card({ Title, Poster }) {
  return (
    <div>
      <img
        style={{ width: "200px", height: "200px" }}
        src={Poster}
        alt="errsfdor"
      />
      <h1>{Title}</h1>
    </div>
  );
}
export default Card;
