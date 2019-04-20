import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import NotFound from "./404";
import styles from "../styles/Nav.module.css";

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router >
				<nav className={styles.nav}>
					<li className={styles.link}>
						<NavLink activeClassName="active" to="/">Home</NavLink>
					</li>
					<li className={styles.link}>
						<NavLink activeClassName="active" to="/About/">About Us</NavLink>
					</li>
					<li className={styles.link}>
						<NavLink activeClassName="active" to="/Contact/">Contact Us</NavLink>
					</li>
					<li className={styles.link}>
						<NavLink activeClassName="active" to="/Users/">Users</NavLink>
					</li>
				</nav>

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
