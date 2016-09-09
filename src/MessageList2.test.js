import React from 'react';
import Table from 'react-toolbox/lib/table';
import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import ConnectedMessageList2, { MessageList2 } from './MessageList2';
import { Provider } from 'react-redux';
import { spy } from 'sinon';

chai.use(chaiEnzyme());

let component; 

beforeEach(() => {
	const store = storeFake({messages: data.messages});

	const wrapper = mount(
		<Provider store={store}>
			<ConnectedMessageList2 />
		</Provider>
	);

	component = wrapper.find(MessageList2);
})

it('renders without crashing', () => {
	expect(component).to.be.present();
})

it('gets items as prop', () => {
	expect(component.props().items).to.equal(data.messages);
})

it('gets fetchMessages as prop', ()=> {
	expect(component.props().fetchMessages).to.be.a('function');
})

it('fetchMessages is callled', () => {
	const actionSpy = spy();
	const wrapper = shallow(<MessageList2 fetchMessages={actionSpy} />) 
	expect(actionSpy.calledOnce).to.be.true;
})

it('Table receives source data', ()=> {
	const actual = component.find(Table).props().source;
	const expected = component.props().items;
	expect(actual).to.equal(expected);
})

it('Table should not have a header', () => {
	const actual = component.find(Table).props().heading;
	expect(actual).to.be.false;
})

it('should update selected items', () => {
	const wrapper = shallow(<MessageList2 fetchMessages={spy()} />)
	const expected = [1,2,3];
	wrapper.instance().handleSelect(expected);
	const actual = wrapper.state('selected');
	expect(actual).to.eql(expected);
})

it('should be selectable', () => {
	const wrapper = shallow(<MessageList2 fetchMessages={spy()} />);
	const table = wrapper.find(Table);
	expect(table.props().selectable).to.not.be.false;
	table.simulate('select', [1,2,3]);
	expect(wrapper.state('selected')).to.eql([1,2,3]);
})

it('receives the correct model', ()=> {
	const wrapper = shallow(<MessageList2 fetchMessages={spy()} />);
	const table = wrapper.find(Table);
	expect(table.props().model).to.eql({
		id: {type: String},
		subject: {type: String}
	});
})