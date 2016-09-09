import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import { fetchMessages } from './actions';

export class MessagePage extends Component {
	componentWillMount() {
		this.props.fetchMessages();
	}

	render() {
		return (
			<div>
				<MessageList items={this.props.items} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { items: state.messages }
}

export default connect(mapStateToProps, { fetchMessages })(MessagePage);