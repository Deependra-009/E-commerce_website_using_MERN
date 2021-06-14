import React from 'react'
import './../CSS/navbar.css';
import MenuBar1 from '@material-ui/icons/Menu';
import {NavLink} from 'react-router-dom'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Navbar=()=>{
    return (
        <>
            <nav className="navbar1">
                <div className="logo">i-Osm</div>
                <label for="btn" className="icon">
                    <MenuBar1 style={{fontSize:"30px"}} className="bars"></MenuBar1>
                </label>
                <input type="checkbox" id="btn"></input>
                
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li id="cart">
                        <NavLink to="/cart"><AddShoppingCartIcon style={{fontSize:"40px",marginBottom:"-15px"}}></AddShoppingCartIcon></NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout">Logout</NavLink>
                    </li>
                </ul>
            </nav>
            
        </>
    )
};


export default Navbar;