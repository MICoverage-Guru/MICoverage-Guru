import React, { Component } from "react";
import Navbar from "./Navbar";
import Question from "./Question";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

class Page1 extends Component {
	submit(e) {
		e.preventDefault();
		let elementArray = document.getElementsByClassName("question");

		for (var i = 0; i < elementArray.length; i++) {
			elementArray[i].childNodes[0].style.color = "#000000";
		}

		let q1, q2, elem;
		if (!document.querySelector("input[name=Q1]:checked")) {
			elem = document.getElementById("Q1-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
		} else if (!document.querySelector("input[name=Q2]:checked")) {
			elem = document.getElementById("Q2-qs");
			elem.style.color = "#e74c3c";
			elem.scrollIntoView();
		} else {
			q1 = document.querySelector("input[name=Q1]:checked").value;
			q2 = document.querySelector("input[name=Q2]:checked").value;
			localStorage.setItem("Q1", q1);
			localStorage.setItem("Q2", q2);
			window.location.href = "/form/2";
		}
	}

	componentWillMount() {
		if (
			!localStorage.getItem("zip_code") ||
			!localStorage.getItem("insurance_type")
		) {
			window.location.href = "/";
		}
	}

	existingValue(qid) {
		if (localStorage.getItem(qid)) {
			return localStorage.getItem(qid);
		} else {
			return "";
		}
	}

	render() {
		return (
			<div className="container">
				<Navbar />
				<div className="page">
					<form onSubmit={this.submit}>
						<div className="questions">
							<Question
								question="Do you currently have car insurance?"
								sub_question="Select 'Yes' if you have
					active car insurance as of today."
								optno="2"
								opt1="Yes"
								opt2="No"
								qid="Q1"
								val={this.existingValue("Q1")}
							/>
							<Question
								question="Do you own or rent your home?"
								sub_question="Homeowners need to protect their home and the things they own. Renters just need to cover the things they own."
								optno="4"
								opt1="Home owner"
								opt2="Condo owner"
								opt3="Renter"
								opt4="Other"
								qid="Q2"
								val={this.existingValue("Q2")}
							/>
						</div>
						<input type="submit" value="Next &rarr;" className="submit" />
					</form>
					<ProgressBar
						percent={20}
						filledBackground="linear-gradient(to right, #56ccf2, #2f80ed)"
					/>
				</div>
			</div>
		);
	}
}
export default Page1;
