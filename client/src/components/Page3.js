import React, { Component } from "react";
import Navbar from "./Navbar";
import Question from "./Question";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Cleave from "cleave.js/react";
import $ from "jquery";

class Page3 extends Component {
	constructor(props) {
		super(props);
		var nov = 1;
		if (localStorage.getItem("vehicles_data")) {
			nov = JSON.parse(localStorage.getItem("vehicles_data")).length;
		}
		this.state = {
			no_of_vehicles: nov,
			apiToken: "lDnXP2IPNnZ4Ws2V4MO40KQh8x8Bwfc3D2QX4sQsVxlSi8lndwZPNKy3hKvD"
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
			const q13_metric = document.getElementById(qid_prefix + "13-metric")
				.value;
			const q13_val = q13 + " " + q13_metric;
			if (q7 === "default") {
				elem = document.getElementById(qid_prefix + "7-qs");
				elem.style.color = "#e74c3c";
				elem.scrollIntoView();
				break;
			} else if (q8 === "default") {
				elem = document.getElementById(qid_prefix + "8-qs");
				elem.style.color = "#e74c3c";
				elem.scrollIntoView();
				break;
			} else if (q9 === "default") {
				elem = document.getElementById(qid_prefix + "9-qs");
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
					Q13: q13_val
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
		var cnp1 = cn + 1;
		setTimeout(function() {
			var elmnt = document.getElementById("v" + cnp1);
			elmnt.scrollIntoView();
		}, 100);
		setTimeout(() => this.fetchVehicleYears(cnp1), 5);
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
				setTimeout(() => this.fetchVehicleYears(j), 5);
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
						<div className="question-container">
							<div className="question">
								<p id={"v" + j + "-Q7-qs"}>Vehicle year</p>
							</div>
							<div className="question-options">
								<select
									id={"v" + j + "-Q7"}
									name={"v" + j + "-Q7"}
									className="input-select"
									onChange={() => this.fetchVehicleMakes(j)}
								>
									<option value="default">Select Year</option>
								</select>
							</div>
						</div>
						<div className="question-container">
							<div className="question">
								<p id={"v" + j + "-Q8-qs"}>Make</p>
							</div>
							<div className="question-options">
								<select
									id={"v" + j + "-Q8"}
									name={"v" + j + "-Q8"}
									className="input-select"
									onChange={() => this.fetchVehicleModels(j)}
								>
									<option value="default">Select Make</option>
								</select>
							</div>
						</div>
						<div className="question-container">
							<div className="question">
								<p id={"v" + j + "-Q9-qs"}>Model</p>
							</div>
							<div className="question-options">
								<select
									id={"v" + j + "-Q9"}
									name={"v" + j + "-Q9"}
									className="input-select"
									onChange={() => this.fetchVehicleTrims(j)}
								>
									<option value="default">Select Model</option>
								</select>
							</div>
						</div>
						<div className="question-container">
							<div className="question">
								<p id={"v" + j + "-Q10-qs"}>Trim (Optional)</p>
							</div>
							<div className="question-options">
								<select
									id={"v" + j + "-Q10"}
									name={"v" + j + "-Q10"}
									className="input-select"
								>
									<option value="default">Select Trim</option>
								</select>
							</div>
						</div>
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
						<div className="question-container" style={{ marginTop: "3vh" }}>
							<div className="question">
								<p id={"v" + j + "-Q13-qs"}>How many miles do you drive?</p>
								<p className="sub">
									Most drivers average 11,000 miles per year.
								</p>
							</div>
							<Cleave
								options={{
									numericOnly: true
								}}
								className="input inner"
								id={"v" + j + "-Q13"}
								type="tel"
								placeholder="Miles"
								title="Please enter a valid amount of miles."
								value={this.existingValue(i, "Q13")}
							/>
						</div>
						<br />
						<div className="question-container">
							<div className="question-options">
								<select
									id={"v" + j + "-Q13-metric"}
									name={"v" + j + "-Q13-metric"}
									className="input-select"
									defaultValue={this.existingValue(i, "Q13-metric")}
								>
									<option value="per year">Per Year</option>
									<option value="per month">Per Month</option>
									<option value="per week">Per Week</option>
									<option value="per day">Per Day</option>
								</select>
							</div>
						</div>
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
						<div className="question-container">
							<div className="question">
								<p id={"v" + j + "-Q7-qs"}>Vehicle year</p>
							</div>
							<div className="question-options">
								<select
									id={"v" + j + "-Q7"}
									name={"v" + j + "-Q7"}
									className="input-select"
									onInput={() => this.fetchVehicleMakes(j)}
								>
									<option value="default">Select Year</option>
								</select>
							</div>
							<div className="dropdown-loader" id={"v" + j + "-Q7-loader"}>
								Loading...
							</div>
						</div>
						<div className="question-container">
							<div className="question">
								<p id={"v" + j + "-Q8-qs"}>Make</p>
							</div>
							<div className="question-options">
								<select
									id={"v" + j + "-Q8"}
									name={"v" + j + "-Q8"}
									className="input-select"
									onChange={() => this.fetchVehicleModels(j)}
								>
									<option value="default">Select Make</option>
								</select>
							</div>
							<div className="dropdown-loader" id={"v" + j + "-Q8-loader"}>
								Loading...
							</div>
						</div>
						<div className="question-container">
							<div className="question">
								<p id={"v" + j + "-Q9-qs"}>Model</p>
							</div>
							<div className="question-options">
								<select
									id={"v" + j + "-Q9"}
									name={"v" + j + "-Q9"}
									className="input-select"
									onChange={() => this.fetchVehicleTrims(j)}
								>
									<option value="default">Select Model</option>
								</select>
							</div>
							<div className="dropdown-loader" id={"v" + j + "-Q9-loader"}>
								Loading...
							</div>
						</div>
						<div className="question-container">
							<div className="question">
								<p id={"v" + j + "-Q10-qs"}>Trim (Optional)</p>
							</div>
							<div className="question-options">
								<select
									id={"v" + j + "-Q10"}
									name={"v" + j + "-Q10"}
									className="input-select"
								>
									<option value="default">Select Trim</option>
								</select>
							</div>
							<div className="dropdown-loader" id={"v" + j + "-Q10-loader"}>
								Loading...
							</div>
						</div>
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
						<div className="question-container" style={{ marginTop: "3vh" }}>
							<div className="question">
								<p id={"v" + j + "-Q13-qs"}>How many miles do you drive?</p>
								<p className="sub">
									Most drivers average 11,000 miles per year.
								</p>
							</div>
							<Cleave
								options={{
									numericOnly: true
								}}
								className="input inner"
								id={"v" + j + "-Q13"}
								type="tel"
								placeholder="Miles"
								title="Please enter a valid amount of miles."
								value={this.existingValue(i, "Q13")}
							/>
						</div>
						<br />
						<div className="question-container">
							<div className="question-options">
								<select
									id={"v" + j + "-Q13-metric"}
									name={"v" + j + "-Q13-metric"}
									className="input-select"
									defaultValue={this.existingValue(i, "Q13-metric")}
								>
									<option value="per year">Per Year</option>
									<option value="per month">Per Month</option>
									<option value="per week">Per Week</option>
									<option value="per day">Per Day</option>
								</select>
							</div>
						</div>
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

	componentDidMount() {
		setTimeout(() => this.fetchVehicleYears(1), 50);
	}

	fetchVehicleYears = k => {
		var years_elems = document.getElementById("v" + k + "-Q7");
		years_elems.disabled = true;
		document.getElementById("v" + k + "-Q7-loader").style.display =
			"inline-block";
		years_elems.innerHTML = "<option value='default'>Select Year</option>";
		$.get(
			"https://carmakemodeldb.com/api/v1/car-lists/get/years/desc" +
				"?api_token=" +
				this.state.apiToken,
			data => {
				years_elems.disabled = false;
				document.getElementById("v" + k + "-Q7-loader").style.display = "none";
				$.each(data, (index, element) => {
					var v_index = k - 1;
					if (
						localStorage.getItem("vehicles_data") &&
						JSON.parse(localStorage.getItem("vehicles_data"))[v_index]
					) {
						if (
							element.year ===
							JSON.parse(localStorage.getItem("vehicles_data"))[v_index]["Q7"]
						) {
							years_elems.innerHTML +=
								"<option value='" +
								element.year +
								"' selected>" +
								element.year +
								"</option>";
							setTimeout(() => this.fetchVehicleMakes(k), 1);
						} else {
							years_elems.innerHTML +=
								"<option value='" +
								element.year +
								"'>" +
								element.year +
								"</option>";
						}
					} else {
						years_elems.innerHTML +=
							"<option value='" +
							element.year +
							"'>" +
							element.year +
							"</option>";
					}
				});
			}
		);
	};

	fetchVehicleMakes = k => {
		var vehicle_year = document.getElementById("v" + k + "-Q7").value;
		var makes_elems = document.getElementById("v" + k + "-Q8");
		makes_elems.disabled = true;
		document.getElementById("v" + k + "-Q8-loader").style.display =
			"inline-block";
		makes_elems.innerHTML = "<option value='default'>Select Make</option>";
		$.get(
			"https://carmakemodeldb.com/api/v1/car-lists/get/makes/" +
				vehicle_year +
				"?api_token=" +
				this.state.apiToken,
			data => {
				makes_elems.disabled = false;
				document.getElementById("v" + k + "-Q8-loader").style.display = "none";
				$.each(data, (index, element) => {
					var v_index = k - 1;
					if (
						localStorage.getItem("vehicles_data") &&
						JSON.parse(localStorage.getItem("vehicles_data"))[v_index]
					) {
						if (
							element.make ===
							JSON.parse(localStorage.getItem("vehicles_data"))[v_index]["Q8"]
						) {
							makes_elems.innerHTML +=
								"<option value='" +
								element.make +
								"' selected>" +
								element.make +
								"</option>";
							this.fetchVehicleModels(k);
						} else {
							makes_elems.innerHTML +=
								"<option value='" +
								element.make +
								"'>" +
								element.make +
								"</option>";
						}
					} else {
						makes_elems.innerHTML +=
							"<option value='" +
							element.make +
							"'>" +
							element.make +
							"</option>";
					}
				});
			}
		);
	};

	fetchVehicleModels = k => {
		var vehicle_year = document.getElementById("v" + k + "-Q7").value;
		var vehicle_make = document.getElementById("v" + k + "-Q8").value;
		var models_elems = document.getElementById("v" + k + "-Q9");
		models_elems.disabled = true;
		document.getElementById("v" + k + "-Q9-loader").style.display =
			"inline-block";
		models_elems.innerHTML = "<option value='default'>Select Model</option>";
		$.get(
			"https://carmakemodeldb.com/api/v1/car-lists/get/models/" +
				vehicle_year +
				"/" +
				vehicle_make +
				"?api_token=" +
				this.state.apiToken,
			data => {
				models_elems.disabled = false;
				document.getElementById("v" + k + "-Q9-loader").style.display = "none";
				$.each(data, (index, element) => {
					var v_index = k - 1;
					if (
						localStorage.getItem("vehicles_data") &&
						JSON.parse(localStorage.getItem("vehicles_data"))[v_index]
					) {
						if (
							element.model ===
							JSON.parse(localStorage.getItem("vehicles_data"))[v_index]["Q9"]
						) {
							models_elems.innerHTML +=
								"<option value='" +
								element.model +
								"' selected>" +
								element.model +
								"</option>";
							setTimeout(() => this.fetchVehicleTrims(k), 1);
						} else {
							models_elems.innerHTML +=
								"<option value='" +
								element.model +
								"'>" +
								element.model +
								"</option>";
						}
					} else {
						models_elems.innerHTML +=
							"<option value='" +
							element.model +
							"'>" +
							element.model +
							"</option>";
					}
				});
			}
		);
	};

	fetchVehicleTrims = k => {
		var vehicle_year = document.getElementById("v" + k + "-Q7").value;
		var vehicle_make = document.getElementById("v" + k + "-Q8").value;
		var vehicle_model = document.getElementById("v" + k + "-Q9").value;
		var trims_elems = document.getElementById("v" + k + "-Q10");
		trims_elems.disabled = true;
		document.getElementById("v" + k + "-Q10-loader").style.display =
			"inline-block";
		trims_elems.innerHTML = "<option value='default'>Select Trim</option>";
		$.get(
			"https://carmakemodeldb.com/api/v1/car-lists/get/trims/" +
				vehicle_year +
				"/" +
				vehicle_make +
				"/" +
				vehicle_model +
				"?api_token=" +
				this.state.apiToken,
			data => {
				trims_elems.disabled = false;
				document.getElementById("v" + k + "-Q10-loader").style.display = "none";
				$.each(data, (index, element) => {
					var v_index = k - 1;
					if (
						localStorage.getItem("vehicles_data") &&
						JSON.parse(localStorage.getItem("vehicles_data"))[v_index]
					) {
						if (
							element.trim ===
							JSON.parse(localStorage.getItem("vehicles_data"))[v_index]["Q10"]
						) {
							trims_elems.innerHTML +=
								"<option value='" +
								element.trim +
								"' selected>" +
								element.trim +
								"</option>";
							// setTimeout(() => this.fetchVehicleTrims(k), 1);
						} else {
							trims_elems.innerHTML +=
								"<option value='" +
								element.trim +
								"'>" +
								element.trim +
								"</option>";
						}
					} else {
						trims_elems.innerHTML +=
							"<option value='" +
							element.trim +
							"'>" +
							element.trim +
							"</option>";
					}
				});
			}
		);
	};

	existingValue(dict_id, qid) {
		if (
			localStorage.getItem("vehicles_data") &&
			JSON.parse(localStorage.getItem("vehicles_data"))[dict_id]
		) {
			if (qid === "Q13") {
				return JSON.parse(localStorage.getItem("vehicles_data"))[dict_id][
					qid
				].split(" ")[0];
			} else if (qid === "Q13-metric") {
				return JSON.parse(localStorage.getItem("vehicles_data"))
					[dict_id]["Q13"].split(" ")
					.splice(1, 2)
					.join(" ");
			} else {
				return JSON.parse(localStorage.getItem("vehicles_data"))[dict_id][qid];
			}
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
