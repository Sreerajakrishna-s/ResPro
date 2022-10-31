import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
            <Navbar/>
            <div className='name'>
                <h1><span>Welcome to ResPro!!</span></h1>
                <p className='details'>Create your resume easily with our free builder and professional ..</p>
                <a href='#'className='cv-btn' id='create'>Create</a>
            </div>
        </div>
    )
}
export default Header;