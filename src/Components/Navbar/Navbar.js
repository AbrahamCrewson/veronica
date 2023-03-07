import React from 'react';
import './Navbar.css';
import logo from './nav_logo.png';

class Navbar extends React.Component{

    render(){
        return(
            <div id='Navbar'>
                <img id="nav-logo" src={logo}alt='logo'></img>
                <a href="#Waitlist"><button className ="join-waitlist" id='nav-join'><h2>Join The Waitlist</h2></button></a>
            </div>
        );
    }
}
export default Navbar