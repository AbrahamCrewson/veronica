import React from 'react';
import './Hero.css';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import veronica from './veronica.png';
import gradient from './gradient.png';
class Hero extends React.Component{

    render(){
        return(
            <div id='hero'>
                <div id="hero-box">
                    <h1 id="hero-title1">Unprecedented</h1>
                    <h1 id="hero-title2">Ai Therapy</h1>
                    <h2 id="hero-desc">Speak directly to Veronica and get a verbal response, just like talking to a real person.</h2>
                    <div id="hero-buttons">
                        <a href="#Waitlist"><button className ="join-waitlist" id="hero-join"><h2>Join The Waitlist</h2></button></a>
                        <a href="https://www.linkedin.com/company/threeiai/" target="_blank"  rel="noreferrer" ><button className ="twitter" id="hero-twitter"><img src={linkedin} alt=""></img><h2>LinkedIn</h2></button></a>

                    </div>
                   
                </div> 
                <img id="hero-veronica"src={veronica} alt=""></img>
                <img id="gradient" src={gradient} alt=""></img>
                <h3 id="hero-chat">How can I help you tackle your problem?</h3>
            </div>
        );
    }
}
export default Hero