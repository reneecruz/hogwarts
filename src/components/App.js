import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import FilterBar from './FilterBar';
import HogList from './HogList'
import hogs from '../porkers_data';

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < FilterBar />
          < HogList hogs={hogs}/>
      </div>
    )
  }
}

export default App;
