import React, { Component } from "react";
import Navbar from "./Navbar";
import TextQuestion from "./TextQuestion";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import Cleave from "cleave.js/react";

class Page2 extends Component {
	submit(e) {
		e.preventDefault();
		const q3 = document.getElementById("react-google-places-autocomplete-input")
			.value;
		const unit = document.getElementById("unit").value;
		const address = "Unit: " + unit + "; " + q3;
		const q4 = document.getElementById("Q4").value;
		const q5 = document.getElementById("Q5").value;
		const q6 = document.getElementById("Q6").value;

		let elementArray = document.getElementsByClassName("question");

		for (var i = 0; i < elementArray.length; i++) {
			elementArray[i].childNodes[0].style.color = "#000000";
		}

		let elem;
		if (q3 === "") {
			elem = document.getElementById("Q3-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
		} else if (q4 === "") {
			elem = document.getElementById("Q4-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
		} else if (q5 === "") {
			elem = document.getElementById("Q4-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
		} else if (q6 === "") {
			elem = document.getElementById("Q4-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
		} else {
			localStorage.setItem("Q3", address);
			localStorage.setItem("Q4", q4);
			localStorage.setItem("Q5", q5);
			localStorage.setItem("Q6", q6);
			window.location.href = "/form/3";
		}
	}

	componentWillMount() {
		if (!localStorage.getItem("Q1") || !localStorage.getItem("Q2")) {
			window.location.href = "/form/1";
		}
	}

	existingValue(qid) {
		if (localStorage.getItem(qid)) {
			if (qid === "Q3") {
				return localStorage
					.getItem(qid)
					.split(";")[1]
					.trim();
			}
			return localStorage.getItem(qid);
		} else if (qid === "unit") {
			if (localStorage.getItem("Q3")) {
				return localStorage
					.getItem("Q3")
					.split(";")[0]
					.split(":")[1]
					.trim();
			} else {
				return "";
			}
		} else {
			return "";
		}
	}

	back() {
		window.location.href = "/form/1";
	}

	render() {
		return (
			<div className="container">
				<Navbar />
				<div className="page">
					<form onSubmit={this.submit} autoComplete="off">
						<div className="questions">
							<div className="question-container" style={{ marginTop: "3vh" }}>
								<div className="question">
									<p id="Q3-qs">Where do you park your cars overnight?</p>
									<p className="sub">
										Insurance rates vary depending on your ZIP code.
									</p>
								</div>
								<GooglePlacesAutocomplete
									placeholder="Address"
									inputClassName="input inner"
									initialValue={this.existingValue("Q3")}
									suggestionsClassNames={{
										container: "address-suggestions",
										suggestion: "address-suggestion",
										suggestionActive: "address-suggestion-active"
									}}
									autocompletionRequest={{
										componentRestrictions: {
											country: ["us"]
										}
									}}
								/>
							</div>
							<TextQuestion
								qid="unit"
								label="Unit# (Optional)"
								val={this.existingValue("unit")}
								req={false}
							/>
							<TextQuestion
								question="Tell us a little about yourself"
								qid="Q4"
								label="First Name"
								val={this.existingValue("Q4")}
							/>
							<TextQuestion
								qid="Q5"
								label="Last Name"
								val={this.existingValue("Q5")}
							/>
							<div className="question-container" style={{ marginTop: "4vh" }}>
								<Cleave
									placeholder="Date of Birth (MM/DD/YYYY)"
									options={{
										date: true,
										delimiter: "/",
										datePattern: ["m", "d", "Y"]
									}}
									className="input inner"
									id="Q6"
									value={this.existingValue("Q6")}
								/>
							</div>
						</div>
						<div className="next-page" onClick={this.back}>
							&larr; Go Back
						</div>
						<input type="submit" value="Next &rarr;" className="submit" />
					</form>
					<ProgressBar
						percent={40}
						filledBackground="linear-gradient(to right, #56ccf2, #2f80ed)"
					/>
				</div>
			</div>
		);
	}
}
export default Page2;
