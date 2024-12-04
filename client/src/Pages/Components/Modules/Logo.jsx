import React from "react";
import logo from "../../../../public/logo.png";

function Logo() {
  const handleclick = () => {
    window.location.pathname = "/";
  };
  return (
    <button onClick={handleclick}>
      <img src={logo} alt="Home" width={250} />
    </button>
  );
}

export default Logo;
