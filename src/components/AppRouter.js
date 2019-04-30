import React from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Users from "./Users";
import Context from "./Context"
import NotFound from "./404";
import styles from "../styles/Nav.module.css";
import ReduxCounter from "./ReduxCounter";

/**
 * @DESC AppRouter Object handles app routing
 * @PARAMS Home, about, contact, users, 404 components 
 * @RETURN Returns Approuter Component
 */
export default class AppRouter extends React.Component {
  render() {
    return (
      <Router >
				<nav className={styles.nav}>
					<li >
						<NavLink className={styles.link} exact activeClassName={styles.active}  to="/">Home</NavLink>
					</li>
					<li >
						<NavLink className={styles.link} activeClassName={styles.active}  to="/About/">About Us</NavLink>
					</li>
					<li >
						<NavLink className={styles.link} activeClassName={styles.active} to="/Contact/">Contact Us</NavLink>
					</li>
					<li >
						<NavLink className={styles.link} activeClassName={styles.active}  to="/Users/">Users</NavLink>
					</li>
					<li >
						<NavLink className={styles.link} activeClassName={styles.active}  to="/Context/">Context</NavLink>
					</li>
					<li >
						<NavLink className={styles.link} activeClassName={styles.active}  to="/Redux/">Redux</NavLink>
					</li>
				</nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About/" component={About} />
          <Route path="/Contact/" component={Contact} />
          <Route path="/Users/:id" component={Users} />
					<Route path="/Users/" component={Users} />
					<Route path="/Context/" component={Context} />
					<Route path="/Redux/" component={ReduxCounter} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
