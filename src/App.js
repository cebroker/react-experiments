import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
import MessagePage from './MessagePage';

class App extends Component {
  render() {
    return (
      <div className={`${styles.app} text`}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MessagePage />
      </div>
    );
  }
}

export default App;
