import React, { Component } from "react";
import Navbar from "./Navbar";
import TextQuestion from "./TextQuestion";
import Question from "./Question";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

class Page3 extends Component {
	constructor(props) {
		super(props);
		var nov = 1;
		if (localStorage.getItem("vehicles_data")) {
			nov = JSON.parse(localStorage.getItem("vehicles_data")).length;
		}
		this.state = {
			no_of_vehicles: nov
		};
		this.addVehicle = this.addVehicle.bind(this);
		this.submit = this.submit.bind(this);
		this.deleteVehicle = this.deleteVehicle.bind(this);
	}
	submit(e) {
		e.preventDefault();
		let elementArray = document.getElementsByClassName("question");

		for (var k = 0; k < elementArray.length; k++) {
			elementArray[k].childNodes[0].style.color = "#000000";
		}

		let elementArray1 = document.getElementsByClassName("vehicle-heading");

		for (var n = 0; n < elementArray1.length; n++) {
			elementArray1[n].childNodes[0].style.color = "#000000";
		}

		let elem;
		var i = 1;
		var main_array = [];
		while (i <= this.state.no_of_vehicles) {
			var dict = {};
			var qid_prefix = "v" + i + "-Q";
			const q7 = document.getElementById(qid_prefix + "7").value;
			const q8 = document.getElementById(qid_prefix + "8").value;
			const q9 = document.getElementById(qid_prefix + "9").value;
			const q10 = document.getElementById(qid_prefix + "10").value;
			const q13 = document.getElementById(qid_prefix + "13").value;
			if (q7 === "") {
				elem = document.getElementById("v" + i + "-heading");
				elem.style.color = "#e74c3c";
				elem.scrollIntoView();
				break;
			} else if (q8 === "") {
				elem = document.getElementById("v" + i + "-heading");
				elem.style.color = "#e74c3c";
				elem.scrollIntoView();
				break;
			} else if (q9 === "") {
				elem = document.getElementById("v" + i + "-heading");
				elem.style.color = "#e74c3c";
				elem.scrollIntoView();
				break;
			} else if (
				!document.querySelector("input[name=" + qid_prefix + "11]:checked")
			) {
				elem = document.getElementById(qid_prefix + "11-qs");
				elem.style.color = "#e74c3c";
				elem.scrollIntoView();
				break;
			} else if (
				!document.querySelector("input[name=" + qid_prefix + "12]:checked")
			) {
				elem = document.getElementById(qid_prefix + "12-qs");
				elem.style.color = "#e74c3c";
				elem.scrollIntoView();
				break;
			} else if (q13 === "") {
				elem = document.getElementById(qid_prefix + "13-qs");
				elem.style.color = "#e74c3c";
				elem.scrollIntoView();
				break;
			} else {
				const q11 = document.querySelector(
					"input[name=" + qid_prefix + "11]:checked"
				).value;
				const q12 = document.querySelector(
					"input[name=" + qid_prefix + "12]:checked"
				).value;
				dict = {
					id: "Vehicle " + i,
					Q7: q7,
					Q8: q8,
					Q9: q9,
					Q10: q10,
					Q11: q11,
					Q12: q12,
					Q13: q13
				};
				main_array.push(dict);
				i++;
			}
		}
		if (main_array.length === this.state.no_of_vehicles) {
			localStorage.setItem("vehicles_data", JSON.stringify(main_array));
			window.location.href = "/form/4";
		}
	}

	addVehicle() {
		var current_no = this.state.no_of_vehicles;
		var cn = current_no;
		this.setState({ no_of_vehicles: current_no + 1 });
		setTimeout(function() {
			var cnp1 = cn + 1;
			var elmnt = document.getElementById("v" + cnp1);
			elmnt.scrollIntoView();
		}, 100);
	}

	deleteVehicle(vid) {
		if (!window.confirm("Are you sure you want to delete this vehicle?"))
			return false;
		if (localStorage.getItem("vehicles_data")) {
			var vd = localStorage.getItem("vehicles_data");
			vd = JSON.parse(vd);
			vd.splice(vid - 1, 1);
			if (vd.length === 0) {
				localStorage.removeItem("vehicles_data");
			} else if (vd.length > 0) {
				localStorage.setItem("vehicles_data", JSON.stringify(vd));
			}
		}
		var current_no = this.state.no_of_vehicles;
		this.setState({ no_of_vehicles: current_no - 1 });
	}

	createVehicleElements() {
		var vehicle_units = [];
		for (var i = 0; i < this.state.no_of_vehicles; i++) {
			const j = i + 1;
			if (j !== 1) {
				vehicle_units.push(
					<div className="vehicle-unit" key={"v" + j}>
						<div className="vehicle-heading" id={"v" + j}>
							<p id={"v" + j + "-heading"}>Vehicle {j}</p>
							<div
								className="delete-vehicle"
								onClick={() => {
									if (window.confirm) this.deleteVehicle(j);
								}}
							>
								Delete
							</div>
						</div>
						<br />
						<br />
						<br />
						<br />
						<TextQuestion
							qid={"v" + j + "-Q7"}
							max_chars="4"
							label="Vehicle year (YYYY)"
							val={this.existingValue(i, "Q7")}
						/>
						<TextQuestion
							qid={"v" + j + "-Q8"}
							label="Make (Example: Honda)"
							val={this.existingValue(i, "Q8")}
						/>
						<TextQuestion
							qid={"v" + j + "-Q9"}
							label="Model (Example: Civic)"
							val={this.existingValue(i, "Q9")}
						/>
						<TextQuestion
							qid={"v" + j + "-Q10"}
							label="Trim (Example: Sport) (Optional)"
							val={this.existingValue(i, "Q10")}
							req={false}
						/>
						<Question
							question="Do you own or lease this vehicle?"
							optno="3"
							opt1="Own-paid in full"
							opt2="Own-making payments"
							opt3="Lease"
							qid={"v" + j + "-Q11"}
							val={this.existingValue(i, "Q11")}
						/>
						<Question
							question="What do you mostly use it for?"
							optno="4"
							opt1="Personal commuting"
							opt2="Pleasure"
							opt3="Rideshare"
							opt4="Farm"
							qid={"v" + j + "-Q12"}
							val={this.existingValue(i, "Q12")}
						/>
						<TextQuestion
							question="How many miles do you drive (per year)?"
							sub_question="Most drivers average 11,000 miles per year."
							qid={"v" + j + "-Q13"}
							val={this.existingValue(i, "Q13")}
						/>
					</div>
				);
			} else {
				vehicle_units.push(
					<div className="vehicle-unit" key={"v" + j}>
						<div className="vehicle-heading" id={"v" + j}>
							<p id={"v" + j + "-heading"}>Vehicle {j}</p>
						</div>
						<br />
						<br />
						<br />
						<br />
						<TextQuestion
							qid={"v" + j + "-Q7"}
							label="Vehicle year (YYYY)"
							max_chars="4"
							val={this.existingValue(i, "Q7")}
						/>
						<TextQuestion
							qid={"v" + j + "-Q8"}
							label="Make (Example: Honda)"
							val={this.existingValue(i, "Q8")}
						/>
						<TextQuestion
							qid={"v" + j + "-Q9"}
							label="Model (Example: Civic)"
							val={this.existingValue(i, "Q9")}
						/>
						<TextQuestion
							qid={"v" + j + "-Q10"}
							label="Trim (Example: Sport) (Optional)"
							val={this.existingValue(i, "Q10")}
							req={false}
						/>
						<Question
							question="Do you own or lease this vehicle?"
							optno="3"
							opt1="Own-paid in full"
							opt2="Own-making payments"
							opt3="Lease"
							qid={"v" + j + "-Q11"}
							val={this.existingValue(i, "Q11")}
						/>
						<Question
							question="What do you mostly use it for?"
							optno="4"
							opt1="Personal commuting"
							opt2="Pleasure"
							opt3="Rideshare"
							opt4="Farm"
							qid={"v" + j + "-Q12"}
							val={this.existingValue(i, "Q12")}
						/>
						<TextQuestion
							question="How many miles do you drive (per year)?"
							sub_question="Most drivers average 11,000 miles per year."
							label="Miles"
							qid={"v" + j + "-Q13"}
							val={this.existingValue(i, "Q13")}
						/>
					</div>
				);
			}
		}
		return vehicle_units;
	}

	componentWillMount() {
		if (!localStorage.getItem("Q3") || !localStorage.getItem("Q4")) {
			window.location.href = "/form/2";
		}
	}

	existingValue(dict_id, qid) {
		if (
			localStorage.getItem("vehicles_data") &&
			JSON.parse(localStorage.getItem("vehicles_data"))[dict_id]
		) {
			return JSON.parse(localStorage.getItem("vehicles_data"))[dict_id][qid];
		} else {
			return "";
		}
	}

	back() {
		window.location.href = "/form/2";
	}

	render() {
		return (
			<div className="container">
				<Navbar />
				<div className="page">
					<form onSubmit={this.submit}>
						<div className="questions">
							<p className="question-heading" style={{ textAlign: "left" }}>
								Tell us about your vehicles
							</p>
							{this.createVehicleElements()}
							<br />
							<br />
							<div className="next-page" onClick={this.addVehicle}>
								&#43; &nbsp; Add Vehicle
							</div>
						</div>
						<div className="next-page" onClick={this.back}>
							&larr; Go Back
						</div>
						<input type="submit" value="Next &rarr;" className="submit" />
					</form>
					<ProgressBar
						percent={60}
						filledBackground="linear-gradient(to right, #56ccf2, #2f80ed)"
					/>
				</div>
			</div>
		);
	}
}
export default Page3;
