import React, { Component } from "react";
import FilterableTable from "react-filterable-table";
import AdminNav from "./AdminNav";

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
			window.location.href = "/agent";
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
			},
			{
				name: "submission_timestamp",
				displayName: "Submission Timestamp",
				inputFilterable: true,
				sortable: true
			}
		];
		return (
			<div>
				<AdminNav />
				<h1 className="admin-heading">User Details</h1>
				<FilterableTable
					namespace="People"
					initialSort="submission_timestamp"
					initialSortDir={false}
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
