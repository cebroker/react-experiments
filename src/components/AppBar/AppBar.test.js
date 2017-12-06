import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import AppBar from './AppBar';

chai.use(chaiEnzyme());

it('renders without crasing', () => {
  shallow(<AppBar />);
});

it('has the component class', () => {
  const wrapper = shallow(<AppBar />);
  expect(wrapper).to.have.className('AppBar');
});

it('support other classes', () => {
  const wrapper = shallow(<AppBar className="foo" />);
  expect(wrapper).to.have.className("foo");
  expect(wrapper).to.have.className('AppBar');
});

it('passes other props down', () => {
  const wrapper = shallow(<AppBar data-foo="foo" data-bar="bar" />);
  expect(wrapper).to.have.prop("data-foo", "foo");
  expect(wrapper).to.have.prop("data-bar", "bar");
});

it('renders children', () => {
  const wrapper = shallow(<AppBar><span>foo</span></AppBar>);
  expect(wrapper).to.contain(<span>foo</span>)
});
