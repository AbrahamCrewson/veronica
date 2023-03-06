import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Main from '../Main/Main';
class App extends React.Component {
  render (){
    return(
      <div className="App">
        <Navbar/>
        <Hero/>
        <Main/>
      </div>
    )
  }
}
export default App;
