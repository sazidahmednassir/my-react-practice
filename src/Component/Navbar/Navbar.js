import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import "./Navbar.css";
const Navbar = ({ cart, toggleModal }) => {
    return (
        <nav className='navbar'>
        <h1>Gun Store</h1>
        <div className='cart-counter' onClick={toggleModal}>
          <span>{cart.length}</span>
          <BsFillCartFill className='icon' color='#fff' />
        </div>
      </nav>
    
    );
};

export default Navbar;