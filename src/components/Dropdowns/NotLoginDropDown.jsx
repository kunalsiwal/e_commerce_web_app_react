import React from "react";
import './NotLoginDropDown.css'
import { Link } from "react-router-dom";
function NotLoginDropdown(){
    return (
        <div className="not-login-dropdown">
            <Link to='/Login' >
                <button onMouseOver={()=>{
                    
                }} className="button">Login</button>
            </Link>
            <Link to='/Signup' >
                <button className="button signup">Signup</button>
            </Link>
            
        </div>
    )
}

export default NotLoginDropdown

