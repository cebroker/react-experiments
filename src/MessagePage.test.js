import React from 'react';
import chai, { expect} from 'chai';
import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import ConnectedMessagePage, { MessagePage } from './MessagePage'
import MessageList from './MessageList'
import chaiEnzyme from 'chai-enzyme';
import MockAdapter from 'axios-mock-adapter';
import { spy } from 'sinon';

chai.use(chaiEnzyme());

const storeFake = (state) => {
	return {
		default: () => {},
		subscribe: () => {},
		dispatch: () => {},
		getState: () => {
			return { ...state };
		},
	};
};

let container;
const data = [
	{id: 123, hasAttachment: false, read: true},
	{id: 124, hasAttachment: false, read: false},
	{id: 125, hasAttachment: true, read: true}
];

beforeEach(() => {
	const store = storeFake({messages: data});

	const wrapper = mount(
		<Provider store={store}>
			<ConnectedMessagePage />
		</Provider>
	);

	container = wrapper.find(MessagePage);
});

it('renders without crashing', () => {
	expect(container).to.exist;
	expect(container.find(MessageList)).to.have.length(1);
});

it('gets items as prop', () => {
	expect(container.props().items).to.equal(data);
});

it('gets fetchMessages as props', () => {
	expect(container.props().fetchMessages).to.be.a('function')
})

it('fetchMessages is called', () => {
	const actionSpy = spy();
	const wrapper = shallow(<MessagePage fetchMessages={actionSpy} />);
	expect(actionSpy.calledOnce).to.be.true;
})