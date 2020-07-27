import React, { Component } from "react";
import FilterableTable from "react-filterable-table";
import AdminNav from "./AdminNav";

class IncompleteUserDetails extends Component {
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

			fetch("/api/getIncompleteUserRecords", requestOptions).then(res => {
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
				name: "address",
				displayName: "Address",
				inputFilterable: true,
				sortable: true
			},
			{
				name: "zip_code",
				displayName: "ZIP Code",
				inputFilterable: true,
				sortable: true
			},
			{
				name: "insurance_type",
				displayName: "Insurance Type",
				inputFilterable: true,
				sortable: true
			},
			{
				name: "isInsured",
				displayName: "Insured",
				inputFilterable: true,
				sortable: true
			},
			{
				name: "home",
				displayName: "Own/Rent Home",
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
				<h1 className="admin-heading">Incomplete User Details</h1>
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

export default IncompleteUserDetails;
