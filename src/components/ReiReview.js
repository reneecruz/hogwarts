// NOTES :

// HOGTILE COMPONENT:

state = {
  clicked: false,
  sortValue: ''
}

handleSort = () => {
  console.log("hi from handleSort")

}


handleClick = () => {
  this.setState({
    clicked: !this.state.clicked
  })
}

slugItOut = (name) => {
  name.split(" ").join("_").toLowerCase()
}

// this.slugItOut(this.props.hog.name)

render() {

  return (

    // <div onClick={this.props.handleSelected}></div>

    // { this.props.selected === this.props.hog ? }

    <div onClick={this.handleClick} className="ui eight wide column">
    <h1>{this.props.hog.name}</h1>
    <img src={`/hog-imgs/${this.slugItOut(this.props.hog.name)}.jpg`} />

    {
      this.state.clicked?
      <div>
        <p>Weight: {this.props.hog.weight}</p>
        <p>Specialty: {this.props.hog.specialty}</p>
      </div>

      :

      null
    }

  );
}

// FILTER COMPONENT:

<button onClick={this.props.handleFilter}>Greased?</button>

<select onChange={this.props.handleSort}>
  <option value="all">ALL</option>
  <option value="all">Sort by Name</option>
  <option value="all">Sort By Weight</option>

</select>

// in APP.JS :

state = {
  filterStatus: false,
  sortMethod: "",
  selected: {}
}

handleSelected = {pigObject} => {
  this.setState({
    selected: pigObject
  })
}

handleFilter = () => {
  this.setState({
    filterStatus: !this.state.filterStatus
  })
}

filterHogs = (hogs) => {
  this.state.filterStatus ? hogs.filter(hog => hog.greased) : hogs

  // if(this.state.filterStatus){
  //   return hogs.filter(hog => hog.greased)
  // }
  // else{
  //   return hogs
  // }
}


handleSort = (e) => {
  this.setState({
    sortMethod: e.target.value
  })
}


sortHogs = (hogs) => {
  if(this.state.sortMethod === "name"){
  //   hogs.sort((a,b) => {
  //     return 1
  //   }
  //   else if (a < b){
  //     return -1
  //   }
  //   else{
  //     0
  //   }
  // })
  return [...hogs].sort((a,b) => a.name.localeCompare(b.name))
  }
  else if(){

  }
  else{
    return hogs
  }
}



render() {
  return(
<FilterComponent handleFilter={this.handleFilter} handleSort={this.handleSort}/>
<HogsContainer selected={this.state.selected}handleSelected={this.handleSelected} hogs={this.sortHogs(this.filterHogs(hogs))} />
  )
}
