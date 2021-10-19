import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Members from './Components/Members';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <AboutUs/>
      <Members/>
      <Contact/>
      <Footer/> 
    </div>
  );
}

export default App;
