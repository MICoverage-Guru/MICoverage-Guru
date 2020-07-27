import React, { Component } from "react";
import AdminNav from "./AdminNav";

class AdminPanel extends Component {
	componentWillMount() {
		if (document.cookie.indexOf("session_token=") === -1) {
			window.location.href = "/agent";
		}
	}
	render() {
		return (
			<div className="container">
				<AdminNav />
				<div className="admin-panel">
					<br />
					<h1 className="admin-heading">Agent Panel</h1>
					<br />
					<a href="/agent/user_details">User Submissions</a>
					<a href="/agent/incomplete_user_details">
						Incomplete User Submissions
					</a>
				</div>
			</div>
		);
	}
}
export default AdminPanel;
