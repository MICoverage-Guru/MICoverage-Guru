import React, { Component } from "react";
import Swal from "sweetalert2";
import logo from "../hd-logo.jpg";

class Navbar extends Component {
	toggleNav() {
		document.getElementById("nav-icon1").classList.toggle("open");
		document
			.getElementsByClassName("responsive-links")[0]
			.classList.toggle("display-nav");
	}

	goHome() {
		window.location.href = "/";
	}

	toLink(link) {
		window.location.href = link;
	}

	async showContact() {
		const { value: formValues } = await Swal.fire({
			title: "ASK US ANYTHING",
			html:
				"<p>Fill in your details, write your question, and we will get back to you.</p>" +
				'<input id="swal-input1" type="text" class="swal2-input" placeholder="Full Name">' +
				'<input id="swal-input2" type="email" class="swal2-input" placeholder="Email">' +
				'<input id="swal-input3" type="text" class="swal2-input" placeholder="Phone Number (Optional)">' +
				'<textarea rows="10" cols="5" id="swal-input4" class="swal2-input" style="height:7em; padding-top: 0.5em;" placeholder="Question (Optional)" />',
			focusConfirm: false,
			confirmButtonText: "SEND",
			showCloseButton: true,
			preConfirm: () => {
				return [
					document.getElementById("swal-input1").value,
					document.getElementById("swal-input2").value,
					document.getElementById("swal-input3").value,
					document.getElementById("swal-input4").value
				];
			}
		});
		if (formValues) {
			if (formValues[0] !== "" && formValues[1] !== "") {
				const requestOptions = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: formValues[0],
						email: formValues[1],
						phone: formValues[2],
						question: formValues[3]
					})
				};
				fetch("/api/contactSubmit", requestOptions)
					.then(response => response.json())
					.then(data => {
						if (data.success === 1) {
							Swal.fire({
								title: "Thanks for sharing your information!",
								text: "Our team will contact you shortly!",
								icon: "success",
								confirmButtonText: "OK"
							});
						}
					});
			} else {
				Swal.fire({
					title: "Error",
					text: "Please try again after filling all the required fields.",
					icon: "error",
					confirmButtonText: "OK"
				});
			}
		}
	}

	render() {
		return (
			<div className="nav">
				<div className="nav-contents">
					<div
						className="responsive-phone"
						onClick={() => this.toLink("tel:+1 (833)-642-6837")}
					>
						<img
							alt="call icon"
							src="https://img.icons8.com/material-outlined/35/000000/call-male.png"
						/>{" "}
					</div>
					<div className="logo">
						<img alt="main_logo" src={logo} onClick={this.goHome} />
					</div>
					<div className="links">
						<p onClick={() => this.toLink("/#media-container")}>Media & FAQ</p>
						<p id="last-link" onClick={this.showContact}>
							Contact us
						</p>
						<div
							className="phone-box"
							onClick={() => this.toLink("tel:+1 (833)-642-6837")}
						>
							<img
								alt="call icon"
								src="https://img.icons8.com/material-outlined/48/000000/call-male.png"
							/>{" "}
							+1 (833)-642-6837
						</div>
					</div>
					<div className="responsive-nav">
						<div id="nav-icon1" onClick={this.toggleNav}>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<div className="clear" />
				</div>
				<div className="responsive-links">
					<p onClick={() => this.toLink("/#media-container")}>Media & FAQ</p>
					<p onClick={this.showContact}>Contact us</p>
				</div>
			</div>
		);
	}
}
export default Navbar;
