import React, { Component } from 'react';
import Header from './components/Header.jsx';
import index from './index.css';
import AsideLeft from './components/AsideLeft.jsx';
import AsideRight from './components/AsideRight.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <AsideLeft />
        <AsideRight />
      </div>
    );
  }
}

export default App;
