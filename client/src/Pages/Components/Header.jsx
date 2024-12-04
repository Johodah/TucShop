import React from "react";
import Logo from "./Modules/Logo";
import Cart from "./Modules/Cart";
import UserPop from "./Modules/UserPop";

function Header() {
  return (
    <div>
      <Logo />
      <UserPop />
      <Cart />
    </div>
  );
}

export default Header;
