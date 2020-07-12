import React, { Component } from "react";

class AdminLogin extends Component {
	render() {
		return (
			<div className="container">
				<div className="admin-login">
					<br />
					<h1>Login</h1>
					<form action="/adminAuth" method="POST">
						<input
							type="password"
							id="authkey"
							name="authkey"
							className="input"
							placeholder="Authentication Key"
							required
						/>
						<input
							type="submit"
							name="subscribe-submit"
							id="subscribe-submit"
							className="input-submit"
							value="&rarr;"
						/>
					</form>
				</div>
			</div>
		);
	}
}
export default AdminLogin;
