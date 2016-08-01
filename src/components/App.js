import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
// import logo from '../images/logo.svg';
import './App.scss';
import { Link } from 'react-router';
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/images/logo.svg" className="App-logo" alt="logo" />
          <h2>React Experiments</h2>
        </div>
        <div className="App-content">
          <Grid>
            <Row>
              <Link to="/providers/1">Go to provider 1</Link>
              {this.props.children}
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>React Experiments</h2>
//         </div>
//         <div className="App-content">
//           <Grid>
//             <Row>
//               {this.props.children}
//             </Row>
//           </Grid>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
