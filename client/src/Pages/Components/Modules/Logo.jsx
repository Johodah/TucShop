import React from "react";
import logo from "../../../../public/logoTRans.png";

function Logo() {
  const handleclick = () => {
    window.location.pathname = "/";
  };
  return (
    <button onClick={handleclick}>
      <img src={logo} alt="Home" />
    </button>
  );
}

export default Logo;
