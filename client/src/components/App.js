import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }
  // componentDidMount() {

  // }
  render() {
    fetch('http://localhost:3001/')
      .then(res => res.text())
      .then(res => this.setState({ data: res }));
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.data}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
