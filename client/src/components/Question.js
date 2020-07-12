import React, { Component } from "react";
class Question extends Component {
	createElements(n) {
		var elements = [];
		let comp_props = { ...this.props };
		for (var i = 1; i <= n; i++) {
			let var_name = "opt" + i;
			let var_id = comp_props.qid + "-opt" + i;
			let input_elem;
			if (comp_props.val !== "") {
				if (comp_props.val === comp_props[var_name]) {
					input_elem = (
						<input
							id={var_id}
							name={comp_props.qid}
							type="radio"
							value={comp_props[var_name]}
							onClick={comp_props.onClick}
							defaultChecked
						/>
					);
				} else {
					input_elem = (
						<input
							id={var_id}
							name={comp_props.qid}
							type="radio"
							value={comp_props[var_name]}
							onClick={comp_props.onClick}
						/>
					);
				}
			} else {
				input_elem = (
					<input
						id={var_id}
						name={comp_props.qid}
						type="radio"
						value={comp_props[var_name]}
						onClick={comp_props.onClick}
					/>
				);
			}
			elements.push(
				<div className="md-radio md-radio-inline">
					{input_elem}
					<label for={var_id}>{comp_props[var_name]}</label>
				</div>
			);
		}
		return elements;
	}

	render() {
		return (
			<div className="question-container">
				<div className="question">
					<p id={this.props.qid + "-qs"}>{this.props.question}</p>
					<p className="sub">{this.props.sub_question}</p>
				</div>
				<div className="question-options">
					{this.createElements(this.props.optno)}
				</div>
			</div>
		);
	}
}
export default Question;
