import React from "react";
import Logo from "./Logo.js";
import NumResults from "./NumResults.js";
import Search from "./Search.js";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults />
    </nav>
  );
};

export default NavBar;
