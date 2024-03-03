import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
import Acquired from '../Acquired/Acquired';
class App extends React.Component {
  render (){
    return(
      <div className="App">
        <Navbar/>
        <Acquired/>
        <Hero/>
        <Main/>
      </div>
    )
  }
}
export default App;
