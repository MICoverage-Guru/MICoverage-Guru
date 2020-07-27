import React, { Component } from "react";
import Swal from "sweetalert2";
import logo from "../hd-logo.jpg";

class Footer extends Component {
	toLink(link) {
		window.location.href = link;
	}

	toNewLink(link) {
		window.open(link, "_blank");
	}

	getStarted = e => {
		e.preventDefault();
		if (!isNaN(document.getElementById("user-zip").value)) {
			localStorage.setItem(
				"zip_code",
				document.getElementById("user-zip").value
			);
			if (window.innerHeight < 690)
				document.getElementsByClassName("extra-space")[0].style.paddingBottom =
					"20vh";
			else
				document.getElementsByClassName("extra-space")[0].style.paddingBottom =
					"10vh";
			document.getElementsByClassName("landing-home")[0].style.display = "none";
			document.getElementsByClassName("question-form")[0].style.display =
				"flex";
			setTimeout(function() {
				document.getElementsByClassName("question-form")[0].style.opacity = 1;
			}, 100);
			window.scroll({
				top: 0,
				behavior: "smooth"
			});
		} else {
			alert("Please enter a valid zip code!");
		}
	};

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
			<div className="container">
				<footer>
					<div className="footer-contents">
						<div className="footer-left">
							<div className="footer-logo">
								<img alt="main_logo_footer" src={logo} />
							</div>
							<div className="footer-zip">
								<h3>Ready to shop for Auto Insurance?</h3>
								<form onSubmit={this.getStarted}>
									<input
										type="tel"
										id="user-zip"
										name="user-zip"
										className="zip-input"
										placeholder="ZIP Code"
										maxLength="5"
										required
									/>
									<input
										type="submit"
										name="zip-submit"
										id="zip-submit"
										className="zip-submit"
										value="GET QUOTE"
									/>
								</form>
							</div>
							<div className="footer-phone-container">
								<h3 className="footer-phone">
									Talk to a licensed agent now and save money
								</h3>
								<img
									alt="call icon"
									src="https://img.icons8.com/material-outlined/40/000000/call-male.png"
								/>{" "}
								<p onClick={() => this.toLink("tel:+1 (833)-642-6837")}>
									+1 (833)-642-6837
								</p>
								<br />
								<img
									alt="mail_icon"
									src="https://img.icons8.com/material-rounded/48/000000/important-mail.png"
								/>
								<p
									className="footer-email-custom"
									onClick={() => this.toLink("tel:+1 (833)-642-6837")}
								>
									admin@micoverageguru.com
								</p>
								<br />
								<img
									alt="location_icon"
									src="https://img.icons8.com/material-rounded/48/000000/marker.png"
								/>
								<p
									className="footer-location-custom"
									onClick={() =>
										this.toNewLink("https://goo.gl/maps/w7Rqs9mzkox2LGTG7")
									}
								>
									21500 Haggerty Rd Suite 140 Northville, MI 48167
								</p>
							</div>
						</div>
						<div className="footer-right">
							<div className="footer-right-sec1">
								<h1>Links</h1>
								<p onClick={() => this.toLink("/#media-container")}>
									Media & FAQ
								</p>
								<p onClick={this.showContact}>Contact us</p>
							</div>
							<div className="footer-right-sec2">
								<h1>Follow us</h1>
								<div
									className="soc"
									onClick={() =>
										this.toNewLink("https://www.instagram.com/micoverageguru/")
									}
								>
									<img
										alt="social_icon"
										src="https://img.icons8.com/fluent/96/000000/instagram-new.png"
									/>
									<p>Instagram</p>
								</div>
								<div
									className="soc"
									onClick={() =>
										this.toNewLink(
											"https://www.facebook.com/MICoverage-Guru-100178651769119"
										)
									}
								>
									<img
										alt="social_icon"
										src="https://img.icons8.com/fluent/96/000000/facebook-new.png"
									/>
									<p>Facebook</p>
								</div>
								<div
									className="soc"
									onClick={() =>
										this.toNewLink(
											"https://www.linkedin.com/company/micoverageguru-insurance/"
										)
									}
								>
									<img
										alt="social_icon"
										src="https://img.icons8.com/color/96/000000/linkedin.png"
									/>
									<p>LinkedIn</p>
								</div>
								<div
									className="soc"
									onClick={() =>
										this.toNewLink("https://twitter.com/micoverage_guru")
									}
								>
									<img
										alt="social_icon"
										src="https://img.icons8.com/fluent/96/000000/twitter.png"
									/>
									<p>Twitter</p>
								</div>
								<div
									className="soc"
									onClick={() =>
										this.toNewLink(
											"https://www.youtube.com/channel/UCOCwmcBHjNP0_J8VFDJMj0w/featured?disable_polymer=1"
										)
									}
								>
									<img
										alt="social_icon"
										src="https://img.icons8.com/fluent/96/000000/youtube-play.png"
									/>
									<p>Youtube</p>
								</div>
							</div>
						</div>
					</div>
					<p className="footer-about">
						Insuretech LLC. (DBA Micoverageguru), a Michigan LLC, is a licensed
						independent insurance broker. We do not underwrite any insurance
						policy and all the information provided on this site has been
						developed for general informational and educational purposes.
					</p>
				</footer>
			</div>
		);
	}
}
export default Footer;
