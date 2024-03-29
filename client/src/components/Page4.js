import React, { Component } from "react";
import Navbar from "./Navbar";
import Question from "./Question";
import TextQuestion from "./TextQuestion";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Swal from "sweetalert2";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";

class Page4 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dealership: 0,
			insured: 0
		};
		this.submit = this.submit.bind(this);
	}
	submit(e) {
		e.preventDefault();
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true
		});

		let submitFlag = true;

		let elementArray = document.getElementsByClassName("question");

		for (var i = 0; i < elementArray.length; i++) {
			elementArray[i].childNodes[0].style.color = "#000000";
		}

		let elem;
		const q6 = document.getElementById("Q6").value;
		const q27 = document.getElementById("Q27").value;
		if (!document.querySelector("input[name=Q14]:checked")) {
			elem = document.getElementById("Q14-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
			submitFlag = false;
		} else if (!document.querySelector("input[name=Q15]:checked")) {
			elem = document.getElementById("Q15-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
			submitFlag = false;
		} else if (!document.querySelector("input[name=Q16]:checked")) {
			elem = document.getElementById("Q16-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
			submitFlag = false;
		} else if (!document.querySelector("input[name=Q17]:checked")) {
			elem = document.getElementById("Q17-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
			submitFlag = false;
		} else if (q6 === "") {
			elem = document.getElementById("Q6-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
			submitFlag = false;
		} else if (q27 === "") {
			elem = document.getElementById("Q27-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
			submitFlag = false;
		} else if (!document.querySelector("input[name=Q26]:checked")) {
			elem = document.getElementById("Q26-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
			submitFlag = false;
		}

		if (this.state.dealership === 1) {
			if (document.getElementById("Q28").value === "") {
				elem = document.getElementById("Q28-qs");
				elem.style.color = "#e74c3c";
				elem.scrollIntoView();
				submitFlag = false;
			}
		}

		if (this.state.insured === 1) {
			const q19 = document.getElementById("Q19").value;
			if (q19 === "default") {
				elem = document.getElementById("Q19-qs");
				elem.style.color = "#e74c3c";
				elem.scrollIntoView();
				submitFlag = false;
			}
		}

		if (submitFlag) {
			const q14 = document.querySelector("input[name=Q14]:checked").value;
			const q15 = document.querySelector("input[name=Q15]:checked").value;
			const q16 = document.querySelector("input[name=Q16]:checked").value;
			const q17 = document.querySelector("input[name=Q17]:checked").value;
			const q26 = document.querySelector("input[name=Q26]:checked").value;
			localStorage.setItem("Q14", q14);
			localStorage.setItem("Q15", q15);
			localStorage.setItem("Q16", q16);
			localStorage.setItem("Q17", q17);
			if (document.getElementsByName("Q19").length !== 0) {
				localStorage.setItem("Q19", document.getElementById("Q19").value);
			}
			localStorage.setItem("Q6", q6);
			localStorage.setItem("Q26", q26);
			localStorage.setItem("Q27", q27);
			localStorage.setItem(
				"submission_timestamp",
				new Date().toLocaleString("en-GB", { timeZone: "America/Detroit" })
			);
			if (this.state.dealership) {
				localStorage.setItem("Q28", document.getElementById("Q28").value);
			}
			Toast.fire({
				icon: "info",
				title: "Submitting responses..."
			});
			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(localStorage)
			};
			fetch("/api/submitInsuranceRequest", requestOptions)
				.then(response => response.json())
				.then(data => {
					if (data.success === 1) {
						window.location.href = "/complete";
					}
				});
		}
	}

	componentWillMount() {
		if (!localStorage.getItem("vehicles_data")) {
			window.location.href = "/form/3";
		}
	}

	componentDidMount() {
		var isInsured = localStorage.getItem("Q1") === "Yes" ? true : false;
		if (isInsured) {
			this.setState({ insured: 1 });
		}
		var isDealership =
			localStorage.getItem("Q26") === "Dealership" ? true : false;
		if (isDealership) {
			this.setState({ dealership: 1 });
		}
	}

	existingValue(qid) {
		if (localStorage.getItem(qid)) {
			return localStorage.getItem(qid);
		} else {
			return "";
		}
	}

	showDealershipInput = () => {
		let input_value = document.querySelector("input[name=Q26]:checked").value;
		if (input_value === "Dealership") {
			this.setState({ dealership: 1 });
		} else {
			this.setState({ dealership: 0 });
		}
	};

	back() {
		window.location.href = "/form/3";
	}

	render() {
		var has_insurance = localStorage.getItem("Q1") === "Yes" ? true : false;
		var insurance_questions, dealership_question;
		if (has_insurance) {
			insurance_questions = (
				<>
					<div className="question-container">
						<div className="question">
							<p id="Q19-qs">Current Provider</p>
						</div>
						<div className="question-options">
							<select id="Q19" name="Q19" className="input-select" type="text">
								<option value="default">Select Provider</option>
								<option value="I’d prefer not to say">
									I’d prefer not to say
								</option>
								<option value="21st Century">21st Century</option>
								<option value="AAA">AAA</option>
								<option value="AARP">AARP</option>
								<option value="Acceptance">Acceptance</option>
								<option value="Affirmative">Affirmative</option>
								<option value="AIG">AIG</option>
								<option value="Allstate">Allstate</option>
								<option value="AmFam">AmFam</option>
								<option value="Amica">Amica</option>
								<option value="AmWINS">AmWINS</option>
								<option value="ASI">ASI</option>
								<option value="Auto Club">Auto Club</option>
								<option value="CAARP">CAARP</option>
								<option value="COUNTRY">COUNTRY</option>
								<option value="CSE">CSE</option>
								<option value="Dairyland">Dairyland</option>
								<option value="Direct General">Direct General</option>
								<option value="Electric">Electric</option>
								<option value="Elephant">Elephant</option>
								<option value="Empower">Empower</option>
								<option value="Encompass">Encompass</option>
								<option value="Erie">Erie</option>
								<option value="Esurance">Esurance</option>
								<option value="Farmers">Farmers</option>
								<option value="Fidelity National">Fidelity National</option>
								<option value="Firemans Fund">Firemans Fund</option>
								<option value="Foremost">Foremost</option>
								<option value="Gainsco">Gainsco</option>
								<option value="GEICO">GEICO</option>
								<option value="GeoVera">GeoVera</option>
								<option value="GMAC">GMAC</option>
								<option value="Hartford">Hartford</option>
								<option value="High Point">High Point</option>
								<option value="iMingle">iMingle</option>
								<option value="Infinity">Infinity</option>
								<option value="Kemper Specialty">Kemper Specialty</option>
								<option value="Liberty Mutual">Liberty Mutual</option>
								<option value="Mapfre">Mapfre</option>
								<option value="Mendota">Mendota</option>
								<option value="Mercury">Mercury</option>
								<option value="MetLife">MetLife</option>
								<option value="Nationwide">Nationwide</option>
								<option value="Progressive">Progressive</option>
								<option value="SafeAuto">SafeAuto</option>
								<option value="Safeco">Safeco</option>
								<option value="Selective Flood">Selective Flood</option>
								<option value="Shelter Insurance">Shelter Insurance</option>
								<option value="State Auto">State Auto</option>
								<option value="State Farm">State Farm</option>
								<option value="The General">The General</option>
								<option value="Titan">Titan</option>
								<option value="Travelers">Travelers</option>
								<option value="Unitrin">Unitrin</option>
								<option value="USAA">USAA</option>
								<option value="Viking">Viking</option>
								<option value="Other">Other</option>
							</select>
						</div>
					</div>
				</>
			);
		}
		if (this.state.dealership === 1) {
			dealership_question = (
				<TextQuestion
					question="Name of dealership/agent"
					qid="Q28"
					type="text"
				/>
			);
		}
		return (
			<div className="container">
				<Navbar />
				<div className="page">
					<form onSubmit={this.submit}>
						<div className="questions">
							<p
								className="question-heading"
								style={{ textAlign: "left", marginLeft: "1vw" }}
							>
								Driver Information
							</p>
							<Question
								question="Gender"
								sub_question="Please select the gender listed on your driver's license."
								optno="2"
								opt1="Male"
								opt2="Female"
								qid="Q14"
								val={this.existingValue("Q14")}
							/>
							<Question
								question="Marital Status"
								optno="4"
								opt1="Single"
								opt2="Married"
								opt3="Divorced"
								opt4="Widowed"
								qid="Q15"
								val={this.existingValue("Q15")}
							/>
							<Question
								question="Credit Score"
								optno="5"
								opt1="Excellent (720+)"
								opt2="Good (680-719)"
								opt3="Average (580-679)"
								opt4="Poor (Below 580)"
								opt5="I’d prefer not to say"
								qid="Q16"
								val={this.existingValue("Q16")}
							/>
							<Question
								question="Highest level of education"
								optno="5"
								opt1="Doctoral"
								opt2="Masters"
								opt3="Bachelors"
								opt4="High School"
								opt5="Other"
								qid="Q17"
								val={this.existingValue("Q17")}
							/>
							{insurance_questions}
							<div className="question-container" style={{ marginTop: "4vh" }}>
								<div className="question">
									<p id="Q6-qs">Date of Birth</p>
								</div>
								<Cleave
									placeholder="MM/DD/YYYY"
									options={{
										numericOnly: true,
										date: true,
										delimiter: "/",
										datePattern: ["m", "d", "Y"]
									}}
									className="input inner"
									id="Q6"
									type="tel"
									pattern="\d{2}/\d{2}/\d{4}"
									title="Please enter a valid date of birth."
									value={this.existingValue("Q6")}
								/>
							</div>
							<div className="question-container" style={{ marginTop: "3vh" }}>
								<div className="question">
									<p id="Q27-qs">Phone Number</p>
									<p className="sub">
										Our agents will contact you with customized quotes to
										increase your savings.
									</p>
								</div>
								<Cleave
									options={{
										numericOnly: true,
										blocks: [0, 3, 0, 3, 4],
										delimiters: ["(", ")", "-"]
									}}
									className="input inner"
									id="Q27"
									pattern=".{14}"
									type="tel"
									title="Please enter a valid phone number."
									value={this.existingValue("Q27")}
								/>
							</div>
							<Question
								question="How did you hear about us?"
								optno="7"
								opt1="Facebook"
								opt2="Google"
								opt3="Twitter"
								opt4="Instagram"
								opt5="Print Media"
								opt6="Dealership"
								opt7="Other"
								qid="Q26"
								onClick={this.showDealershipInput}
								val={this.existingValue("Q26")}
							/>
							{dealership_question}
						</div>
						<div className="next-page" onClick={this.back}>
							&larr; Go Back
						</div>
						<input type="submit" value="Submit" className="submit" />
						<ProgressBar
							percent={80}
							filledBackground="linear-gradient(to right, #56ccf2, #2f80ed)"
						/>
					</form>
				</div>
			</div>
		);
	}
}
export default Page4;
