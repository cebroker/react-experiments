import React from 'react';
import { shallow } from 'enzyme';
import ProviderProfile from './ProviderProfile';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
 
chai.use(chaiEnzyme());

it('renders the components', () => {
	const wrapper = shallow(<ProviderProfile provider={{}} />);
	expect(wrapper).to.have.className('ProviderProfile')
})

it('renders info from props', () => {
	const provider = {
		id: 123,
		type: 'Rule/Status approved provider',
		associations: ['asoc 1', 'asoc 2'],
		phone: '(958) 859-337',
		fax: '123'
	}

	const wrapper = shallow(<ProviderProfile provider={provider} />);

	expect(wrapper).to.contain(
		<div>
			<h3>Provider Tracking #</h3>
			<p>30-123</p>
		</div>
	);

	expect(wrapper).to.contain(
		<div>
			<h3>Provider Type</h3>
			<p>Rule/Status approved provider</p>
		</div>
	);

	expect(wrapper).to.contain(
		<div>
			<h3>Associations</h3>
			<ul>
				<li>asoc 1</li>
				<li>asoc 2</li>
			</ul>
		</div>
	);
})

it('not render association section when no associations', () => {
	const provider = {
		id: 123,
		type: 'Rule/Status approved provider',
		associations: [],
		phone: '(958) 859-337',
		fax: '123'
	}

	const wrapper = shallow(<ProviderProfile provider={provider} />)
	expect(wrapper).to.not.contain(<h3>Associations</h3>);
})





