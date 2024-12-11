import React, { useState } from "react";

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
      {showToast(show)}
    </div>
  );
}

function showToast(show) {
  return (
    show && (
      <div className="toast ">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input type="email" name="email" id="email" placeholder="Email" />
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    )
  );
}

export default UserPop;
