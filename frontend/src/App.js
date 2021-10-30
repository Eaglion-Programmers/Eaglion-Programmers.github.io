import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Home from "./Components/Home";


function App() {
  return (
    <div className="App" style={{display:"flex",flexDirection:"column"}}>
      <Navbar />
      <AboutUs />
      <Home />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
