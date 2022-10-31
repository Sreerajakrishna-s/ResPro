import React, { useState, useTransition } from'react';
function Navbar() {

    const[nav,setnav] = useState(false);
    
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <ul className='menu'>
                <li><a href='#'className='active'> Home</a></li>
                <li><a href='#'>Tips</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </nav>
    )  
}
export default Navbar;