import React, { Component } from 'react';

export default class ProviderProfile extends Component {
	constructor(props) {
		super(props)
	}

	renderAssociations() {
		const { associations } = this.props.provider;

		if (!associations || !associations.length) {
			return <div></div>;
		}

		return (
			<div>
				<h3>Associations</h3>
				<ul>
					{associations.map(item => <li key={item}>{item}</li>)}
				</ul>
			</div>
		);
	}

	render() {
		const { id, type, phone } = this.props.provider;

		return(
			<div className="ProviderProfile">
				<div>
					<h3>Provider Tracking #</h3>
				   	<p>{`30-${id}`}</p>
				</div>
				<div>
					<h3>Provider Type</h3>
					<p>{type}</p>
				</div>
				{this.renderAssociations()}
			</div>
		)
	}
}

ProviderProfile.propTypes = {
	provider: React.PropTypes.object.isRequired
}