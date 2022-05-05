import React,{useState} from "react";
import { ReactDOM } from "react";
import './App.css';



function Input(){
    const [name, setName] = useState("");

    console.log(name);
    

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(document.getElementById('username').value);    
      
  };
    return(


        <div id="input" >
            <form  onSubmit={handleSubmit}>
                <label>Enter your Name </label><br></br>
                <input id='username' name= "username" type= "text" placeholder= "Username"  
                onChange={(e) => setName(e.target.value)}>
                    </input> <br></br>
                <button className="submitButton" type='submit' >Submit</button>  
            </form>  
        </div>
    )
}

export default Input;