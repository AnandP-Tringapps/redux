import React,{useState} from "react";
import { ReactDOM } from "react";


function Header({name}){

    return(
        <div id="header">    
        <h3>{name}</h3>
        </div>

    )
}

export default Header;