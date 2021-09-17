import React from "react";

import { Link } from "react-router-dom";
function Dropdown({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-blue-900 font-semibold text-white"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to="/" className="p-4">
        Open Projects
      </Link>
      <Link to="/" className="p-4">
        {" "}
        Operator Owner
      </Link>
      <Link to="/" className="p-4">
        Investor{" "}
      </Link>
      <Link to="/" className="p-4">
        {" "}
        How It Works
      </Link>
    </div>
  );
}

export default Dropdown;
