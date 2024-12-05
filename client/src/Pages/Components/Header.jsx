import React from "react";
import Logo from "./Modules/Logo";
import Cart from "./Modules/Cart";
import UserPop from "./Modules/UserPop";

function Header() {
  return (
    <div className="header-container">
      <Logo />
      <div className="user-cart">
        <UserPop />
        <Cart />
      </div>
    </div>
  );
}

export default Header;
