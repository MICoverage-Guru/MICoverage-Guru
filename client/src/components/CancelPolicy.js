import React, { Component } from "react";
import Cleave from "cleave.js/react";

class CancelPolicy extends Component {
	render() {
		return (
			<div className="container">
				<div className="cancel-policy">
					<br />
					<h1>Cancel Policy</h1>
					<form action="/cancelPolicyRequest" method="POST">
						<label>Customer First Name</label>
						<input
							type="text"
							id="fname"
							name="fname"
							className="input"
							required
						/>
						<label>Customer Last Name</label>
						<input
							type="text"
							id="lname"
							name="lname"
							className="input"
							required
						/>
						<label>Customer Email</label>
						<input
							type="text"
							id="email"
							name="email"
							className="input"
							required
						/>
						<label>Insurance Carrier</label>
						<select
							id="carrier"
							name="carrier"
							className="input-select"
							required
						>
							<option value="default">Select Provider</option>
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
						</select>
						<label>Cancellation Date of Current Policy</label>
						<Cleave
							placeholder="MM/DD/YYYY"
							options={{
								numericOnly: true,
								date: true,
								delimiter: "/",
								datePattern: ["m", "d", "Y"]
							}}
							className="input inner"
							id="cancellation_date"
							name="cancellation_date"
							type="tel"
							pattern="\d{2}/\d{2}/\d{4}"
							title="Please enter a valid date"
							required
						/>
						<label>Policy number of current policy</label>
						<input
							type="text"
							id="prevpno"
							name="prevpno"
							className="input"
							required
						/>
						<label>New policy effective date</label>
						<Cleave
							placeholder="MM/DD/YYYY"
							options={{
								numericOnly: true,
								date: true,
								delimiter: "/",
								datePattern: ["m", "d", "Y"]
							}}
							className="input inner"
							name="new_policy_date"
							id="new_policy_date"
							type="tel"
							pattern="\d{2}/\d{2}/\d{4}"
							title="Please enter a valid date"
							required
						/>
						<label>Street Address</label>
						<input
							type="text"
							id="street_address"
							name="street_address"
							className="input"
							required
						/>
						<label>City</label>
						<input
							type="text"
							id="city"
							name="city"
							className="input"
							required
						/>
						<label>State</label>
						<input
							type="text"
							id="state"
							name="state"
							className="input"
							required
						/>
						<label>ZIP Code</label>
						<input type="text" id="zip" name="zip" className="input" required />
						<br />
						<br />
						<input
							type="submit"
							name="subscribe-submit"
							id="subscribe-submit"
							className="input-submit"
							value="SUBMIT"
						/>
					</form>
				</div>
				<div style={{ paddingTop: "20vh" }} />
			</div>
		);
	}
}
export default CancelPolicy;
