import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import FilterBar from './FilterBar';
import HogList from './HogList'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    filterStatus: false,
    sortValue: ''
  }

  handleSort = (e) => {
    // console.log("hi from Sort handle")
    this.setState({
      sortValue: e.target.value
    })
  }

  handleFilter = () => {
    // console.log("handleFilter")
    this.setState({
      filterStatus: !this.state.filterStatus
    })
  }

  sortHogs = (hogs) => {
    if(this.state.sortValue === "name"){
      return [...hogs].sort((a,b) =>{
        if (a.name > b.name){
          return 1
        }else if (a.name < b.name){
          return -1
        }else {
          return 0
        }
      })
    } else if (this.state.sortValue === "weight") {
      return [...hogs].sort((a,b) => {
        if (a.weight < b.weight) {
          return 1
        }else if (a.weight > b.weight) {
          return -1
        }else {
          return 0
        }
      })
    } else {
      return hogs
    }

  }


  render() {
    
    console.log(this.state.sortValue)
    // console.log(this.state.filterStatus)
    const filteredHogs = this.state.filterStatus ? hogs.filter(hog => hog.greased ) : hogs

    return (
      <div className="App">
        < Nav />
        < FilterBar handleFilter={this.handleFilter} handleSort={this.handleSort}/>
      < HogList hogs={this.sortHogs(filteredHogs)}/>
      </div>
    )
  }
}

export default App;
