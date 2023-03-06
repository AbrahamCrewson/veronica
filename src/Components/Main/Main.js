import React from 'react';
import './Main.css';
import brain from './brain.png';
import globe from './globe.png';
import lock from './lock.png';
import person from './person.png';
import veronica from '../Hero/veronica.png';


class Main extends React.Component{

    render(){
        return(
            <div id='Main'>
                <div id="section1">
                    <div className='point'>
                        <img src={lock} alt=""></img>
                        <h3>Fully Encrypted</h3>
                        <h6>Veronica respects user privacy and maintains confidentiality throughout interactions.</h6>
                    </div>
                    <div className='point'>
                        <img src={globe} alt=""></img>
                        <h3>Unparalleled Accessibility</h3>
                        <h6>Veronica is available 24/7 and can be accessed from anywhere with an internet connection.</h6>
                    </div>
                    <div className='point'>
                        <img src={person}alt=""></img>
                        <h3>Personalized Care</h3>
                        <h6>Veronica provides personalized mental health support through conversation.</h6>
                    </div>
                    <div className='point'>
                        <img src={brain} alt=""></img>
                        <h3>Trained by Experts</h3>
                        <h6>Veronica uses AI to identify patterns in behavior and provide tailored coping strategies.</h6>
                    </div>
                </div>
                <div id="section2">
                    <div id="title">
                        <h1 id="title1">Meet</h1>
                        <h1 id="title2">Veronica</h1>
                        <h6>Veronica is an AI-powered bot designed to provide support and guidance to individuals with mental health issues. With her empathetic and non-judgmental approach, Veronica aims to help users navigate their mental health challenges and improve their overall well-being.</h6>
                    </div>
                    
                    <div id="row1">
                        <div className='row-item-left'>
                            <h5>Unparalleled Accessibility</h5>
                            <h6>Veronica is available 24/7 and can be accessed from anywhere with an internet connection.</h6>
                        </div>
                        <div className='row-item-right'>
                            <h5>Fully Personalized</h5>
                            <h6>Veronica provides personalized mental health support through conversation.</h6>
                        </div>
                    </div>
                    <div id="row2">
                        <div className='row-item-left'>
                                <h5>Increased Privacy</h5>
                                <h6>Veronica respects user privacy and maintains confidentiality throughout interactions.</h6>
                        </div>
                        <div className='row-item-right'>
                                <h5>Trained for Mental Health</h5>
                                <h6>Veronica uses AI to identify patterns in behavior and provide tailored coping strategies.</h6>
                        </div>
                    </div>
                    <img id="main-veronica"src={veronica} alt=""></img>
                    
                </div>
                <div id="section3">
                    <h2>Features</h2>
                    <div id="main-grid">
                        <div className='main-griditem'><h4>PERSONALIZED MENTAL HEALTH</h4></div>
                        <div className='main-griditem'><h4>COPING STRATEGIES FOR ANXIETY</h4></div>
                        <div className='main-griditem'><h4>EMOTIONAL SUPPORTFOR DEPRESSION</h4></div>
                        <div className='main-griditem'><h4>MINDFULNESS & RELAXATION</h4></div>
                        
                        <div className='main-griditem'><h4>SELF CARE & STRESS MANAGEMENT</h4></div>
                        <div className='main-griditem'><h4>GOAL SETTING & MOTIVATION</h4></div>
                        <div className='main-griditem'><h4>MENTAL HEALTH RESOURCES</h4></div>
                        <div className='main-griditem'><h4>MOOD TRACKING & JOURNALING</h4></div>
                    </div>
                </div>
                <div id="section4">
                    <h2>Get Updates on V.</h2>
                    <h6>we'll let you know when we launch, just put your email below to subscribe to our mailiing list. it’s free.</h6>
                    <div id="Waitlist">
                        <form action="submit_form.php" method="POST" >
                           <input type="email" name="email"  placeholder="   Email" required=""></input> 
                           <button type="submit" >Subscribe Now</button>
                    
                        </form>
                       </div> 
                        
                </div>
                <div id="section5">
                    <div id="footer">
                        <p>@2023 iii.ai All rights reserved </p>
                        <div>
                            <a href="">Terms & Agreements</a>
                            <a href="">Privacy Policy</a>
                        </div>
                        
                    </div>
                </div>
            
            </div>
        );
    }
}
export default Main