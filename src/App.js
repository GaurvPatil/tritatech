import React, {useState, useEffect} from "react";
import Topnav from "./components/Topnav";
import Herocontent from "./components/Herocontent";
import Info from "./components/Info";
import Swipe from "./components/Swipe";
import Question from "./components/Question";
import Footer from "./components/Footer";
import { BrowserRouter, Switch} from "react-router-dom"
import Dropdown from "./components/Dropdown";


function App() {

const[isOpen, setIsopen]= useState(false);

const toggle= ()=>{
  setIsopen(!isOpen);
  console.log(isOpen);
};

useEffect(()=>{
  const hideMenu = ()=>{
    if(window.innerWidth > 768 && isOpen){
      setIsopen(false);
    };
  };
  window.addEventListener("resize", hideMenu);

  return(()=>{
    window.removeEventListener("resize",hideMenu)
  })
});

  return (
<BrowserRouter>
    <>
    <Topnav toggle = {toggle}/>
    <Dropdown isOpen={isOpen} toggle={toggle}/>
    <Herocontent />
    <Info />
    <Swipe />
    <Question />
    <Footer /> 
    </>
    </BrowserRouter>
  );
}

export default App;
