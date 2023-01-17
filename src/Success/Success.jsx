import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
export default function Success() {
  const navigate=useNavigate()
  const navigateto =()=>{
         navigate('/')
  }
  return (
  
    <>
      <div className="container-wrapper">
    
          <span id="header">Congratulations</span>
          <p>
            <span>Your account has been successfully created</span>
          </p>
          <button onClick={navigateto}>Continue</button>

      </div>
    </>
  );
}
