import React, {useState} from 'react'
import logo from '../../assets/blogLogo.png'
import '../css/header.css'
import {Link} from "react-router-dom";

function Header() {
    
    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className = 'heading'>
            <header>
            
                <div className = 'logo' >
                    <Link to="/"> <img className= "logoImage" src = {logo} alt = "Company Logo"  /></Link>

                </div>
                
            </header>
        </div>
        
    )
}

export default Header
