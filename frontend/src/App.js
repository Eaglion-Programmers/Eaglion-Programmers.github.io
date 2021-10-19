import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* Disabled for now making its overlapping body enable it at the end */}
      {/* <h5 className="sec-heading">ABOUT</h5> */}
      <AboutUs/>
      {/* <h5 className="sec-heading">MEMBERS</h5> */}
      <Members/>
      {/* <h5 className="sec-heading">CONTACT</h5> */}
      <Contact/>
      <Footer/> 

    </div>
  );
}

export default App;
