import React, { Component } from 'react';

export default class MessageItem extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			selected: false
		}
	}

	handleChange() {
		const newState = !this.state.selected;
		if (this.props.onSelect) {
			const { message } = this.props;
			this.props.onSelect(message.id, newState );
		}

		this.setState({
			selected: newState
		})
	}

	render() {
		const { hasAttachment, isRead, subject } = this.props.message;

		return (
			<tr className={`MessageItem ${this.state.selected ? 'active' : ''}`}>
				<td>
					<input type="checkbox" checked={this.state.selected} onChange={this.handleChange} />
				</td>
				<td>
					<span>{subject}</span>
				</td>
				<td>
					{hasAttachment ? <i className="fa fa-attachment"></i> : ''}
				</td>
				<td></td>
				<td>
					{isRead ? '' : <i className="fa fa-circle" />}
				</td>
				<td></td>
				<td></td>
			</tr>
		)
	}
}

MessageItem.propTypes = {
	message: React.PropTypes.object.isRequired,
	onSelect: React.PropTypes.func
}