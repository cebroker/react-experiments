import React from 'react'
import { shallow } from 'enzyme'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import MessageList from './MessageList'
import MessageItem from './MessageItem'

chai.use(chaiEnzyme())

it('renders without crashing', () => {
	const wrapper = shallow(<MessageList items={[]} />);
	expect(wrapper).to.be.tagName('table')
})

it('renders some items', () => {
	const items = [
		{id: 123, hasAttachment: false, read: true},
		{id: 124, hasAttachment: false, read: false},
		{id: 125, hasAttachment: true, read: true}
	]
	const wrapper = shallow(<MessageList items={items} />)
	expect(wrapper.find(MessageItem)).to.have.length(3)
})

it('renders no items', () => {
	const items = [];
	const wrapper = shallow(<MessageList items={items} />)
	expect(wrapper.find(MessageItem)).to.have.length(0)
})

it('renders undefined items', () => {
	const wrapper = shallow(<MessageList items={undefined} />)
	expect(wrapper.find(MessageItem)).to.have.length(0)
})
