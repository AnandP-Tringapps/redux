import React,{useState, Component} from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Input from "./Input";
import './App.css';


const Layout = () => {

    const [name, setName] = useState("Anand");
      return(
        <div className="layout">
           
                <Header name={name} />
                <div id="content">
                    <Content name={name}/>
                    <Input/>
                </div>
                
                <Footer name={name}/>
            </div>
       
    )

  }


export default Layout;