import React from "react";
import { Link } from "react-router-dom";
function navbar(){
    return(
        <div className="nav">
           <div className="logo"><img src="C:\Users\wassm\OneDrive\Bureau\logo.jpg" alt="" /></div> 
           <div className="links">
            <Link to ='/?cat="Art"'><h6>Art</h6></Link>
            <Link to ='/?cat="technologie"'><h6>Technologie</h6></Link>
            <Link to ='/?cat="cinema"'><h6>Cinema</h6></Link>
             </div>
             <span>
             <Link to ="/Login"><h6>Login</h6></Link>
             </span>
        </div>
      )
}export default navbar;