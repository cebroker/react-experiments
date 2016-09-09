import React, { Component } from 'react';
import Table from 'react-toolbox/lib/table';
import { connect } from 'react-redux';
import { fetchMessages } from './actions';

const model = {
  id: {type: String},
  subject: {type: String},
  test: <i className="fa fa-attachment">TEST</i>
};

export class MessageList2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: []
		};
	}

	componentWillMount() {
		this.props.fetchMessages();
	}

	handleSelect(selected) {
		this.setState({selected});
	}

	render() {
		return (
			<Table 
				model={model} 
				source={this.props.items} 
				heading={false}
				selected={this.state.selected}
				onSelect={this.handleSelect.bind(this)}
			 />
		)
	}
}

function mapStateToProps(state) {
	return {items: state.messages};
}

export default connect(mapStateToProps, { fetchMessages })(MessageList2);