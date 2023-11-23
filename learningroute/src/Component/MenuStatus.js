import React, { useState, useEffect } from "react";
import { Hamburger } from "./Hamburger";
import NavBar from "./NavBar";
import NavTop from "./NavTop";

function MenuStatus(){

    const [width,setWidth]= useState(window.innerWidth)
    const MobileView = 850;
    React.useEffect(()=>{
        window.addEventListener('resize',()=>setWidth(window.innerWidth));
    },[])
    // let width = window.innerWidth;
    // let Mobilewidth = props.view;
  
   return width> MobileView? <NavBar /> : <Hamburger />;
  
       
}

export default MenuStatus;