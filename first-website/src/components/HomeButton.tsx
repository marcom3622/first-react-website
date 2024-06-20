import React from "react";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <>
      <button onClick={handleClick}>Go to About Page</button>
    </>
  );
}

export default HomeButton;
