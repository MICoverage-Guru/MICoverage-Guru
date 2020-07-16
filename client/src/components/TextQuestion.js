import React, { Component } from "react";
class TextQuestion extends Component {
	render() {
		let input_elem;
		if (this.props.max_chars) {
			input_elem = (
				<input
					id={this.props.qid}
					name={this.props.qid}
					className="input inner"
					type={this.props.type}
					placeholder={this.props.label}
					maxLength={this.props.max_chars}
					defaultValue={this.props.val}
				/>
			);
		} else {
			input_elem = (
				<input
					id={this.props.qid}
					name={this.props.qid}
					className="input inner"
					type={this.props.type}
					placeholder={this.props.label}
					defaultValue={this.props.val}
				/>
			);
		}
		return (
			<div className="question-container">
				<div className="question">
					<p id={this.props.qid + "-qs"}>{this.props.question}</p>
					<p className="sub">{this.props.sub_question}</p>
				</div>
				<div className="question-options">{input_elem}</div>
			</div>
		);
	}
}
export default TextQuestion;
