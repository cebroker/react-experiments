import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import HelloWorld from './components/HelloWorld';

export default (
  <Route path="/" component={App}>
    <Route path="/providers/:id" component={HelloWorld} />
  </Route>
);

