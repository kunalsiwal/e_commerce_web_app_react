import React, { useState } from "react";
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import NotLoginDropdown from "../Dropdowns/NotLoginDropDown";

function Navbar(){
    
    const [userIdClicked,setUserIdClicked]=useState(false)

    function handleUserIdClicked(){
        setUserIdClicked((prev)=>{
            return !prev;
        })
    }

    return (
    <div className="navbar">
        <Link to='/' style={{ textDecoration: 'none' ,color:'inherit',display: 'flex'}}>
        <div className="logo">
            <h1 className='navbar-title'>LoduKart </h1><ShoppingCartIcon fontSize="large" sx={{mt:'5px',pl:'5px',color:'white'}}/>
        </div>
            
        </Link>
        <div className="search-bar">
            <input type='text' placeholder="search category or product" id="search-input"></input>
            <SearchIcon fontSize="large" sx={{color:'white'}}/>
        </div>
        
        
        <ul className="list">
            <Link to='/About' style={{ textDecoration: 'none' ,color:'inherit'}}>
                <li className="list-items">
                    About
                </li>
            </Link>
           
            <Link to='/Contact' style={{ textDecoration: 'none' ,color:'inherit'}}>
                <li className="list-items">
                    Contact
                </li>
            </Link>

            <Link to='/Distributor' style={{ textDecoration: 'none' ,color:'inherit'}}>
            <li className="list-items">
                Distributor
            </li>
            </Link>
            
            <li onClick={handleUserIdClicked}>
            <AccountCircleIcon fontSize="large" sx={{marginLeft:'10px',marginTop:'5px'}}/>
            </li>
        </ul>
        
        {
            userIdClicked?
            <div>
                <div className="triangle">

                </div>
                <div className="dropdown">
                <NotLoginDropdown />
                </div>
            </div>
        :null
        }
       
    </div>)
}
export default Navbar