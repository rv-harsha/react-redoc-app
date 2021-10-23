import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RedocStandalone } from 'redoc';

class App extends Component {
  render() {
    return (
      <div className="App">

<RedocStandalone
specUrl="http://172.30.80.79:5000/sample-swagger.json"
options={{
nativeScrollbars: false,
theme: { colors: { primary: { main: '#ff4500' }} },
}}
/>
      </div>
    );
  }
}

export default App;
