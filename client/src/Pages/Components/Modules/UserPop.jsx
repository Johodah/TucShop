import React from "react";
import { useState } from "react";

function UserPop() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img
          src="https://img.icons8.com/?size=100&id=83190&format=png&color=000000"
          alt="user"
          width={40}
          data-testid="user-image"
        />
      </button>
      {show && (
        <div className="toast ">
          <button className="login">Log in</button>
          <button>Sign up</button>
        </div>
      )}
    </div>
  );
}

export default UserPop;
