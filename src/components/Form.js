import React from "react";

export class Form extends React.Component {
	state = {
		todo: '',
	};

	onChange = (e) => {
		this.setState({
			todo: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodoItem(this.state);
		this.setState({
			todo: ''
		})
	};
	render() {
		return (
			<div className="row">
				<form className="col s12" onSubmit={this.onSubmit}>
					<div className="row">
						<div className="input-field col s11">
							<input
								id="todo"
								type="text"
								autofuces
								onChange={this.onChange}
								value={this.state.todo}
							/>
						</div>
						<div className="input-field col s1">
							<button
								className="btn waves-effect waves-light"
								type="submit"
								name="action"
							>
								Add
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
