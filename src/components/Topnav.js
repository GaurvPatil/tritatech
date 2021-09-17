import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Topnav({ toggle }) {
  const [menuIcon, setmenuIcon] = useState(true);
  const changeMenu = () => {
    setmenuIcon(!menuIcon);
  };

useEffect(()=>{
  const restoreMenuIcon= ()=>{
    if(window.innerWidth > 768){
      setmenuIcon(true);
    };
  };
  window.addEventListener("resize", restoreMenuIcon);
})


  return (
    <>
      <nav
        className="flex justify-between bg-blue-900 items-center h-16 bg-white text-white relative shadow-sm font-mono"
        role="navigation"
      >
        <Link
          to="/"
          className="pl-8 
        md:text-lg
        lg:text-2xl
        xl:text-2xl
        2xl:text-2xl
        "
        >
          LOGO
        </Link>
        <div
          className="px-4 cursor-pointer     md:hidden"
          onClick={() => {
            toggle();
            changeMenu();
          }}
        >
          {menuIcon ? (
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          ) : (
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          )}
        </div>
        <div
          className="pr-8 font-semibold text-white 
        md:block hidden text-lg
        lg:text-2xl
        xl:text-2xl
        2xl:text-2xl"
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
      </nav>
    </>
  );
}

export default Topnav;
