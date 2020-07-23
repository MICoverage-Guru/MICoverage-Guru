import React, { Component } from "react";
import Navbar from "./Navbar";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Helmet from "react-helmet";

import Swal from "sweetalert2";
import {
	EmailShareButton,
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappShareButton,
	FacebookMessengerShareButton,
	TwitterIcon,
	FacebookIcon,
	FacebookMessengerIcon,
	LinkedinIcon,
	EmailIcon,
	WhatsappIcon
} from "react-share";
import Modal from "react-modal";

const styles = theme => ({
	cont: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200
	}
});

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		padding: "5rem"
	}
};

class Complete extends Component {
	constructor() {
		super();
		this.state = {
			modalIsOpen: false,
			selectedDate: new Date()
		};

		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.subForm = this.subForm.bind(this);
	}
	componentWillMount() {
		if (
			!localStorage.getItem("zip_code") ||
			!localStorage.getItem("insurance_type")
		) {
			window.location.href = "/form/4";
		}
	}

	back() {
		window.location.href = "/";
	}

	scheduleAppt() {
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				uid: localStorage.getItem("uid"),
				timestamp: "now",
				email: localStorage.getItem("Q25")
			})
		};
		fetch("/api/scheduleAppt", requestOptions)
			.then(response => response.json())
			.then(data => {
				if (data.success === 1) {
					const Toast = Swal.mixin({
						toast: true,
						position: "top-end",
						showConfirmButton: false,
						timer: 3000
					});
					Toast.fire({
						icon: "success",
						title: "Appointment Scheduled!"
					});
					document.getElementById("sched-appt").style.display = "none";
					document.getElementById("success-msg").innerHTML =
						"Our expert agents will get in touch with you soon!";
					document.getElementById("refer-btn").style.display = "block";
					window.scroll({
						top: 0,
						behavior: "smooth"
					});
				}
			});
	}

	subForm(e) {
		e.preventDefault();
		this.closeModal();
		var timestamp = document.getElementById("dt-scheduler").value;
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				uid: localStorage.getItem("uid"),
				timestamp: timestamp,
				email: localStorage.getItem("Q25")
			})
		};
		fetch("/api/scheduleAppt", requestOptions)
			.then(response => response.json())
			.then(data => {
				if (data.success === 1) {
					const Toast = Swal.mixin({
						toast: true,
						position: "top-end",
						showConfirmButton: false,
						timer: 3000
					});
					Toast.fire({
						icon: "success",
						title: "Appointment Scheduled!"
					});
					document.getElementById("sched-appt").style.display = "none";
					document.getElementById("success-msg").innerHTML =
						"Our expert agents will get in touch with you soon!";
					document.getElementById("refer-btn").style.display = "block";
					window.scroll({
						top: 0,
						behavior: "smooth"
					});
				}
			});
	}

	openModal = () => {
		this.setState({ modalIsOpen: true });
	};

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	};

	setDate = dateTime => this.setState({ dateTime });

	componentDidMount() {
		Modal.setAppElement("#cont");
	}

	async openReferralPopup() {
		const { value: formValues } = await Swal.fire({
			title: "REFER A FRIEND",
			html:
				'<input id="swal-input5" type="text" class="swal2-input" placeholder="Full Name">' +
				'<input id="swal-input6" type="email" class="swal2-input" placeholder="Email">' +
				'<input id="swal-input7" type="text" class="swal2-input" placeholder="Phone Number (Optional)">',
			focusConfirm: false,
			confirmButtonText: "SUBMIT",
			showCloseButton: true,
			preConfirm: () => {
				return [
					document.getElementById("swal-input5").value,
					document.getElementById("swal-input6").value,
					document.getElementById("swal-input7").value
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
						phone: formValues[2]
					})
				};
				fetch("/api/referralSubmit", requestOptions)
					.then(response => response.json())
					.then(data => {
						if (data.success === 1) {
							Swal.fire({
								title: "Submitted!",
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

	handleDateChange = datetime => {
		this.setState({
			selectedDate: datetime
		});
	};

	render() {
		return (
			<div className="container" id="cont">
				<Navbar />
				<div className="page-complete">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						className="tick-icon"
						width="38"
						height="38"
						viewBox="0 0 172 172"
						style={{ fill: "#000000" }}
					>
						<g
							fill="none"
							fillRule="nonzero"
							stroke="none"
							strokeWidth="1"
							strokeLinecap="butt"
							strokeLinejoin="miter"
							strokeMiterlimit="10"
							strokeDasharray=""
							strokeDashoffset="0"
							fontFamily="none"
							fontWeight="none"
							fontSize="none"
							textAnchor="none"
							style={{ mixBlendMode: "normal" }}
						>
							<path d="M0,172v-172h172v172z" fill="none"></path>
							<g fill="#4cb8ef">
								<path d="M39.69231,6.61538c-18.16647,0 -33.07692,14.91046 -33.07692,33.07692v92.61538c0,18.16647 14.91046,33.07692 33.07692,33.07692h92.61538c18.16647,0 33.07692,-14.91046 33.07692,-33.07692v-92.61538c0,-18.16647 -14.91046,-33.07692 -33.07692,-33.07692zM39.69231,19.84615h92.61538c10.95673,0 19.84615,8.88942 19.84615,19.84615v92.61538c0,10.95673 -8.88942,19.84615 -19.84615,19.84615h-92.61538c-10.95673,0 -19.84615,-8.88942 -19.84615,-19.84615v-92.61538c0,-10.95673 8.88942,-19.84615 19.84615,-19.84615zM113.70192,46.72115c-0.98197,0.15505 -1.80889,0.67188 -2.48077,1.65385l-32.45673,48.16827l-15.29808,-15.09135c-1.31791,-1.98978 -3.85036,-2.14483 -5.16827,-0.82692l-5.99519,5.99519c-1.31791,1.98978 -1.31791,4.67728 0,5.99519l23.15385,23.15385c1.31791,0.67188 3.17849,2.06731 5.16827,2.06731c1.31791,0 3.4369,-0.69772 4.75481,-2.6875l39.69231,-58.29808c1.31791,-1.98978 0.56851,-3.85036 -2.06731,-5.16827l-6.61538,-4.75481c-0.67187,-0.33594 -1.70553,-0.36178 -2.6875,-0.20673z"></path>
							</g>
						</g>
					</svg>

					<h1 className="success">Thanks for requesting a quote!</h1>
					<p className="success-msg" id="success-msg">
						Our agents are reviewing your information and will contact you with
						fair and reliable insurance quotes.
					</p>
					<div className="post-form-options vertical-flex" id="sched-appt">
						<div className="appointment-btns">
							<div className="connect" onClick={() => this.scheduleAppt("now")}>
								Talk to a licensed agent now
							</div>
							<div className="connect" onClick={this.openModal}>
								Schedule an appointment
							</div>
						</div>
						<Modal
							isOpen={this.state.modalIsOpen}
							onRequestClose={this.closeModal}
							style={customStyles}
							contentLabel="Example"
						>
							<div className="close-modal-btn" onClick={this.closeModal}>
								<img
									alt="close_modal"
									src="https://img.icons8.com/ios/67/000000/close-window.png"
								/>
							</div>
							<div className="schedule-appointment post-child vertical-flex">
								<center>
									<p>Schedule an appointment</p>
									<form className={styles.cont} onSubmit={this.subForm}>
										<MuiPickersUtilsProvider utils={DateFnsUtils}>
											<DateTimePicker
												value={this.state.selectedDate}
												disablePast
												onChange={this.handleDateChange}
												label="Please pick a date and time"
												showTodayButton
												id="dt-scheduler"
												format="yyyy/MM/dd hh:mm a"
											/>
										</MuiPickersUtilsProvider>
										<br />
										<br />
										<input
											style={{
												margin: "2vh auto",
												float: "none",
												display: "inline-block"
											}}
											type="submit"
											value="Submit"
											className="submit"
										/>
									</form>
								</center>
							</div>
						</Modal>
					</div>
					<br />
					<div
						className="refer-friend"
						id="refer-btn"
						onClick={this.openReferralPopup}
					>
						Refer a friend
					</div>
					<div className="referral">
						<p>
							Help your friends & family take advantage of this insurance
							reform. Share through email/social media and help us get the word
							out!
						</p>
						<FacebookShareButton
							url="http://www.micoverageguru.com/"
							quote="Check out MICoverage Guru!"
						>
							<FacebookIcon size={50} round={true} />
						</FacebookShareButton>
						<FacebookMessengerShareButton
							url="http://www.micoverageguru.com/"
							appId="628466041384674"
						>
							<FacebookMessengerIcon size={50} round={true} />
						</FacebookMessengerShareButton>
						<TwitterShareButton
							url="http://www.micoverageguru.com/"
							title="Check out MICoverage Guru!"
						>
							<TwitterIcon size={50} round={true} />
						</TwitterShareButton>
						<LinkedinShareButton
							url="http://www.micoverageguru.com/"
							title="Check out MICoverage Guru!"
						>
							<LinkedinIcon size={50} round={true} />
						</LinkedinShareButton>
						<EmailShareButton
							url="http://www.micoverageguru.com/"
							subject="Check out MICoverage Guru!"
						>
							<EmailIcon size={50} round={true} />
						</EmailShareButton>
						<WhatsappShareButton
							url="http://www.micoverageguru.com/"
							title="Check out MICoverage Guru!"
						>
							<WhatsappIcon size={50} round={true} />
						</WhatsappShareButton>
					</div>
					<div style={{ paddingTop: "5vh" }}></div>
					<div className="next-page" onClick={this.back}>
						&larr; Back to Home
					</div>
					<ProgressBar
						percent={100}
						filledBackground="linear-gradient(to right, #56ccf2, #2f80ed)"
					/>
				</div>
				<Helmet>
					<script
						async
						src="https://www.googletagmanager.com/gtag/js?id=AW-618021982"
					></script>
					<script>
						{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-618021982'); gtag('event', 'conversion', {'send_to': 'AW-618021982/T9aOCMeTmdgBEN6I2aYC'}); `}
					</script>
				</Helmet>
			</div>
		);
	}
}

export default Complete;
