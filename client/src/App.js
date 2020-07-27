import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Complete from "./components/Complete";
import CancelPolicy from "./components/CancelPolicy";
import Login from "./components/Admin/Login";
import AdminPanel from "./components/Admin/AdminPanel";
import UserDetails from "./components/Admin/UserDetails";
import IncompleteUserDetails from "./components/Admin/IncompleteUserDetails";

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
					<Route exact path="/agent" component={Login} />
					<Route exact path="/agent/home" component={AdminPanel} />
					<Route exact path="/agent/user_details" component={UserDetails} />
					<Route
						exact
						path="/agent/incomplete_user_details"
						component={IncompleteUserDetails}
					/>
					<Route exact path="/cancel-policy" component={CancelPolicy} />
					<Route component={NoMatchPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
