import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
import Card from "./Components/Card";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
                         <Route exact path="/">
                             To be updated                 
                          </Route>

                          <Route exact path="/about">                
                            <AboutUs />                         
                          </Route>

                          <Route exact path="/members">                 
                            <Card />                     
                          </Route>

                          <Route exact path="/contact">                
                            <Contact />                  
                          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
