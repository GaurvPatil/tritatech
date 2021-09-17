import React from "react";
import { Link } from "react-router-dom";

function Herocontent() {
  return (
    <section
      className=" herocontent
    flex flex-row 
items-center justify-between pt-16 p-8 bg-blue-900 text-white
    "
    >
      <div className="mainbtn text-left font-bold w-1/2">
        <div className="Herohead">
          <h1 className="pb-2">Herocontent lorem ipsum si.</h1>
          <h1 className="pb-5">Herocontent lorem ipsum si.</h1>
        </div>
        <button
          className=" Herobtn  bg-green-500 flex items-center rounded-full 
        md:py-3 px-12
        "
        >
          <Link to="/" className="font-semibold ">
            Contact Us
          </Link>
        </button>
      </div>

      <div
        className="border-2 border-blue-900 w-1/2
      "
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="Img"
        />
      </div>
    </section>
  );
}

export default Herocontent;
