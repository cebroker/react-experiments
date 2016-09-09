import React, { Component } from 'react';
import MessageItem from './MessageItem';

export default class MessageList extends Component {

	renderItems() {
		const { items } = this.props;
		if (!items) return null;

		return items.map((item) => {
			return <MessageItem key={item.id} message={item} />
		})
	}

	render() {
		return (
			<table>
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		)
	}
}