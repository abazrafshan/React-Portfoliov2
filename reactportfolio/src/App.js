import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import ReactDOM from "react-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={ContactMe} />
            <Route exact path="/portfolio" component={Portfolio} />
          <Footer />
    </div>
    </Router>
  );
}

export default App;
