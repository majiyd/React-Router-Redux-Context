import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import Home from './Home'
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import NotFound from "./404.js"

export default class AppRouter extends React.Component{
    render(){
        return (
			<Router>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/About/">About Us</Link>
				</li>
				<li>
					<Link to="/Contact/">Contact Us</Link>
				</li>
				<li>
					<Link to="/Users/">Users</Link>
				</li>

				<Switch>	
					<Route path="/" exact component={Home} />
					<Route path="/About/" component={About} />
					<Route path="/Contact/" component={Contact} />
					<Route path="/Users/:id" component={Users} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
    }
}