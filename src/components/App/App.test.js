import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';

const user = { firstName: 'Jhon', lastName: 'Doe' };

it('renders without crashing', () => {
  shallow(<App user/>);
});

it('renders correctly - snapshot', () => {
  const tree = renderer.create(<MemoryRouter>
      <App user/>
    </MemoryRouter>);
  expect(tree).to.matchSnapshot();
});
