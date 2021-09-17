import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

function Question() {
  return (
    <section className=" Questions mt-16 flex flex-col  w-full pl-16 pr-16">
      <div className="Qinfoimg flex flex-row gap-4 items-center justify-between pb-8 w-full">
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt="img"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <h1 className="h1lorem">Lorem Ipsum</h1>
          <p>
            Lorem ipsdum dlor sir ahr. Rem ajfbje dwhwud uw uwhuwg uwdhuiwhq wu
            uw whduwgd wug wdg dwudguw hdwu dhwuuw dhwud wqid wudhqu wu
            whuduiqdhhdwudh wudhu wdhwu dhwquh wuhdiq wdhuwhdi wdhwudhqwd huiqdh
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="Qhead text-3xl font-bold"> Questions? </h1>
        <p className="Qinfo pb-4 text-gray-400">
          is free, and TritaTech is ready to assist you to make sure everything
          goes smoothly
        </p>
        <div className="onlinecoQ flex flex-row gap-4 items-center justify-center">
          <Link to="/" className="onlineicons">
            {" "}
            <AiOutlineMail />{" "}
          </Link>
          <Link to="/" className="onlineicons">
            {" "}
            <FaWhatsapp />
          </Link>
          <Link to="/" className="onlineicons">
            {" "}
            <FiPhone />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Question;
