import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='navbar'>
        <h1>Gun Store</h1>
        {/* <div className='cart-counter' onClick={toggleModal}>
          <span>{cart.length}</span>
          <BsFillCartFill className='icon' color='#fff' />
        </div> */}
      </nav>
    
    );
};

export default Navbar;