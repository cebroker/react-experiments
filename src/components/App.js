import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import logo from '../logo.svg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Experiments</h2>
        </div>
        <div className="App-content">
          <Grid>
            <Row>
              {this.props.children}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
