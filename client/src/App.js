import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Complete from "./components/Complete";
import Login from "./components/Admin/Login";
import UserDetails from "./components/Admin/UserDetails";

const NoMatchPage = () => {
	return <h3>404 - Not found</h3>;
};

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/form/1" component={Page1} />
					<Route exact path="/form/2" component={Page2} />
					<Route exact path="/form/3" component={Page3} />
					<Route exact path="/form/4" component={Page4} />
					<Route exact path="/complete" component={Complete} />
					<Route exact path="/admin" component={Login} />
					<Route exact path="/admin/user_details" component={UserDetails} />
					<Route component={NoMatchPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
