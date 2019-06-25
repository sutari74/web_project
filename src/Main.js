import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";
 
class Main extends Component {
  render() {
    return (
	   <HashRouter> 
        <div>
          <h1>NodeJS - React</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/AboutUs">About Us</NavLink></li>
            <li><NavLink to="/Services">Services</NavLink></li>
			<li><NavLink to="/ContactUs">Contact Us</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/AboutUs" component={AboutUs}/>
			<Route path="/Services" component={Services}/>
            <Route path="/ContactUs" component={ContactUs}/>
          </div>
        </div>
	   </HashRouter>
    );
  }
}
 
export default Main;