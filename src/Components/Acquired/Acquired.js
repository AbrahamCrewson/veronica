import React from 'react';
import './Acquired.css';
import confetti from './confetti.gif';
class Acquired extends React.Component{
    componentDidMount(){
        const elementsToFadeInUpOnScroll = document.querySelectorAll(".acquir");
        if (elementsToFadeInUpOnScroll) {
        window.addEventListener("scroll", function(event) {
            elementsToFadeInUpOnScroll.forEach(function(element) {
            if (window.scrollY >= (element.offsetTop - window.innerHeight - 300 )) {
                element.classList.add("fadeIn");
            } else {
                element.classList.remove("fadeIn");
            }
            });
        });
        } 
    }
    
    render(){
        return(
            <div>
                <div id='intro'>
                    <h1> We have some great news ...</h1>
                </div>
                <div id='acquired' >
                    <div className='acquir'>
                        <img src={confetti} alt=" " id='leftconf' className='conf'></img>
                        <h1>We have been acquired!</h1>
                        <img src={confetti} alt=" "id='rightconf'className='conf'></img>
                    </div>
                    
                </div>
            </div>
            
        );
    }
}
export default Acquired