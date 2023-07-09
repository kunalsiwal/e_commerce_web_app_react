import React from "react";
import './Navbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

function Navbar(){
    console.log(__dirname)
    return (
    <div className="navbar">
        <Link to='/' style={{ textDecoration: 'none' ,color:'inherit',display: 'flex'}}>
            <h1 className='navbar-title'>LoduKart </h1><ShoppingCartIcon fontSize="large" sx={{mt:'5px',pl:'5px',color:'white'}}/>
        </Link>
        
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
            
            <li >
            <AccountCircleIcon fontSize="large" sx={{marginLeft:'10px',marginTop:'5px'}}/>
            </li>
        </ul>
    </div>)
}
export default Navbar