import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <h2>Header</h2>
      <Link to="/">Home</Link>
    </>
  );
}

export default Header;
