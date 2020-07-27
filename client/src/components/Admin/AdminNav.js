import React, { Component } from "react";
import logo from "../../hd-logo.jpg";

class AdminNav extends Component {
	toggleNav() {
		document.getElementById("nav-icon1").classList.toggle("open");
		document
			.getElementsByClassName("responsive-links")[0]
			.classList.toggle("display-nav");
	}

	goHome() {
		window.location.href = "/agent/home";
	}

	toLink(link) {
		window.location.href = link;
	}

	render() {
		return (
			<div
				className="nav"
				style={{
					borderBottom: "1px solid rgba(0,0,0,0.1)"
				}}
			>
				<div className="nav-contents">
					<div className="logo">
						<img alt="main_logo" src={logo} onClick={this.goHome} />
					</div>
					<div className="links">
						<p
							style={{ marginTop: "5vh", fontSize: "1em !important" }}
							onClick={() => this.toLink("/agent/home")}
						>
							Home
						</p>
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
					<p onClick={() => this.toLink("/agent/home")}>Home</p>
				</div>
			</div>
		);
	}
}
export default AdminNav;
