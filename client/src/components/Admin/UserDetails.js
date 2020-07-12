import React, { Component } from "react";
import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "../../config";
import FilterableTable from "react-filterable-table";

firebase.initializeApp(firebaseConfig);

class UserDetails extends Component {
	constructor() {
		super();
		this.state = {
			userObjs: [],
			loading: false
		};
	}
	componentWillMount() {
		if (document.cookie.indexOf("session_token=") !== -1) {
			const requestOptions = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					request: 1
				})
			};

			fetch("/api/getUserRecords", requestOptions).then(res => {
				res.json().then(data => {
					this.setState({ userObjs: data });
				});
			});
		} else {
			window.location.href = "/admin";
		}
	}
	render() {
		// Data for the table to display; can be anything

		const data = this.state.userObjs;

		// Fields to show in the table, and what object properties in the data they bind to
		const fields = [
			{
				name: "fname",
				displayName: "First Name",
				inputFilterable: true,
				sortable: true
			},
			{
				name: "lname",
				displayName: "Last Name",
				inputFilterable: true,
				sortable: true
			},
			{
				name: "email",
				displayName: "Email",
				inputFilterable: true,
				sortable: true
			},
			{
				name: "phone",
				displayName: "Phone",
				inputFilterable: true,
				sortable: true
			},
			{
				name: "apptPref",
				displayName: "Appointment Preference",
				inputFilterable: true,
				sortable: true
			}
		];
		return (
			<div>
				<h1>User Details</h1>
				<FilterableTable
					namespace="People"
					initialSort="name"
					data={data}
					fields={fields}
					noRecordsMessage="There are no people to display"
					noFilteredRecordsMessage="No people match your filters!"
				/>
			</div>
		);
	}
}

export default UserDetails;
