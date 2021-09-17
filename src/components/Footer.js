import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";

function Footer() {
  return (
    <footer className="mt-16 bg-blue-900 flex flex-col items-center justify-center">
      <div className="flex flex-col gap-8 pt-4 pb-4 w-full">
        <div className="Links flex flex-row items-center justify-center gap-16 text-2xl text-white ">
          <Link to="/">Lorem Ipsum</Link>
          <Link to="/">Lorem Ipsum</Link>
          <Link to="/">Lorem</Link>
          <Link to="/">Lorem Ipsum</Link>
        </div>
        <div className="w-full  bg-white mb-4" style={{height:"2px"}}></div>
      </div>

      <div className="onlineico flex flex-row gap-4 items-center justify-center pb-4">
        <Link to="/" className="onlineicons2">
          {" "}
          <FaTwitter />{" "}
        </Link>
        <Link to="/" className="onlineicons2">
          {" "}
          <FaLinkedinIn />{" "}
        </Link>
        <Link to="/" className="onlineicons2">
          {" "}
          <AiOutlineInstagram />{" "}
        </Link>
        <Link to="/" className="onlineicons2">
          {" "}
          <FaFacebookSquare />{" "}
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <div className="w-24 h-24 bg-white"></div>

        <div className="flex flex-col items-center justify-center pt-8 text-xl text-white">
          <p className="pb-4">
            Terms Of Services Privacy Policy &#169; 2021
            TritaTech
          </p>
          <p className="pb-16">Website By TritaTech</p>

          <Link to="/" className="flex flex-col items-center justify-center animate-bounce text-xl text-white">
            <MdKeyboardArrowUp />
            <h1>BACK TO TOP</h1>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
