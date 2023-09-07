import React from 'react'
import {Link} from "react-router-dom";
import { ShoppingCart } from 'phosphor-react'
import './navbar.css';

export const Navbar = () => {
  return(
    <div className="navbar">
        <div className="links">
          <Link to= "/">Login</Link>
          <Link to="/about">About</Link>
            <Link to="/Shop">Kingdom Shop</Link>
            <Link to="/cart">
                {" "}
                <ShoppingCart size={35}/> 
            </Link>
        </div>
        </div>
  );
};
