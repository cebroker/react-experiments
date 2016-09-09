import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import MessageItem from './MessageItem';
import { spy } from 'sinon';

chai.use(chaiEnzyme());

it('render component', () => {
	const wrapper = shallow(<MessageItem message={{}} />);
	expect(wrapper).to.exist;
})

it('has the component class', ()=> {
	const wrapper = shallow(<MessageItem message={{}} />);
	expect(wrapper).to.have.className('MessageItem');
})

it('renders a table row', () => {
	const wrapper = shallow(<MessageItem message={{}} />)
	expect(wrapper).to.be.tagName('tr')
})

it('renders 7 columns', () => {
	const wrapper = shallow(<MessageItem message={{}} />)
	expect(wrapper).to.have.exactly(7).descendants('td')
})

it('has a checkbox', ()=> {
	const message = {}
	const wrapper = shallow(<MessageItem message={message} />)
	expect(wrapper).to.have.exactly(1).descendants('input[type="checkbox"]')
})

it('should start unselected', ()=> {
	const message = {}
	const wrapper = shallow(<MessageItem message={message} />)
	expect(wrapper.state('selected')).to.equal(false);	
})

it('should toogle selected state', () => {
	const wrapper = shallow(<MessageItem message={{}} />)
	wrapper.instance().handleChange();
	expect(wrapper.state('selected')).to.be.true;
	wrapper.instance().handleChange();
	expect(wrapper.state('selected')).to.be.false;
})

it('should be selectable', () => {
	const wrapper = shallow(<MessageItem message={{}} />)
	const checkbox = wrapper.find('input[type="checkbox"]');
	checkbox.simulate('change')
	expect(wrapper.state('selected')).to.be.true;
	expect(checkbox).to.be.checked;
	checkbox.simulate('change')
	expect(wrapper.state('selected')).to.be.false;
	expect(checkbox).to.not.be.checked;
})

it('should be highlited when selected', () => {
	const wrapper = shallow(<MessageItem message={{}} />)
	wrapper.setState({selected: true});
	expect(wrapper).to.have.className('active');
	wrapper.setState({selected: false});
	expect(wrapper).to.not.have.className('active');
})

describe('attachment icon', () => {
  const icon = '<i class="fa fa-attachment"></i>';
  it('is displayed when hasAttachment prop is true', () => {
    const wrapper = shallow(<MessageItem message={{hasAttachment: true}} />);
    expect(wrapper).to.contain(<i className="fa fa-attachment"></i>)
  });
  it('is not displayed when hasAttachment prop is false', () => {
    const wrapper = shallow(<MessageItem message={{hasAttachment: false}} />);
    expect(wrapper).to.not.contain(<i className="fa fa-attachment"></i>)
  });
});

it('shows unread indicator when message.isRead', () => {
	const wrapper = shallow(<MessageItem message={{isRead: true}} />);
	expect(wrapper).to.not.contain(<i className="fa fa-circle"></i>)
	wrapper.setProps({message: {isRead: false}})
	expect(wrapper).to.contain(<i className="fa fa-circle"></i>)
})

it('calls onSelect when change', () => {
	const onSelectSpy = spy()
	const wrapper = shallow(
		<MessageItem 
			message={{id: 1}} 
			onSelect={onSelectSpy}
		/>
	);
	wrapper.instance().handleChange();
	expect(onSelectSpy.calledOnce).to.be.true;
	expect(onSelectSpy.calledWith(1, true)).to.be.true;
})




