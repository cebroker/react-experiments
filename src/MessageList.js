import React, { Component } from 'react';
import MessageItem from './MessageItem';
import styles from 'react-toolbox/lib/table/theme.scss';

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
			<table className={styles.table}>
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>
		)
	}
}