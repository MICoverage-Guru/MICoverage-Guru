import React, { Component } from "react";
import Swal from "sweetalert2";

class SubscribeSection extends Component {
	subscribeToUpdates(e) {
		e.preventDefault();
		var email = document.getElementById("user-email").value;
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email: email
			})
		};
		fetch("/api/subscribeToUpdates", requestOptions)
			.then(response => response.json())
			.then(data => {
				if (data.success === 1) {
					document.getElementById("subscribe-form").reset();
					Swal.fire({
						title: "Subscribed!",
						icon: "success",
						confirmButtonText: "OK"
					});
				}
			});
	}

	render() {
		return (
			<div className="container">
				<div className="subscribe-section">
					<br />
					<p>Get our best tips & advice in your inbox once a week.</p>
					<form id="subscribe-form" onSubmit={this.subscribeToUpdates}>
						<input
							type="email"
							id="user-email"
							name="user-email"
							className="subscribe-input"
							placeholder="Email Address"
							required
						/>
						<input
							type="submit"
							name="subscribe-submit"
							id="subscribe-submit"
							className="subscribe-submit"
							value="&rarr;"
						/>
					</form>
				</div>
			</div>
		);
	}
}
export default SubscribeSection;
