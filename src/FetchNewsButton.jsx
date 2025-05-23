import React from "react";
import { useNavigate } from "react-router-dom";

function FetchNewsButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/news");
  };

  return <button onClick={handleClick}>View News</button>;
}

export default FetchNewsButton;
